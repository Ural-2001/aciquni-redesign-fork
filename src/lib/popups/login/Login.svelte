<script>
    import { mutationStore, gql, getContextClient } from '@urql/svelte';
    import { onMount } from 'svelte';

    let closePopup;
    let openPasswordResetPopup;

    let hasAccount = true;
    let changeSection;

    let login = 'main_admin';
    let password = 'TatarKala2035';

    let result;
    let client = getContextClient();
    const loginFunc = async () => {
        result = await mutationStore({
            client,
            query: gql`
                mutation ($login: String!, $password: String!) {
                    login(login: $login, password: $password) {
                        ok
                        token
                        user {
                            id
                            username
                            firstName
                            lastName
                            email
                            isActive
                            dateJoined
                            phoneNumber
                        }
                        errors
                    }
                }
            `,
            variables: { login, password },
        });        
    };

    let email = 'test2@test.com';
    let firstName = 'Test';
    let lastName = 'Test';
    let passwordReg = 'Test2035';
    let passwordRegRepeat = 'Test2035';
    let resultReg;
    const regFunc = async () => {
        resultReg = await mutationStore({
            client,
            query: gql`
            mutation (
                $email: String!,
                $firstName: String!,
                $lastName: String!,
                $password: String!,
                $passwordRepeat: String!
                ){
                    reg(
                        email: $email
                        firstName: $firstName
                        lastName: $lastName
                        password: $password
                        passwordRepeat: $passwordRepeat
                    ) {
                        ok
                        token
                        user {
                        id
                        username
                        firstName
                        lastName
                        email
                        isActive
                        dateJoined
                        phoneNumber
                        }
                        errors
                    }
                }
            `,
            variables: { email, firstName, lastName, password: passwordReg, passwordRepeat: passwordRegRepeat }
        });        
    };

    onMount(() => {
        let loginPopup = document.getElementById('loginPopup');
        let passwordResetPopup = document.getElementById('passwordResetPopup');
        let popupBackground = document.getElementById('popupBackground');

		closePopup = () => {
            loginPopup.style.display = 'none';
            loginPopup.style.opacity = '0';
            popupBackground.style.display = 'none';
        };

        openPasswordResetPopup = () => {
            loginPopup.style.display = 'none';
            loginPopup.style.opacity = '0';
            passwordResetPopup.style.display = 'flex';
            passwordResetPopup.style.opacity = '100%';
        };

        changeSection = () => {
            hasAccount = !hasAccount;
        };
        
	});
</script>

<div class="popup" id="loginPopup">
    <div class="popup-section">
        <div>
            <div class="login-header">
                <div class="login-links">  
                    <span on:click={changeSection} class="{hasAccount ? 'selected' : ''}">????????</span>
                    <span on:click={changeSection} class="{!hasAccount ? 'selected' : ''}">????????????</span>
                </div>
            </div>
            {#if hasAccount}
                <form class="login-form">
                    <div class="form-input">
                        <div class="form-input-field">
                            <label for="email">???????????????? ??????????</label>
                            <input type="text" bind:value={login} id="email" placeholder="name@mail.com">
                        </div>
                        <img src="/icons/user.svg" alt="">
                    </div>
                    <div class="form-input">
                        <div class="form-input-field">
                            <label for="password">???????????? ????????????</label>
                            <input type="password" bind:value={password} id="password" placeholder="****">
                        </div>
                        <img src="/icons/lockOpen.svg" alt="">
                    </div>
                    <div class="popup-bottom">
                        <button
                            on:click|preventDefault={() => {
                                loginFunc()
                                function isGot() {
                                    if ($result.error)
                                        console.log($result.error)
                                    if ($result.data?.login?.ok) {
                                        console.log($result.data)
                                        localStorage.setItem('user', JSON.stringify($result.data.login));
                                        window.location = '/profile';
                                    }
                                }
                                setTimeout(isGot, 1000);
                            }}
                            type="submit" class="button submit-button">
                            ????????
                            <img src="/icons/ArrowUpRightWhite.svg" alt="">
                        </button>
                        <span on:click={openPasswordResetPopup} class="forgot-password">???????????? ?????????????????????</span>
                    </div>
                </form>
            {:else}
                <form class="login-form">
                    <div class="form-input">
                        <div class="form-input-field">
                            <label for="name">????????????????</label>
                            <input bind:value={firstName} type="text" id="name" placeholder="??????????????????">
                        </div>
                    </div>
                    <div class="form-input">
                        <div class="form-input-field">
                            <label for="email">???????????????? ??????????</label>
                            <input bind:value={email} type="email" id="email" placeholder="alexkama@mail.com">
                        </div>
                    </div>
                    <div class="form-input">
                        <div class="form-input-field">
                            <label for="password1">???????????? ?????????? ??????????????</label>
                            <input bind:value={passwordReg} type="password" id="password" placeholder="****">
                        </div>
                        <img src="/icons/Eye.svg" alt="">
                    </div>
                    <div class="form-input">
                        <div class="form-input-field">
                            <label for="password2">???????????????? ????????????????????</label>
                            <input  bind:value={passwordRegRepeat} type="password" id="password2" placeholder="****">
                        </div>
                        <img src="/icons/EyeSlash.svg" alt="">
                    </div>
                    <div class="check-terms">
                        <input type="checkbox" id="check-terms">
                        <label for="check-terms">???????????????? ?????????????? ?????????????????? ???????????????????????????????? ????????????</label>
                    </div>
                    <div class="popup-bottom">
                        <button 
                        on:click|preventDefault={() => {
                            regFunc()
                            function isGot() {
                                if ($resultReg.error)
                                    console.log($resultReg.error)
                                if ($resultReg.data?.reg?.ok) {
                                    console.log($resultReg.data)
                                    localStorage.setItem('user', JSON.stringify($resultReg.data.reg));
                                    window.location = '/profile';
                                }
                            }
                            setTimeout(isGot, 3000);
                        }}
                        type="submit" class="button submit-button">
                            ????????????
                            <img src="/icons/ArrowUpRightWhite.svg" alt="">
                        </button>
                    </div>
                </form>
            {/if}
        </div> 
        <div>
            <button class="button-secondary close-button" on:click={closePopup}>
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
        color: #B4B4B4;
    }

    .login-links span:hover {
        cursor: pointer;
        color: #1A233E;
    }

    .login-links span.selected {
        color: #1A233E;
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
        /* background: url(/MagnifyingGlass.svg) no-repeat scroll 95% 50%; */
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
    .forgot-password:hover {
        cursor: pointer;
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