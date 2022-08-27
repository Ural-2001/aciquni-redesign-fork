<script>
</script>

<header class="container">
	<div class="left-links">
		<a href="#" class="button">
			Тарих
		</a>
		<a href="#" class="button">
			Мәдәният
		</a>
		<a href="#" class="button">
			Дизайн
		</a>
		<a href="#" class="button">
			Икътисад
		</a>
		<a href="#" class="button">
			Әдәбият
		</a>
		<a href="#" class="button-secondary">
			<span>Барча</span>
			<img src="./icons/ArrowUpRight.svg" alt="">
		</a>
	</div>

	<a href="">
		<img src="./aciquni-logo.svg" alt="">
	</a>

	<div class="right-links">
		<a href="">
			Сайланма
		</a>
		<a href="">
			Фикерләр
		</a>
		<a href="">
			Элемтә
		</a>
		<a href="" style="display:flex; align-items:center; gap: 5px;">
			Тат
			<img src="./icons/globe.svg" alt="">
		</a>
	</div>

</header>

<style type="text/scss">
	header {
		padding: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
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

	.button {
		background-color: var(--secondary-button-color);
		height: initial;
		max-height: 28px;
	}

	.button:hover {
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