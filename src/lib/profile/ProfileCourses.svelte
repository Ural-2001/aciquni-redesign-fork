<script>
	export let me;
</script>
<div class="profile-courses">
    <p class="profile-courses-title">Актив курслар ({me.activeCourses.length})</p>
    <div class="profile-active-courses">
        {#if me.activeCourses.length === 0}
            <p>Активных курсов нет(</p>
        {/if}
        {#each me.activeCourses as course}
            <div class="profile-active-course-card">
                <div class="course-card-img">
                    <img src="/img/courses/1.png" alt="">
                    <a href={`/profile/course/${course.id}`} class="course-card-link">
                        <img src="/icons/ArrowUpRight.svg" alt="">
                    </a>
                </div>
                <div class="profile-active-course-card-content">
                    <p class="course-card-title">{course.name}</p>
                    <div class="course-card-status">
                        <div class="course-card-tag">Укытучылык</div>
                        <div class="course-card-tag">{course.lessonsCount} дәрес </div>
                        <div class="course-card-progress-section">
                            <div class="course-card-progress-percent">{course.userProgress > 100 ? 100 : course.userProgress}% <span>уздым</span></div>
                            <div class="course-card-progress-back">
                                <div class="course-card-progress-front" style={`width: ${course.userProgress > 100 ? 100 : course.userProgress}%;`}></div>
                            </div>
                        </div>
                    </div>
                    <div class="course-card-content-links">
                        <a href={`lesson/${course.getUserLastLesson.id}`} class="course-card-resume-button">
                            Дәвам итәргә
                            <div class="course-card-resume-button-info">
                                {course.getUserLastLesson.module.queueNumber} модуль  ·  {course.getUserLastLesson.queueNumber} дәрес
                            </div>
                        </a>
                        <div class="course-card-social-link">
                            <img src="/icons/social/TelegramGreyOutline.svg" alt="">
                            Телеграмм чат
                        </div>
                        <div class="course-card-social-link">
                            <img src="/icons/XCircle.svg" alt="">
                            Бетерү
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
<div class="profile-courses">
    <p class="profile-courses-title">Узган курслар ({me.endedCourses.length})<p>
    <div class="profile-active-courses">
        {#if me.endedCourses.length === 0}
            <p>Вы еще не закончили ни один курс(</p>
        {/if}
        {#each me.endedCourses as course}
            <div class="profile-active-course-card">
                <div class="course-card-img">
                    <img src="/img/courses/1.png" alt="">
                    <a href="" class="course-card-link course-finished">
                        <img src="/icons/CheckCircleBlack.svg" alt="">
                    </a>
                </div>
                <div class="profile-active-course-card-content">
                    <p class="course-card-title">{course.name}</p>
                    <div class="course-card-status">
                        <div class="course-card-tag">Укытучылык</div>
                        <div class="course-card-tag">9 дәрес </div>
                        <div class="course-card-progress-section">
                            <div class="course-card-progress-percent">100% <span>уздым</span></div>
                            <div class="course-card-progress-back">
                                <div class="course-card-progress-front" style="width: 100%; background-color: #56B954;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="course-card-content-links done">
                        <a href="" class="course-card-review-button">
                            Фикер калдыру
                        </a>
                        <a href="" class="course-card-certificate-button">
                            Сертификат алу
                        </a>
                    </div>
                </div>
            </div>
        {/each}
        <!-- <div class="profile-active-course-card">
            <div class="course-card-img">
                <img src="/img/courses/1.png" alt="">
                <a href="" class="course-card-link course-finished">
                    <img src="/icons/CheckCircleBlack.svg" alt="">
                </a>
            </div>
            <div class="profile-active-course-card-content">
                <p class="course-card-title">Татар телен укытуда заманча һәм нәтиҗәле ысуллар</p>
                <div class="course-card-status">
                    <div class="course-card-tag">Укытучылык</div>
                    <div class="course-card-tag">9 дәрес </div>
                    <div class="course-card-progress-section">
                        <div class="course-card-progress-percent">100% <span>уздым</span></div>
                        <div class="course-card-progress-back">
                            <div class="course-card-progress-front" style="width: 100%; background-color: #56B954;"></div>
                        </div>
                    </div>
                </div>
                <div class="course-card-content-links done">
                    <a href="" class="course-card-review-button done">
                        Фикер кабул ителде
                        <img src="/icons/CheckCircleBlack.svg" alt="">
                    </a>
                    <a href="" class="course-card-certificate-button">
                        Сертификат алу
                    </a>
                </div>
            </div>
        </div> -->
    </div>
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
        justify-content: space-between;
        gap: 8px;
    }
    .course-card-tag {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 13px;
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
</style>
