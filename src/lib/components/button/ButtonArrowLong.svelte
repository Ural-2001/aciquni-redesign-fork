<script>
	export let text;
</script>

<a href="/" class="button">
	<span>{text}</span>
    <img src="./icons/ArrowUpRightWhite.svg" alt="">
</a>

<style>
    .button {
		background-color: var(--primary-color);
		color: white;
		padding: 15px 30px 18px 30px;
		border-radius: 50px;	
		margin-left: 25px;
	}
	.button img {
		width: 20px;
		margin-left: 50px;
	}
	.button:hover {
		text-decoration: none;
	}
</style>