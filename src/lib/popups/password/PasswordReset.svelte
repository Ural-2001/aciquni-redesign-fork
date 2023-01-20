<script>
    import { onMount } from 'svelte';

    let closePasswordResetPopup;

    onMount(() => {
        let passwordResetPopup = document.getElementById('passwordResetPopup');
        let popupBackground = document.getElementById('popupBackground');

		closePasswordResetPopup = () => {
            passwordResetPopup.style.display = 'none';
            passwordResetPopup.style.opacity = '0';
            popupBackground.style.display = 'none';
        };
        
	});
</script>

<div class="popup" id="passwordResetPopup">
    <div class="popup-section">
        <div>
            <div class="login-header">
                <div class="login-links">  
                    <span>Парольны оныту</span>
                    <p>Парольны яңарту өчен email'ыгызны языгыз</p>
                </div>
            </div>
            <form class="login-form">
                <div class="form-input">
                    <div class="form-input-field">
                        <label for="email">Электрон почта</label>
                        <input type="text" id="email" placeholder="name@mail.com">
                    </div>
                    <img src="/icons/user.svg" alt="">
                </div>
                <div class="popup-bottom">
                    <button type="submit" class="button submit-button">
                        Яңарту
                        <img src="/icons/ArrowUpRightWhite.svg" alt="">
                    </button>
                </div>
            </form>
        </div> 
        <div>
            <button class="button-secondary close-button" on:click={closePasswordResetPopup}>
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
        max-width: 424px;
        max-width: 530px;
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
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 424px;
        max-width: 530px;
        z-index: 2;
        background-color: white;
        border: 1px solid var(--text-tertiary-color);
        border-radius: 24px;
        padding: 40px 30px 50px 80px;
    }

    .login-header {
        font-size: 40px;
        color: var(--text-color);
        margin-bottom: 40px;
        line-height: initial;
    }

    .login-links span {
        color: #1A233E;
    }

    .login-links p {
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
        width: 350px;
        margin-bottom: 30px;
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

    .forgot-password {
        font-size: 12px;
        color: var(--primary-color);
    }

    .popup-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .check-terms {
        display: flex;
        font-size: 11px;
        color: #B4B4B4;
        margin-bottom: 30px;
        margin-top: 30px;
    }
    .check-terms input{
        margin-right: 10px;
    }
</style>