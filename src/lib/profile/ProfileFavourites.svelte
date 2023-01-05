<script>
    export let me;
    let selectedPage = 'courses';
    let selectPage = (page) => {
        selectedPage = page;
    };
    // onMount(() => {
	// });
    
</script>

<div class="profile-courses">
    <div style="display: flex; gap: 27px;">
        <p 
            class="profile-courses-title" 
            class:active="{selectedPage === 'courses'}"
            on:click={() => selectPage('courses')} 
        >Курслар ({me.savedCourses.length})</p>
        <p 
            class="profile-courses-title" 
            class:active="{selectedPage === 'articles'}"
            on:click={() => selectPage('articles')} 
        >Мәкаләләр ({me.savedArticlePosts.length})</p>
        <p
            class="profile-courses-title" 
            class:active="{selectedPage === 'videos'}"
            on:click={() => selectPage('videos')} 
        >Видео ({me.savedVideoPosts.length})</p>
    </div>
    {#if selectedPage === 'courses'}
        <div class="profile-active-courses">
            {#if me.savedCourses.length === 0}
                <h6>Сохраненных курсов нет</h6>
            {/if}
            {#each me.savedCourses as course}
                <div class="profile-active-course-card">
                    <div class="course-card-img">
                        <img src="/img/courses/1.png" alt="">
                        <a href="" class="course-card-link">
                            <img src="/icons/ArrowUpRight.svg" alt="">
                        </a>
                    </div>
                    <div class="profile-active-course-card-content">
                        <p class="course-card-title">{course.name}</p>
                        <div class="course-card-status">
                            {course.tags}
                            <div class="course-card-tag">Укытучылык</div>
                            <div class="course-card-tag">{course.lessonsCount} дәрес </div>
                            <div class="course-card-tag">{course.lessonsCount} дәрес · {course.time} </div>
                        </div>
                        <div class="course-card-content-links">
                            <a href="" class="course-card-review-button">
                                Курсны башларга
                                <img src="/icons/ArrowUpRightWhite.svg" alt="">
                            </a>
                            <div class="course-card-social-link">
                                <img src="/icons/HeartFilledGrey.svg" alt="">
                                Телеграмм чат
                            </div>
                            <div class="course-card-social-link">
                                <img src="/icons/social/TelegramGreyOutline.svg" alt="">
                                Бетерү
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else if selectedPage === 'articles'}
        <div class="profile-active-articles">
            {#if me.savedArticlePosts.length === 0}
                <h6>Сохраненных статей нет</h6>
            {/if}
            {#each me.savedArticlePosts as article}
                <div class="profile-active-article-card">
                    <img class="profile-active-article-card-img" src="/img/blog/articles/1.png" alt="">
                    <div class="profile-active-article-card-content">
                        <p class="article-card-title">{article.title}</p>
                        <p class="article-card-description">{`${article.body.substr(0, 100)}${article.body.length > 100 ? '...' : ''}`}</p>
                        <div class="article-card-status">
                            <div class="article-card-tag">Тәрбия</div>
                            <div class="article-card-tag">Тәрбия </div>
                            <div class="article-card-social-link">
                                <img src="/icons/HeartFilledGrey.svg" alt="">
                                Сайланма әсәрләрдә
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else if selectedPage === 'videos'}
        <div class="profile-active-articles">
            {#if me.savedVideoPosts.length === 0}
                <h6>Сохраненных видео статей нет</h6>
            {/if}
            {#each me.savedVideoPosts as video}
                <div class="profile-active-article-card">
                    <img class="profile-active-article-card-img" src="/img/blog/articles/1.png" alt="">
                    <div class="profile-active-article-card-content">
                        <p class="article-card-title">{video.title}</p>
                        <p class="article-card-description">{`${video.body.substr(0, 100)}${video.body.length > 100 ? '...' : ''}`}</p>
                        <div class="article-card-status">
                            <div class="article-card-tag">Тәрбия</div>
                            <div class="article-card-tag">Тәрбия </div>
                            <div class="article-card-social-link">
                                <img src="/icons/HeartFilledGrey.svg" alt="">
                                Сайланма әсәрләрдә
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .profile-courses {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
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
    .profile-active-courses {
        display: flex;
        flex-direction: column;
        gap: 45px;
    }
    .profile-active-course-card {
        display: flex;
        gap: 20px;
    }
    .course-card-img {
        display: flex;
    }
    .course-card-img img {
        width: 218px;
        height: 130px;
        border-radius: 65px;
    }
    .course-card-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        border: 1px solid var(--primary-color);
        border-radius: 50px;
        margin-left: -20px;
    }
    .course-card-link img {
        width: 24px;
    }
    .profile-active-course-card-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .course-card-title {
        margin: 0;
    }
    .course-card-status {
        display: flex;
        align-items: center;
        gap: 8px;
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
    .course-card-content-links {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .course-card-content-links.done {
        gap: 10px;
    }
    .course-card-resume-button {
        font-size: 14px;
        background-color: var(--primary-color);
        border-radius: 24px;
        padding: 10px 15px 10px 25px;
        display: flex;
        color: white;
        gap: 25px;
    }
    .course-card-resume-button-info {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        background-color: white;
        border-radius: 24px;
        color: var(--primary-color);
    }
    .course-card-resume-button:hover {
        text-decoration: none;
    }
    .course-card-social-link {
        display: flex;
        gap: 10px;
        font-size: 12px;
        color: #B4B4B4;
    }
    .course-finished {
        border-color: #56B954;
    }
    .course-card-review-button {
        font-size: 14px;
        background-color: var(--primary-color);
        border-radius: 24px;
        padding: 10px 25px 10px 25px;
        display: flex;
        color: white;
        gap: 25px; 
    }
    .course-card-review-button img{
        width: 18px;
    }
    .course-card-certificate-button {
        font-size: 14px;
        background-color: transparent;
        border: 1px solid var(--primary-color);
        border-radius: 24px;
        padding: 10px 25px 10px 25px;
        display: flex;
        gap: 25px; 
        color: #1A233E;
    }
    .course-card-review-button.done {
        font-size: 14px;
        background-color: transparent;
        border: 1px solid var(--primary-color);
        border-radius: 24px;
        padding: 10px 25px 10px 25px;
        display: flex;
        color: #1A233E;
    }
    .course-card-review-button:hover {
        text-decoration: none;
    }

    .profile-active-article-card {
        display: flex;
        gap: 30px
    }
    .profile-active-article-card-img{
        width: 420px;
        height: 160px;
    }
    .article-card-title {
        font-weight: 600;
        font-size: 24px;
    }
    .article-card-description {
        font-size: 14px;
        line-height: 140%;
        color: #999999;
    }
    .article-card-status {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .article-card-tag {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        font-size: 12px;
        color: var(--primary-color);
    }
    .article-card-social-link {
        display: flex;
        gap: 10px;
        font-size: 12px;
        color: #B4B4B4;
    }
    .profile-active-articles {
        display: flex;
        flex-direction: column;
        gap: 45px;
    }
</style>
