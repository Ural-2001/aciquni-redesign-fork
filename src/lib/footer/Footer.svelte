<script>
	import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
</script>

<div class="search-section">
	<div class="search-block">
		<div class="search">
			<input type="text" placeholder="PR һәм реклам, дизайн, икътисад...">
		</div>
		<div class="search-block-actions">
			<div class="social-buttons">
				<a href="" class="social">
					<img src="../icons/social/whatsapp.svg" alt="">
				</a>
				<a href="" class="social">
					<img src="../icons/social/telegram.svg" alt="">
				</a>
				<a href="" class="social">
					<img src="../icons/social/youtube.svg" alt="">
				</a>
				<a href="" class="social">
					<img src="../icons/social/vk.svg" alt="">
				</a>
			</div>
			<ButtonArrowLong text={'Яңа онлайн курслар'}/>
			<!-- <a href="/" class="new-courses-button">
				Яңа онлайн курслар
				<img src="./icons/ArrowUpRightWhite.svg" alt="">
			</a>	 -->
		</div>
	</div>
</div>

<footer class="container">
	<div class="links">
		<div>
			<h3>Курслар</h3>
			<div class="links-column">
				<a href="">Тарих</a>
				<a href="">Мәдәният</a>
				<a href="">Дизайн</a>
				<a href="">Икътисад</a>
				<a href="" class="all">Барча</a>
			</div>
		</div>
		<div>
			<h3>Татарча фән</h3>
			<div class="links-column">
				<a href="">Мәкаләләр</a>
				<a href="">Язмалар</a>
				<a href="">Видео</a>
				<a href="">Фото</a>
			</div>
		</div>
		<div>
			<h3>Университет</h3>
			<div class="links-column">
				<a href="">Безнең тарих</a>
				<a href="">Укытучылар</a>
				<a href="">Команда</a>
				<a href="">Хезмәттәшлек</a>
			</div>
		</div>
		<div>
			<h3>Ярдәм</h3>
			<div class="links-column">
				<a href="">Шәхси сораулар</a>
				<a href="">Мәгариф оешмасы турында мәгълүмат</a>
				<a href="">Хокукый мәгълүмат</a>
				<a href="">Юридик документлар</a>
			</div>
		</div>
		<div>
			<h3 style="margin-left: 32px;">Элемтә</h3>

			<div class="links-column">
				<div class="phone">
					<img src="../icons/phone.svg" alt="">
					<div class="phone-text">
						<a href="tel:88432560720">8 843 256-07-20</a>
						<span>Көн саен 10: 00 дән 21: 00 гә кадәр</span>
					</div>
				</div>
			</div>
			<div class="links-column">
				<div class="phone">
					<img src="../icons/NavigationArrow.svg" alt="">
					<div class="phone-text">
						<a href="">Казан шәһәре, Карл Маркс урамы, 38/5</a>
						<span>12 мин Габдулла Тукай мәйданы метро станциясеннән</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="terms">
		<span>© 2022 Ачык Университет. Барлык хокуклар якланган.</span>
		<a href="">Политика конфиденциальности</a>
		<a href="">Карта сайта</a>
	</div>
</footer>

<style>
	.search-section {
		margin-top: 100px;
		padding-right: 192px;
	}
	.search-block {
		border: 1px solid #1A233E;
		border-left: 0;
		padding: 28px;
		border-radius: 0 100px 100px 0;
		padding-left: 192px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.search input {
		border: none;
		color: #1A233E;
		font-size: 20px;
		width: 360px;
		background: url(./MagnifyingGlass.svg) no-repeat scroll 0 50%;
		padding-left: 30px;
	}
	.search input::placeholder {
		color: #B9B9B9;
	}
	.search input:focus {
		outline: none;
	}
	.search-block-actions {
		display: flex;
	}
	.social-buttons {
		display: flex;
		gap: 12px;
		margin-right: 25px;
	}
	.social {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
		border: 2px solid #E7E7E7;
		border-radius: 100px;	
	}
	.social:hover {
		border-color: var(--primary-color);
	}
	footer {
		margin-top: 70px;
	}
	.links {
		display: flex;
		justify-content: space-between;
	}
	.links h3 {
		color: var(--primary-color);
		font-size: 22px;
	}
	.links-column {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 20px;
	}
	.links-column a {
		font-size: 12px;
	}
	.links-column a:hover {
		color: var(--primary-color);
	}
	.links-column .all {
		color: #999999;
	}
	.phone {
		display: flex;
	}
	.phone-text {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
	}
	.phone-text a {
		font-size: 18px;
		color: #1A233E;
		font-weight: 600;
	}
	.phone-text span{
		color: #B9B9B9;
		line-height: 15px;
		font-size: 12px;
	}
	.terms {
		font-size: 10px;
		color: #BFBFBF;
		display: flex;
		gap: 22px;
		margin-top: 60px;
		margin-bottom: 30px;
	}
	.terms a{
		color: #BFBFBF;
	}
</style>