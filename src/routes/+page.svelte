<script>
	import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
</script>

<svelte:head>
	<title>AçıqUni</title>
	<meta name="description" content="AçıqUni" />
</svelte:head>

<div class="top-section">
	<div class="top">
		<div class="left-tube">
		</div>
		<div>
			<img src="./img/mainpeople.png" alt="">
		</div>
	</div>
	<div class="tatar">
		<div class="circle"></div>
		<div class="circle" style="border-color: var(--primary-color); margin-left: -30px"></div>
		<div class="action-section">
			<h1>тулысынча <span>татар</span> теле</h1>
			<ButtonArrowLong text={'Яңа онлайн курслар'} />
		</div>
	</div>
	<div class="people">
		<div class="people-images">
			<img src="./img/people/1.png" alt="">
			<img src="./img/people/2.png" alt="">
			<img src="./img/people/3.png" alt="">
			<img src="./img/people/4.png" alt="">
			<img src="./img/people/5.png" alt="">
		</div>
		<div class="people-section">
			<h1>онлайн <span>университет</span></h1>
		</div>
	</div>
</div>

<style>
	.top {
		display: flex;
	}	
	.left-tube {
		height: 240px;
		width: 25%;
		border: 1px solid var(--primary-color);
		border-radius: 0 120px 120px 0;
		margin-right: 20px;
	}
	.tatar {
		display: flex;
		padding-left: 10%;
	}
	.circle {
		width: 135px;
		/* height: 120px; */
		border: 1px solid var(--text-color);
		border-radius: 120px;
	}
	.action-section {
		padding: 10px 50px 10px 50px;
		border: 1px solid var(--text-color);
		border-radius: 120px 0 0 120px;
		border-right: none;
		display: flex;
		align-items: center;
		margin-left: 15px;
		width: 100%;
	}
	.action-section h1 {
		font-size: 72px;
		font-weight: 700;
	}
	.action-section span {
		color: var(--primary-color);
	}
	.people {
		padding: 10px 50px 10px 50px;
		border: 1px solid var(--text-color);
		border-radius: 0 120px 120px 0;
		border-left: none;
		display: flex;
		justify-content: end;
		align-items: center;
		width: 80%;
	}
	.people-images{
		display: flex;
		gap: 15px;
		margin-right: 25px;
	}
	.people-images img{
		width: 58px;
	}
	.people-section h1 {
		font-size: 72px;
		font-weight: 700;
	}
	.people-section span {
		color: var(--primary-color);
	}
</style>
