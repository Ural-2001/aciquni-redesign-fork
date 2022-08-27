<script>
</script>

<div class="container navibar">
	<div class="left-links">
		<a href="#" class="button-secondary courses-button">
            <img src="./icons/CirclesFour.svg" alt="">
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

	<div class="search">
        <input type="text" placeholder="Сайт буенча эзләү">
    </div>

	<div class="profile-buttons">
		<a href="" class="button button-small">
			Шәхси Кабинет
		</a>
		<a href="" class="button-secondary">
			Теркәү
		</a>
	</div>

</div>

<style type="text/scss">
	.navibar {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	.profile-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 15px;
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
</style>