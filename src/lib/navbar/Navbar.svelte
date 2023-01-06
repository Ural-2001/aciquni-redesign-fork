<script>
	import { onMount } from 'svelte';

	let openPopup;

	let isAuthenticated;
	let logoutFunc;
	onMount(() => {
		let loginPopup = document.getElementById('loginPopup');
		let popupBackground = document.getElementById('popupBackground');

		openPopup = () => {
			popupBackground.style.display = 'block';
			loginPopup.style.display = 'flex';
			loginPopup.style.opacity = '100%';
		};

		isAuthenticated = localStorage.getItem('user') ? true : false;

		logoutFunc = () => {
			localStorage.removeItem('user');
			window.location = '/';
		}
	});
</script>

<div class="container navibar">
	<div class="left-links">
		<a href="/courses" class="button-secondary courses-button">
            <img src="../icons/CirclesFour.svg" alt="">
			Курслар
		</a>
		<a href="/blog">
			Татарча фән
		</a>
		<a href="/teachers">
			Мөгалимнәр
		</a>
		<a href="/university">
			Университет
		</a>
	</div>

	<div class="search">
        <input type="text" placeholder="Сайт буенча эзләү">
    </div>

	<div class="login-buttons">
		{#if isAuthenticated}
			<a href="/profile" class="button button-small">
				Шәхси Кабинет
			</a>
			<a href="" on:click={() => {logoutFunc()}} class="button-secondary">
				Чыгу
			</a>
		{:else}
			<a href="" class="button button-small" on:click={openPopup}>
				Шәхси Кабинет
			</a>
			<a href="" class="button-secondary">
				Теркәү
			</a>
		{/if}
	</div>

</div>

<!-- <div class="container navibar">
	<div class="left-links">
		<a href="/courses" class="button-secondary courses-button">
            <img src="../icons/CirclesFour.svg" alt="">
			Курслар
		</a>
		<a href="#">
			Татарча фән
		</a>
		<a href="#">
			Мөгалимнәр
		</a>
		<a href="#">
			Университет
		</a>
	</div>

	<a href="">
		<img src="../aciquni-logo.svg" alt="">
	</a>

	<div class="profile-buttons">
        <a href="" class="my-courses-button">
            <img src="../avatar.png" alt="">
            Минем курслар
        </a>
        <a href="">
            <img src="../icons/Trophy.svg" alt="">
        </a>
        <a href="">
            <img src../icons/HeartStraight.svg" alt="">
        </a>
        <a href="">
            <img src="../icons/SignOut.svg" alt="">
        </a>
	</div>

</div> -->

<style type="text/scss">
	.navibar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		font-size: 18px;
        margin-top: 45px;
	}
	.left-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 40px;
	}
	.login-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}

    .left-links a {
        font-size: 18px;
    }
    .left-links a:hover {
        color: var(--primary-color);
        text-decoration: none;
    }
    .courses-button {
        padding: 8px 25px 8px 20px;
    }
    .button-secondary img {
        margin-right: 20px;
    }

    .search input{
        border-radius: 25px;
        border: 1px solid #D3D3D3;
        padding: 8px 20px;
        background: url(./MagnifyingGlass.svg) no-repeat scroll 95% 50%;
        font-size: 14px;
        width: 350px;
    }

    .profile-buttons {
        display: flex;
        align-items: center;
        border: 1px solid #D3D3D3;
        border-radius: 30px;
        padding: 4px 20px 4px 4px;
        gap: 20px;
    }
    .my-courses-button {
        background-color: var(--primary-color);
        border-radius: 24px;
        color: white;
        padding: 7px 20px 8px 8px;
        font-size: 14px;
    }
    .my-courses-button:hover {
        text-decoration: none;
    }
    .my-courses-button img{
        margin-right: 20px;
        margin-top: -2px;
    }
</style>