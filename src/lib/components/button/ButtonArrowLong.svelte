<script>
	export let text;
	export let action;
</script>

<div class="button" on:click={action}>
	<span>{text}</span>
    <img src="/icons/ArrowUpRightWhite.svg" alt="">
</div>

<style>
    .button {
		background-color: var(--primary-color);
		color: white;
		padding: 15px 30px 18px 30px;
		border-radius: 50px;	
		/* margin-left: 25px; */
		width: fit-content;
	}
	.button img {
		width: 20px;
		margin-left: 50px;
	}
	.button:hover {
		text-decoration: none;
	}
</style>