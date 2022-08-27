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
		gap: 30px;
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
</style>