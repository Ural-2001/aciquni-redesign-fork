<script>
    import { page } from '$app/stores';
	import ButtonArrowLong from '../lib/components/button/ButtonArrowLong.svelte';
</script>

<div class="container-xl error">
    <div class="left">
        <div class="breadcrumbs">
            <a href="/">баш</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="">бит табылмады</a>
        </div>
        <h1><span>кызганыч..</span> сез эзләгән <br> битне табып булмады</h1>
        <p>Бәлки, сез хата җибәрелгән сылтама буенча күчкәнсездер, яки ресурс иде удален. Карагыз әле күчәргә төп сәхифәне</p>
        <ButtonArrowLong text='Төпкә күчү' />
    </div>
    <div class="right">
        <img src="/img/404img.png" alt="">
    </div>
</div>

<style>
    .error {
        display: flex;
        align-items: flex-start;
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
        margin-top: 50px;
    }
</style>
