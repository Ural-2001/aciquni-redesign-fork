<script>
    import { onMount } from 'svelte';

    let closePopup;

    onMount(() => {
        let loginPopup = document.getElementById('loginPopup');
        let popupBackground = document.getElementById('popupBackground');

		closePopup = () => {
            loginPopup.style.display = 'none';
            loginPopup.style.opacity = '0';
            popupBackground.style.display = 'none';
        };
	});
</script>

<div class="popup" id="loginPopup">
    <div>
        <div class="login-header">
            <div class="login-links">  
                <a href="">Керү</a>
                <a href="" style="color: #CBCBCB;">Теркәү</a>
            </div>
        </div>
        <form class="login-form">
            <div class="form-input">
                <div class="form-input-field">
                    <label for="email">Электрон почта</label>
                    <input type="text" id="email" placeholder="name@mail.com">
                </div>
                <img src="./icons/user.svg" alt="">
            </div>
            <div class="form-input">
                <div class="form-input-field">
                    <label for="password">Сезнең пароль</label>
                    <input type="text" id="password">
                </div>
                <img src="./icons/lockOpen.svg" alt="">
            </div>
            <div class="popup-bottom">
                <button type="submit" class="button submit-button">
                    Керү
                    <img src="./icons/ArrowUpRightWhite.svg" alt="">
                </button>
                <a href="#" class="forgot-password">Пароль онытылдымы?</a>
            </div>
        </form>
    </div>
    <div>
        <button class="button-secondary close-button" on:click={closePopup}>
            <img src="./icons/x.svg" alt="">
        </button>
    </div>
</div>

<style>
    .popup {
        display: none;
        opacity: 0;
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

        transition: all cubic-bezier(0.22, 0.61, 0.36, 1) 0.2s;
        -webkit-transition: all ease 0.2s;
        -moz-transition: all ease 0.2s;
        -ms-transition: all ease 0.2s;
        -o-transition: all ease 0.2s;
    }

    .login-header {
        font-size: 40px;
        color: var(--text-color);
        margin-bottom: 40px;
        line-height: initial;
    }

    .login-header a:hover {
        text-decoration: none;
        color: var(--text-color);
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
        margin-bottom: 15px;
    }
    .form-input-field {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    .form-input-field label {
        font-size: 12px;
        color: var(--text-color);
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
</style>