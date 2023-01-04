<script>
    import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
    import { queryStore, gql, getContextClient } from '@urql/svelte';

    const contactPage = queryStore({
		client: getContextClient(),
		query: gql`
            query{
                contactPage {
                    id
                    address
                    commentForAddress
                    latitude
                    longitude
                    contact1Title
                    contact1Name
                    contact1Phone
                    contact1Email
                    contact2Title
                    contact2Name
                    contact2Phone
                    contact2Email
                }
            }
		`,
	});
</script>

<div class="container top-section">
    <div class="breadcrumbs">
        <a href="/">баш</a>
        <img src="/icons/CaretLeft.svg" alt="">
        <a href="">элемтә</a>
    </div> 
</div>
<div class="container">
    <h1>элемтә</h1>
    {#if $contactPage.fetching}
        <p>Loading...</p>
    {:else if $contactPage.error}
        <p>Oh no... {$contactPage.error.message}</p>
    {:else}
        <div class="contacts">
            {#if $contactPage.data.contactPage.address}
                <div class="map-section">
                    <div class="map-section-info">
                        <div class="map-icon">
                            <img src="/icons/MapTrifold.svg" alt="">
                        </div>
                        <div class="address">
                            <span class="address-point">{$contactPage.data.contactPage.address}</span>
                            <span class="address-text">{$contactPage.data.contactPage.commentForAddress}</span>
                        </div>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.8401332815115!2d49.12339781250517!3d55.79601382729805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ea9174c65a461%3A0x8328ff2829b5c18a!2sIspolnitel&#39;nyy%20Komitet%20%22Vsemirnogo%20Kongressa%20Tatar%22!5e0!3m2!1sen!2str!4v1666875311384!5m2!1sen!2str" 
                        width="617"
                        height="180" 
                        style="border:0;border-radius:16px;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                    <!-- <div style="position:relative;overflow:hidden;"> -->
                        <!-- <a href="https://yandex.ru/maps/org/ispolkom_vsemirnogo_kongressa_tatar/234266260044/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Исполком Всемирного Конгресса татар</a>
                        <a href="https://yandex.ru/maps/43/kazan/category/community_organization/184106274/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Общественная организация в Казани</a> -->
                        <!-- <iframe src="https://yandex.ru/map-widget/v1/-/CCUZbSDh0A" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe> -->
                    <!-- </div> -->
                </div>
            {/if}
            {#if $contactPage.data.contactPage.contact1Title}
                <div class="contact-card">
                    <h6 class="contact-card-title">{$contactPage.data.contactPage.contact1Title}</h6>
                    <div class="contact-person">
                        <img src="/img/contacts/zehra.png" alt="">
                        <span class="contact-name">{$contactPage.data.contactPage.contact1Name}</span>
                    </div>
                    <hr>
                    <div class="contact-phone">
                        <img src="/icons/PhonePurple.svg" alt="">
                        <span>{$contactPage.data.contactPage.contact1Phone}</span>
                    </div>
                    <div class="contact-phone">
                        <img src="/icons/mail.svg" alt="">
                        <span>{$contactPage.data.contactPage.contact1Email}</span>
                    </div>
                </div>
            {/if}
            {#if $contactPage.data.contactPage.contact2Title}
                <div class="contact-card">
                    <h6 class="contact-card-title">{$contactPage.data.contactPage.contact2Title}</h6>
                    <div class="contact-person">
                        <img src="/img/contacts/rainur.png" alt="">
                        <span class="contact-name">{$contactPage.data.contactPage.contact2Name}</span>
                    </div>
                    <hr>
                    <div class="contact-phone">
                        <img src="/icons/PhonePurple.svg" alt="">
                        <span>{$contactPage.data.contactPage.contact2Phone}</span>
                    </div>
                    <div class="contact-phone">
                        <img src="/icons/mail.svg" alt="">
                        <span>{$contactPage.data.contactPage.contact2Email}</span>
                    </div>
                </div>
            {/if}
        </div>
    {/if}
    <div class="advice-section">
        <h2>хезмәттәшлек</h2>
        <p>Сез безгә Сезне кызыксындырган сорау буенча: укудан алып хезмәттәшлеккә кадәр яза аласыз</p>
        <div class="advice-form">
            <div class="advice-form-input" style="grid-area: name;" id="name">
                <label for="">Исемегез</label>
                <input type="text" value="Александр">
            </div>
            <div class="advice-form-input" style="grid-area: phone;" id="phone">
                <label for="">Исемегез</label>
                <input type="text" value="Александр">
            </div>
            <div class="advice-form-input" style="grid-area: mail;" id="mail">
                <label for="">Исемегез</label>
                <input type="text" value="Александр">
            </div>
            <div class="advice-form-input" style="grid-area: theme;" id="theme">
                <label for="">Исемегез</label>
                <input type="text" value="Александр">
            </div>
            <div class="advice-textarea" style="grid-area: text;" id="text">
                <label for="">Сезнең тәкъдим</label>
                <textarea name="" placeholder="Мин тәкъдим итәргә телим..." id="" rows="1"></textarea>
            </div>
        </div>
        <div class="advice-send-section">
            <a href="" class="button">
                <span>Тәкъдимне җибәрергә</span>
                <img src="/icons/ArrowUpRightWhite.svg" alt="">
            </a>
            <label class="terms-checkbox" for="terms">
                <input type="checkbox" id="terms">
                <span class="checkmark"></span>
                <span>Принимаю <a href="">условия обработки</a> пользовательских данных</span>
            </label>
        </div>
    </div>
</div>

<style>
    h1 {
        font-weight: 600;
        font-size: 52px;
    }
    .contacts {
        display: flex;
        gap: 15px;
        margin-top: 40px;
    }
    .map-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .map-section-info {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .map-icon {
        background-color: var(--primary-color);
        border-radius: 16px;
        width: 68px;
        height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .address {
        display: flex;
        flex-direction: column;
    }
    .address-point {
        font-weight: 600;
        font-size: 20px;
    }
    .address-text {
        color: #999999;
        font-size: 14px;
    }
    .contact-card {
        padding: 20px 25px;
        border: 1px solid var(--primary-color);
        border-radius: 24px;
        width: 312px;
    }
    .contact-card-title {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 45px;
    }
    .contact-person {
        display: flex;
        gap: 17px;
    }
    hr {
        margin-top: 25px;
        margin-bottom: 25px;
        border-color: #848084;
    }
    .contact-phone span {
        font-weight: 500;
        font-size: 14px;
    }
    .advice-section {
        margin-top: 90px;
    }
    .advice-section h2 {
        font-weight: 600;
        font-size: 52px;
    }
    .advice-form {
        margin-top: 30px;
        display: grid;
        grid-template-areas: 
            "name phone mail theme"
            "text text text text";
            gap: 15px;
    }
    .advice-form-input,
    .advice-textarea{
        display: flex;
        flex-direction: column;
        border: 1px solid #E7E7E7;
        border-radius: 20px;
        padding: 10px 18px;
    }
    .advice-form-input label,
    .advice-textarea label {
        color: #B4B4B4;
    }
    .advice-form-input input,
    .advice-textarea textarea{
        border: none;
    }
    .advice-form-input input:focus,
    .advice-textarea textarea:focus {
        outline: none;
    }
    .advice-send-section {
        display: flex;
        align-items: center;
        margin-top: 40px;
    }
    .button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 32px;
        border: none;
        background-color: var(--primary-color);
        color: white;
        padding: 10px 30px;
        font-size: 14px;
        margin-right: 25px;
    }
    .button:hover {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
    .button img {
        margin-left: 30px;
    }
    .advice-send-section label a {
        text-decoration: underline;
    }
    .advice-send-section label a:hover {
        color: var(--primary-color);
    }
    .terms-checkbox {
        display: flex;
        align-items: center;
    }



    .terms-checkbox:hover {
        cursor: pointer;
    }
    /* Hide the browser's default checkbox */
    .terms-checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    /* Create a custom checkbox */
    .checkmark {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 18px;
        width: 18px;
        border: 1px solid #E1E1E1;
        border-radius: 100px;
        margin-right: 12px;
    }
    /* When the checkbox is checked, add a blue background */
    .terms-checkbox input:checked ~ .checkmark {
        background-image: url(./checkPurple.svg) ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 9px;
        border: 1px solid var(--primary-color);
    }
    .terms-checkbox input:hover ~ span {
        color: #A38BA5 !important;
    }
    .terms-checkbox input:checked ~ span {
        color: #1A233E !important;
    }
</style>