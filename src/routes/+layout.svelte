<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';
	import '../app.postcss';
	import AdvicePopup from '../lib/popups/advice/AdvicePopup.svelte';
	import Login from '../lib/popups/login/Login.svelte';
	import PasswordReset from '../lib/popups/password/PasswordReset.svelte';
	import GetSertificate from '../lib/popups/sertificate/GetSertificate.svelte';
	import { createClient, setContextClient } from '@urql/svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Error from '../lib/error/Error.svelte';

	const client = createClient({
		url: 'https://univer.tatar/graphql/',
		fetchOptions: () => {
			let token = browser ? (window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')).token : '') : '';

			return {
				headers: { authorization: `token ${token}` },
			};
		},
	});
	setContextClient(client);
</script>

{#if $page.status === 200 || $page.status === 404}
	<div id="popupBackground" style="display: none; background-color: rgba(0, 0, 0, 0.343); position: fixed; width: 100%; height: 100%; "></div>

	<Login />
	<PasswordReset />
	<GetSertificate />
	<AdvicePopup />

	<Header />

	<main>
		<slot />
	</main>

	<Footer />

{:else}
	<div style="margin-top: 100px;">
		<Error />
	</div>
{/if}

<style>
	main {
		margin-top: 55px;
	}
</style>
