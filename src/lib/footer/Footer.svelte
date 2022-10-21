<div class="search-section">
	<div class="search-block">
		<div class="search">
			<input type="text" placeholder="PR һәм реклам, дизайн, икътисад...">
		</div>
		<div class="search-block-actions">
			<div class="social-buttons">
				<a href="" class="social">
					<img src="./icons/social/whatsapp.svg" alt="">
				</a>
				<a href="" class="social">
					<img src="./icons/social/telegram.svg" alt="">
				</a>
				<a href="" class="social">
					<img src="./icons/social/youtube.svg" alt="">
				</a>
				<a href="" class="social">
					<img src="./icons/social/vk.svg" alt="">
				</a>
			</div>
			<a href="/" class="new-courses-button">
				Яңа онлайн курслар
				<img src="./icons/ArrowUpRightWhite.svg" alt="">
			</a>	
		</div>
	</div>
</div>

<footer class="container">

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
	.search-block-actions {
		display: flex;
	}
	.social-buttons {
		display: flex;
		gap: 12px;
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
	.new-courses-button {
		background-color: var(--primary-color);
		color: white;
		padding: 18px 30px 18px 30px;
		border-radius: 50px;	
		margin-left: 25px;
	}
	.new-courses-button img {
		width: 20px;
	}
	.new-courses-button:hover {
		text-decoration: none;
	}
</style>