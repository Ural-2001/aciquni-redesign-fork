<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";

    import { onMount } from 'svelte';

    let selectedPage = 'content';
    let selectPage = (page) => {
        selectedPage = page;
    };
    // onMount(() => {
	// });
    
</script>

<div class="container profile">
    <ProfileCard />
    <div class="profile-content">
        <h1 class="course-title">Татар телен укытуда заманча һәм <br> нәтиҗәле ысуллар</h1>
        <div class="course-tags">
            <div style="display: flex; gap: 10px">
                <div class="course-card-tag">Укытучылык</div>
                <div class="course-card-tag">9 дәрес </div>
                <div class="course-card-progress-section">
                    <div class="course-card-progress-percent">50% <span>уздым</span></div>
                    <div class="course-card-progress-back">
                        <div class="course-card-progress-front" style="width: 50%;"></div>
                    </div>
                </div>
            </div>
            <div class="course-card-social-link">
                <img src="/icons/social/TelegramGreyOutline.svg" alt="">
                Телеграмм чат
            </div>
            <div class="course-card-social-link">
                <img src="/icons/XCircle.svg" alt="">
                Бетерү
            </div>
        </div>
        <div class="course-nav">
            <p 
                class="profile-courses-title" 
                class:active="{selectedPage === 'content'}"
                on:click={() => selectPage('content')} 
            >Курсның эчтәлеге</p>
            <p 
                class="profile-courses-title" 
                class:active="{selectedPage === 'description'}"
                on:click={() => selectPage('description')} 
            >Курсның тасвирламасы</p>
            <p
                class="profile-courses-title" 
                class:active="{selectedPage === 'teachers'}"
                on:click={() => selectPage('teachers')} 
            >Мөгаллимнәр</p>
        </div>
        <div class="course-sections">
            {#if selectedPage === 'content'}
            {:else if selectedPage === 'description'}
            <div class="course-description">
                <hr>
                <p class="description-title">Татар теле укытучыларына татар телен укытуда заманча, кызыклы һәм нәтиҗәле алымнар белән танышу курсы</p>
                <p>Әлеге курс татар теле укытучыларына татар телен укытуда заманча, кызыклы һәм нәтиҗәле алымнар белән танышу, укытучыларга яңа проектларны һәм юнәлешләрне өйрәнү, татар телен укыту процессын камилләштерү өчен оештырылды. Курс Казан мэриясе һәм Казан Башкарма комитетының мәгариф идарәсе Туган телләр һәм халыклар бердәмлеге елы уңаеннан үткәргән семинар очрашуларыннан тора. Укытучыларга 14 спикер чыгыш тәкъдим ителә. Курс җитәкчесе – “Сәлам” дәреслеге авторы, “Унбер” лицееның татар теле укытучысы Рашат Якупов.</p>
            </div>
            {:else if selectedPage === 'teachers'}
            {/if}
        </div>
    </div>
</div>


<style>
    .profile {
        display: flex;
        gap: 125px;
    }
    .profile-content {
        width: 70%;
    }
    .course-title {
        font-weight: 600;
        font-size: 40px;
        color: var(--primary-color);
    }
    .course-tags {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }
    .course-card-tag {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        font-size: 12px;
    }
    .course-card-social-link {
        display: flex;
        gap: 10px;
        font-size: 12px;
        color: #B4B4B4;
    }
    .course-card-progress-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        font-size: 12px;
        gap: 10px;
    }
    .course-card-progress-percent {
        font-weight: 600;
        font-size: 12px;
    }
    .course-card-progress-percent span {
        font-weight: 400;
    }
    .course-card-progress-back {
        height: 4px;
        background-color: #E7E7E7;
        border-radius: 10px;
        width: 290px;
    }
    .course-card-progress-front {
        height: 100%;
        background-color: var(--primary-color);
        border-radius: 10px;
    }
    .profile-courses-title {
        margin-bottom: 35px;
        font-size: 18px;
        color: #999999;
    }
    .profile-courses-title:hover {
        cursor: pointer;
        color: #1A233E;
    }
    .profile-courses-title.active {
        margin-bottom: 35px;
        font-size: 18px;
        color: #1A233E;
    }
    .course-nav {
        display: flex;
        gap: 27px;
        margin-top: 40px;
    }
    .course-description hr {
        margin-top: 10px;
        margin-bottom: 25px
    }
    .description-title {
        font-weight: 600;
        font-size: 20px;
    }
</style>
