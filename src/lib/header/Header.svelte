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
		<a href="#" class="button">
			Брача
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
		
		<a href="">
			Тат
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

	.button {
		background-color: var(--secondary-button-color);
		height: initial;
		max-height: 28px;
	}

	.button:hover {
		background-color: var(--primary-color);
		color: white;
	}

	a:hover {
		text-decoration: none;
	}
</style>