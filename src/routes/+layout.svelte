<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import Login from '../lib/popups/login/Login.svelte';
</script>
<div id="popupBackground" style="display: none; background-color: rgba(0, 0, 0, 0.343); position: absolute; width: 100%; height: 100%; "></div>

<Login />

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
</style>
