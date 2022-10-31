<script>
    import LessonCard from "$lib/lesson/LessonCard.svelte";
    import LessonText from "$lib/lesson/LessonText.svelte";
    import LessonVideo from "$lib/lesson/LessonVideo.svelte";

    import { onMount } from 'svelte';

    let selectedPage = 'content';
    let selectPage = (page) => {
        selectedPage = page;
    };
    // onMount(() => {
	// });
    
</script>

<div class="container lesson-page">
    <LessonCard />
    <div class="lesson">
        <h1>"Сәлам" дәреслеге белән татар телен укыту алымнары"</h1>
        <p class="lesson-info">15 минут  ·  Лектор Халисә Кузьмина</p>
        <div class="lesson-nav">
            <div class="lesson-left">
                <img src="/icons/CaretLeft.svg" alt="">
                Алдагы дәрес
            </div>
            <div class="lesson-lessons">
                <div class="lesson-number finished">
                    <img src="/icons/CheckCircleBlack.svg" alt="">
                </div>
                <div class="lesson-number active">2</div>
                <div class="lesson-number">3</div>
                <div class="lesson-number">4</div>
                <div class="lesson-number">5</div>
                <div class="lesson-number">6</div>
                <div class="lesson-number test">Тест</div>
            </div>
            <div class="lesson-right">
                Киләсе дәрес
                <img src="/icons/CaretRightWhite.svg" alt="">
            </div>
        </div>
        <LessonText />
        <!-- <LessonVideo /> -->
    </div>
</div>


<style>
    .lesson-page {
        display: flex;
        justify-content: space-between;
        gap: 125px;
    }
    .lesson {
        width: 66%;
    }
    h1 {
        font-size: 30px;
        font-weight: 600;
        margin: 0;
    }
    .lesson-info {
        color: #B4B4B4;
        font-size: 12px;
        margin: 0;
    }
    .lesson-nav {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .lesson-left {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 13px 40px 15px 20px;
        border: 1px solid var(--primary-color);
        border-radius: 50px;
        cursor: pointer;
    }
    .lesson-right {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 13px 20px 15px 40px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50px;
        cursor: pointer;
    }
    .lesson-lessons {
        display: flex;
        gap: 10px;
    }
    .lesson-number {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        width: 40px;
        cursor: pointer;
    }
    .lesson-number img{
        width: 16px;
    }
    .lesson-number.finished {
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .lesson-number.active {
        font-size: 12px;
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color);
        color: white;
    }
    .lesson-number.test {
        padding: 0 25px;
    }
</style>
