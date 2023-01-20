<script>
    import { onMount } from 'svelte';

    let closeAdvicePopup;

    onMount(() => {
        let advicePopup = document.getElementById('advicePopup');
        let popupBackground = document.getElementById('popupBackground');

		closeAdvicePopup = () => {
            advicePopup.style.display = 'none';
            advicePopup.style.opacity = '0';
            popupBackground.style.display = 'none';
        };
        
	});
</script>

<div class="popup" id="advicePopup">
    <div class="popup-section">
        <div>
            <div class="popup-header">
                <div class="popup-links">  
                    <span>Фикер калдыру</span>
                    <p>Узган курс турында сезнең фикерегезне калдырыгыз</p>
                </div>
            </div>
            <form class="advice-form">
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="advice">Фикер</label>
                        <textarea rows="5" id="advice" placeholder="БлаБлаБла" />
                    </div>

                </div>
            </form>
            <div class="popup-bottom">
                <button type="submit" class="button submit-button">
                    Фикерне җибәрергә
                    <img src="/icons/ArrowUpRightWhite.svg" alt="">
                </button> 
            </div>
        </div> 
        <div>
            <button class="button-secondary close-button" on:click={closeAdvicePopup}>
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
        /* max-width: 900px; */
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

    .advice-form {
        width: 100%;
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
        width: 100%;
    }
    .form-input-field {
        display: flex;
        flex-direction: column;
    }
    .form-input-field label {
        font-size: 12px;
        margin-top: -5px;
    }
    .form-input-field textarea{
        border: none;
        font-size: 16px;
        padding: 0;
        margin-top: -5px;
        width: 735px;
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

    .popup-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>