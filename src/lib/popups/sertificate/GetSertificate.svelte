<script>
    import { onMount } from 'svelte';

    let closeGetSertificatePopup;

    onMount(() => {
        let getSertificatePopup = document.getElementById('getSertificatePopup');
        let popupBackground = document.getElementById('popupBackground');

		closeGetSertificatePopup = () => {
            getSertificatePopup.style.display = 'none';
            getSertificatePopup.style.opacity = '0';
            popupBackground.style.display = 'none';
        };
        
	});
</script>

<div class="popup" id="getSertificatePopup">
    <div class="popup-section">
        <div>
            <div class="popup-header">
                <div class="popup-links">  
                    <span>Сертификат алу</span>
                    <p>Сертификат алу өчен форманы тулысынча тутырыгыз</p>
                </div>
            </div>
            <form class="get-sertificate-form">
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="email">Фамилия</label>
                        <input type="text" id="email" value="Камалиев">
                    </div>

                </div>
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="email">Исемегез</label>
                        <input type="text" id="email" value="Александр">
                    </div>
                    <img src="/icons/user.svg" alt="">
                </div>
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="email">Отчество</label>
                        <input type="text" id="email" value="Игнатович">
                    </div>
                    <img src="/icons/user.svg" alt="">
                </div>
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="email">Туган көнегез</label>
                        <input type="date" id="email" value="26.10.1904">
                    </div>
                    <img src="/icons/Calendar.svg" alt="">
                </div>
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="email">Телефон номеры</label>
                        <input type="text" id="email" value="+7 999 156-19-92">
                    </div>
                    <img src="/icons/user.svg" alt="">
                </div>
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="email">СНИЛС номеры</label>
                        <input type="text" id="email" value="556 578 685">
                    </div>
                    <img src="/icons/user.svg" alt="">
                </div>
            </form>
            <div class="city-index">
                <p>Чит ил вәкиле булсагыз, илегезнең коды.</p>
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="cityIndex">Илегезнең коды</label>
                        <input type="number" id="cityIndex" value="556 578 685">
                    </div>
                </div>
            </div>
            <div class="popup-bottom">
                <button type="submit" class="button submit-button">
                    Сертификат алу
                    <img src="/icons/ArrowUpRightWhite.svg" alt="">
                </button>
                <div>
                    <img src="/icons/CheckCircle.svg" alt="">
                    <span class="terms-checked">Принимаю <a href="">условия обработки</a> пользовательских данных</span>
                </div> 
            </div>
        </div> 
        <div>
            <button class="button-secondary close-button" on:click={closeGetSertificatePopup}>
                <img src="/icons/x.svg" alt="">
            </button>
        </div>
    </div>
</div>

<style>
    .popup {
        display: none;
        opacity: 0;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 900px;
        max-height: 530px;
        z-index: 2;
        background-color: white;
        border: 1px solid var(--text-tertiary-color);
        border-radius: 24px;
        padding: 40px 30px 50px 80px;

        transition: all cubic-bezier(0.22, 0.61, 0.36, 1) 0.2s;
        -webkit-transition: all ease 0.2s;
        -moz-transition: all ease 0.2s;
        -ms-transition: all ease 0.2s;
        -o-transition: all ease 0.2s;
    }
    .popup-section {
        display: flex;
    }

    .popup-header {
        font-size: 40px;
        color: var(--text-color);
        margin-bottom: 40px;
        line-height: initial;
    }

    .get-sertificate-form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        margin-bottom: 30px;
    }

    .popup-links span {
        color: #1A233E;
    }

    .popup-links p {
        color: #1A233E;
        font-size: 16px;
        margin-top: 10px;
    }

    label {
        color: #B4B4B4;
    }

    .form-input{
        display: flex;
        justify-content: space-between;
        border-radius: 25px;
        border: 1px solid var(--text-tertiary-color);
        padding: 8px 20px;
        background: url(./MagnifyingGlass.svg) no-repeat scroll 95% 50%;
        font-size: 14px;
        width: 235px;
    }
    .form-input-field {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    .form-input-field label {
        font-size: 12px;
        margin-top: -5px;
    }
    .form-input-field input{
        border: none;
        font-size: 16px;
        padding: 0;
        margin-top: -5px;
    }

    .city-index {
        display: flex;
        align-items: center;
        background-color: #F5F5F5;
        border-radius: 25px 25px 25px 25px;
        margin-bottom: 30px;
    }
    .city-index p {
        font-size: 16px;
        max-width: 216px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 20px;
        line-height: 140%;
    }
    .city-index .form-input {
        background-color: white;
        width: 100%;
        margin-left: 30px;
        height: auto;
    }
    .city-index .form-input-field {
        width: 100%;
    }
    .city-index input {
        width: 100%;
    }

    .close-button {
        border: none;
        padding: 12px;
        background-color: #f7f7f5;
    }

    .submit-button {
        padding: 15px 25px 15px 30px;
        font-size: 18px;
    }
    .submit-button img {
        margin-left: 40px;
    }

    .terms-checked {
        font-size: 12px;
        color: #B4B4B4;
    }
    .terms-checked a{
        color: #B4B4B4;
        text-decoration: underline;
    }

    .popup-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>