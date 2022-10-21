<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';
	import AdvicePopup from '../lib/popups/advice/AdvicePopup.svelte';
	import Login from '../lib/popups/login/Login.svelte';
	import PasswordReset from '../lib/popups/password/PasswordReset.svelte';
	import GetSertificate from '../lib/popups/sertificate/GetSertificate.svelte';
</script>
<div id="popupBackground" style="display: none; background-color: rgba(0, 0, 0, 0.343); position: absolute; width: 100%; height: 100%; "></div>

<Login />
<PasswordReset />
<GetSertificate />
<AdvicePopup />

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
