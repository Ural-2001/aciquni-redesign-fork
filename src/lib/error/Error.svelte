<script>
    import { page } from '$app/stores';
	import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
</script>

<div class="container-xl error">
    <div class="left">
        <h1><span>кызганыч..</span> әлегә безнең сайтыбыз әшләми </h1>
        <p>Хәзереге вакытта сайтта техник эшләр алып барыла. Тиздән безнең Ачык университет студентлары өчен яңа дизайнлы сайт әзер булачак. Сезне безнең яңа сайтыбызда көтеп калабыз!</p>
        <img src="../aciquni-logo.svg" alt="">
    </div>
    <div class="right">
        <img src="/img/girlLike.png" alt="">
    </div>
</div>

<style>
    .error {
        display: flex;
        align-items: center;
        gap: 50px;
        margin-bottom: 100px;
    }
    .left h1{
        font-size: 52px;
        font-weight: 600;
    }
    .left h1 span{
        color: var(--primary-color);
    }
    p {
        margin-bottom: 40px;
    }
    .right img {
        width: 490px !important;
    }
</style>
