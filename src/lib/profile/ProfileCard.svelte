<div class="profile-cards">
    <div class="profile-card">
        <div class="profile-card-img-info">
            <img src="/img/people/1.png" alt="">
            <div class="profile-info">
                <span>Минем профиль</span>
                <h1>Айрат Камалиев</h1>
            </div>
        </div>
        <div class="settings">
            <img src="/icons/GearFix.svg" alt="">
        </div>
    </div>
    <div class="my-courses-card">
        <div class="my-courses">
            <div class="my-courses-card-top">
                <h6>Минем курслар</h6>
                <div class="show-all-button">
                    Барча
                </div>
            </div>
            <div class="courses">
                <div class="course">
                    <div class="course-content">
                        <img src="/img/courses/small1.png" alt="">
                        <div class="course-info">
                            <p class="course-percent">30% <span class="course-percent-text">уздым</span></p>
                            <div class="course-progress">
                                <div class="course-progress-back">
                                    <div class="course-progress-front" style="width: 30%;"></div>
                                </div>
                            </div>
                            <p class="course-title">
                                Татар телен укытуда заманча һәм нәтиҗәле ысуллар
                            </p>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="course">
                    <div class="course-content">
                        <img src="/img/courses/small1.png" alt="">
                        <div class="course-info">
                            <p class="course-percent">60% <span class="course-percent-text">уздым</span></p>
                            <div class="course-progress">
                                <div class="course-progress-back">
                                    <div class="course-progress-front" style="width: 60%;"></div>
                                </div>
                            </div>
                            <p class="course-title">
                                Татар телен укытуда заманча һәм нәтиҗәле ысуллар
                            </p>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        <div class="my-courses">
            <div class="my-courses-card-top">
                <h6>Сертификатлар</h6>
                <div class="show-all-button">
                    Барча
                </div>
            </div>
            <div class="courses">
                <div class="course">
                    <div class="course-content">
                        <div class="certificate-icon">
                            <img src="/icons/TrophyWhite.svg" alt="">
                        </div>
                        <div class="course-info">
                            <p class="course-percent"><span class="course-percent-text">Сертификат · 25 март 2022</span></p>
                            <p class="course-title">
                                Татар телен укытуда заманча һәм нәтиҗәле ысуллар
                            </p>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="course">
                    <div class="course-content">
                        <div class="certificate-icon">
                            <img src="/icons/ChatTeardropText.svg" alt="">
                        </div>
                        <div class="course-info">
                            <p class="course-percent"><span class="course-percent-text">Барлык сорауларга да җавап</span></p>
                            <p class="course-title">
                                Консультация алу
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .profile-cards {
        display: flex;
        flex-direction: column;
        gap: 23px;
        width: 25%;
    }
    .profile-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 65px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        padding: 6px 20px;
    }
    .profile-card-img-info {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .profile-card-img-info img {
        width: 36px;
        height: 36px;
    }
    .profile-info {
        width: max-content;
    }
    .profile-info span {
        font-size: 12px;
        color: #B4B4B4;
    }
    .profile-info h1 {
        font-size: 18px;
        font-weight: 400;
    }
    .my-courses-card {
        border: 1px solid var(--primary-color);
        border-radius: 24px;
        padding: 5px 20px 20px 20px;
    }
    .my-courses-card-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        margin-top: 25px;
    }
    .my-courses-card-top h6{
        font-size: 18px;
        font-weight: 400;   
    }
    .show-all-button {
        border: 1px solid #E6EDF2;
        border-radius: 34px;
        font-size: 12px;
        color: #999999;
        padding: 0px 20px;
    }
    .courses {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .course {
        display: flex;
        flex-direction: column;
    }
    .course-content {
        display: flex;
        gap: 15px;
    }
    .course img {
        width: 36px;
        height: 36px;
    }
    .course-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .course-percent {
        font-weight: 600;
        font-size: 12px;
        color: #B4B4B4;
        line-height: initial;
        margin-bottom: 0;
    }
    .course-percent-text {
        font-weight: 400;
    }
    .course-title {
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        margin-bottom: 0;
    }
    .certificate-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
        border-radius: 22px;
        height: 36px;
        width: 36px;
        padding: 6px;
    }
    .certificate-icon img {
        height: 24px;
        width: 24px;
    }
    .course hr {
        background: linear-gradient(90deg, rgba(231, 231, 231, 0) 0%, #777777 50.52%, rgba(255, 255, 255, 0) 100%, rgba(231, 231, 231, 0) 100%);
        /* background: red; */
        border: none;
        height: 1px;
    }
    .course-progress-back {
        height: 2px;
        background-color: #E7E7E7;
        border-radius: 10px;
    }
    .course-progress-front {
        height: 2px;
        background-color: var(--primary-color);
        border-radius: 10px;
    }
</style>