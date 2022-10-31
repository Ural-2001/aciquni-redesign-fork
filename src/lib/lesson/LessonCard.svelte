<div class="lesson-cards">
    <div class="lesson-card-coursename">
        <a href="/profile" class="lesson-card-go-back">
            <img src="/icons/CaretLeftWhite.svg" alt="">
        </a>
        <h2>Татар телен укытуда заманча һәм нәтиҗәле ысуллар</h2>
    </div>
    <div class="lesson-card">
        <div class="course">
            <div class="lesson-card-top">
                <h6>Икенче модуль</h6>
                <p>44% уздым</p>
                <div class="progress-bar-back">
                    <div class="progress-bar-front" style="width: 44%;"></div>
                </div>
            </div>
            <div class="lessons">
                <a href="" class="lesson">
                    1. Инглиз телен укытуда балаларда телгә мәхәббәт уя...
                    <img class="lesson-finished-icon" src="/icons/CheckCircleWhite.svg" alt="">
                </a>
                <a href="" class="lesson active">
                    2. Инглиз телен укытуда балаларда телгә мәхәббәт уя...
                    <div class="lesson-active-icon">
                        Актив
                    </div>
                </a>
                <a href="" class="lesson">
                    3. Инглиз телен укытуда балаларда телгә мәхәббәт уя...
                    <div class="lesson-duration-icon">
                        15 мин
                    </div>
                </a>
                <a href="" class="lesson">
                    3. Инглиз телен укытуда балаларда телгә мәхәббәт уя...
                    <div class="lesson-duration-icon">
                        15 мин
                    </div>
                </a>
                <a href="" class="lesson">
                    3. Инглиз телен укытуда балаларда телгә мәхәббәт уя...
                    <div class="lesson-duration-icon">
                        15 мин
                    </div>
                </a>
                <a href="" class="lesson">
                    3. Инглиз телен укытуда балаларда телгә мәхәббәт уя...
                    <div class="lesson-duration-icon">
                        15 мин
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .lesson-cards {
        display: flex;
        flex-direction: column;
        gap: 23px;
        width: 24%;
    }
    .lesson-card-coursename {
        display: flex;
        align-items: center;
        gap: 16px;
        display: flex;
        align-items: center;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        padding: 20px;
    }
    .lesson-card-coursename h2 {
        font-size: 21px;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 0;
    }
    .lesson-card-go-back {
        background-color: var(--primary-color);
        border-radius: 50px;
        height: max-content;
        padding: 30px 8px;
    }
    .lesson-card {
        display: flex;
        flex-direction: column;
        gap: 65px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        padding: 17px 5px;
    }
    .lesson-card-top {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 30px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .lesson-card-top h6{
        font-size: 18px;
        font-weight: 400;   
        margin: 0;
    }
    .lesson-card-top p{
        font-size: 12px;
        font-weight: 400;   
        color: #B4B4B4;
        margin: 0;
    }
    .progress-bar-back {
        height: 2px;
        border-radius: 10px;
        background-color: #E7E7E7;
        margin-top: 5px;
    }
    .progress-bar-front {
        height: 2px;
        border-radius: 10px;
        background-color: var(--primary-color);
    }
    .lessons {
        display: flex;
        flex-direction: column;
    }
    .lesson {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 14px;
        font-weight: 600;
        padding: 15px;
    }
    .lesson.active {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 14px;
        font-weight: 600;
        padding-left: 0px;
        padding-right: 0px;
        background: #911FEB;
        border-radius: 15px;
        color: white;
        padding: 15px;
    }
    .lesson:hover {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 14px;
        font-weight: 600;
        padding-left: 15px;
        padding-right: 15px;
        background: var(--primary-color);
        border-radius: 15px;
        color: white;
        padding: 15px;
        text-decoration: none;
    }
    .lesson-finished-icon {
        background-color: #56B954;
        padding: 7px;
        border-radius: 20px;
    }
    .lesson-active-icon {
        background-color: white;
        padding: 7px 10px;
        border-radius: 20px;
        color: var(--primary-color);
        font-size: 12px;
        font-weight: 400;
    }
    .lesson-duration-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 52px;
        background-color: white;
        border: 1px solid #E7E7E7;
        padding: 5px;
        border-radius: 20px;
        color: #999999;
        font-size: 12px;
        font-weight: 400;
    }
</style>