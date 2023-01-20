<script>
    import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';

    export let me;
    let firstName = me.firstName;
    let lastName = me.lastName
    let middleName = me.middleName;
    let birthDate = me.birthDate;
    let phone = me.phoneNumber;
    let email = me.email;

    let password = '';
    let newPassword = '';
    let newPasswordRepeat = '';

    let resultUpdateUser;
    let client = getContextClient();
    const updateUser = async () => {
        resultUpdateUser = await mutationStore({
            client,
            query: gql`
            mutation ($firstName: String, $lastName: String, $middleName: String, $birthDate: Date, $phone: String) {
                updateUser(firstName: $firstName, lastName: $lastName, middleName: $middleName, birthDate: $birthDate, phone: $phone) {
                    ok
                    errors
                }
            }`,
            variables: { firstName, lastName, middleName, birthDate, phone }
        });        
    };
</script>

<h1>Минем профиль</h1>
<h5 class="mt-5">Шәхси мәгълүматлар</h5>
<form class="login-form mt-3">
    <div class="form-input">
        <div class="form-input-field">
            <label for="lastName">Фамилия</label>
            <input type="text" bind:value={lastName} id="lastName">
        </div>
    </div>
    <div class="form-input">
        <div class="form-input-field">
            <label for="firstName">Исемегез</label>
            <input type="text" bind:value={firstName} id="firstName">
        </div>
    </div>
    <div class="form-input">
        <div class="form-input-field">
            <label for="middleName">Отчество</label>
            <input type="text" bind:value={middleName} id="middleName">
        </div>
    </div>
    <div class="form-input">
        <div class="form-input-field">
            <label for="birthDate">Туган көнегез</label>
            <input type="text" bind:value={birthDate} id="birthDate">
        </div>
        <img src="./icons/lockOpen.svg" alt="">
    </div>
    <div class="form-input">
        <div class="form-input-field">
            <label for="phone">Телефон номеры</label>
            <input type="text" bind:value={phone} id="phone">
        </div>
    </div>
    <div class="form-input">
        <div class="form-input-field">
            <label for="email">Электрон почта</label>
            <input type="text" bind:value={email} id="email" >
        </div>
    </div>
</form>
<div class="popup-bottom">
    <button
        on:click|preventDefault={() => {
            updateUser();
        }}
        type="submit" class="button submit-button">
        Узгәртергә
    </button>
</div>
<h5 class="mt-5">Минем парольны үзгәртергә</h5>
<form class="login-form mt-3">
    <div class="form-input">
        <div class="form-input-field">
            <label for="email">Иске пароль</label>
            <input type="text" bind:value={password} id="password">
        </div>
        <img src="./icons/lockOpen.svg" alt="">
    </div>
    <div class="form-input">
        <div class="form-input-field">
            <label for="password">Яңа парольне уйлап табыгыз</label>
            <input type="password" bind:value={newPassword} id="password">
        </div>
        <img src="./icons/lockOpen.svg" alt="">
    </div>
    <div class="form-input">
        <div class="form-input-field">
            <label for="password">Яңа парольне кабатлагыз</label>
            <input type="password" bind:value={newPasswordRepeat} id="password">
        </div>
        <img src="./icons/lockOpen.svg" alt="">
    </div>
</form>
<div class="popup-bottom">
    <button
        on:click|preventDefault={() => {
        }}
        type="submit" class="button submit-button">
        Парольны үзгәртергә
    </button>
</div>

<style>
    h1 {
        color: var(--primary-color);
        font-weight: 600;
    }
    .login-form {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    .form-input{
        display: flex;
        justify-content: space-between;
        border-radius: 25px;
        border: 1px solid var(--text-tertiary-color);
        padding: 8px 20px;
        /* background: url(./MagnifyingGlass.svg) no-repeat scroll 95% 50%; */
        font-size: 14px;
        width: 270px;
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
    .submit-button {
        padding: 10px 30px;
        font-size: 14px;
        margin-top: 20px;
    }
</style>