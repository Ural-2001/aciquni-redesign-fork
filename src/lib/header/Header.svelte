<script>
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<header class="container">
	<div class="left-links">
		<a href="/courses" class="button-header">
			Тарих
		</a>
		<a href="/courses" class="button-header">
			Мәдәният
		</a>
		<a href="/courses" class="button-header">
			Дизайн
		</a>
		<a href="/courses" class="button-header">
			Икътисад
		</a>
		<a href="/courses" class="button-header">
			Әдәбият
		</a>
		<a href="/courses" class="button-secondary">
			<span>Барча</span>
			<img src="../icons/ArrowUpRight.svg" alt="">
		</a>
	</div>

	<a href="/">
		<img src="../aciquni-logo.svg" alt="">
	</a>

	<div class="right-links">
		<a href="">
			Сайланма
		</a>
		<a href="/reviews">
			Фикерләр
		</a>
		<a href="/contacts">
			Элемтә
		</a>
		<a href="" style="display:flex; align-items:center; gap: 5px;">
			Тат
			<img src="../icons/globe.svg" alt="">
		</a>
	</div>
</header>

<Navbar />

<style type="text/scss">
	header {
		padding-top: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		font-size: 12px;
	}
	.left-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
	.right-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 27px;
	}
	
	.right-links a{
		color: var(--text-secondary-color);
	}
	.right-links a:hover{
		color: var(--primary-color);
	}

	.button-header {
		background-color: var(--secondary-button-color);
		height: initial;
		max-height: 28px;
	}

	.button-header:hover {
		background-color: var(--primary-color);
		color: white;
	}

	.button-secondary {
		border: 1px solid var(--text-tertiary-color);
		color: var(--text-secondary-color);
		display: flex;
		align-items: center;
		padding: 0 10px 0 0;
	}
	.button-secondary span {
		padding: 0 10px 0 20px;
	}

	a:hover {
		text-decoration: none;
	}
</style>