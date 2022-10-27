<script>
    import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
</script>

<div class="container top-section">
    <div class="breadcrumbs">
        <a href="/">баш</a>
        <img src="/icons/CaretLeft.svg" alt="">
        <a href="">университет</a>
    </div> 
</div>
<div class="top">
    <div class="uni-img-section">
        <img src="/img/unitop.png" alt="">
        <div class="uni-title-section">
            <div style="display: flex; justify-content: center;">
                <h2>
                    ачык университет 
                    <br>
                    — <span>һөнәри һәм шәхси</span> үсеш өчен онлайн платформа
                </h2>
            </div>
            <div class="uni-top-courses-section">
                <div style="display: flex;">
                    <div class="circle"></div>
                    <div class="circle" style="border-color: var(--primary-color); margin-left: -30px"></div>
                </div>
                <div class="uni-top-courses-number">
                    <h3>425 <span>курслар</span></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="uni-top-teachers">
        <div class="uni-top-teachers-number">
            <h3>
                югары профильле <span>84 мөгалим</span>
            </h3>
        </div>
        <div class="long-circle"></div>
        <div class="small-circle"></div>
    </div>
</div>
<div class="history">
    <div class="history-text">
        <h2>безнең <span>тарих</span></h2>
        <p>
            Ачык Университет 2019 елның 9 февралендә барлыкка килде.
        </p>
        <p>
            Ул Бөтендөнья татар яшьләре форумының "Акыл фабрикасы" проекты кысаларыннан үсеп чыкты. 2019 елның февраль, март, апрель айларында тарих, заманча мәдәният темаларына offline курслар узды. Ачык Университетта 100дән артык кеше белем алды. Лекцияләрне Фаяз Хуҗин, Гамирҗан Дәүләтшин, Дамир Исхаков, Хатыйп Миңнеголов, Илнур Миргалиев һ.б. танылган галимнәр укыды.
        </p>
    </div>
    <div class="history-img">
        <img src="/img/uni/unihistory.png" alt="">
        <a href="#" class="play-overlay">
            <div class="play-circle">
                <img src="/icons/Play.svg" alt="">
            </div>
            <span class="play-overlay-text">
                проект турында <br> видео танышлык
            </span>
        </a>
    </div>
</div>
<div class="creative">
    <div class="creative-img">
        <img src="/img/uni/creative.png" alt="">
    </div>
    <div class="creative-text">
        <h2>креатив <span>шәхесләр</span></h2>
        <p>
            Бу эш иҗтимагый оешма тарафыннан башкарыла. Безнең такым яшь, белемле, креатив шәхесләрдән тора. Алар бүгенге көндә актуаль, күпләргә кызыклы булган темаларга лекцияләр яздыра, тирән белемле, заманча фикерләүче лекторларны эшкә җәлеп итә.
        </p>
        <p>
            Ачык Университет – озак көтелгән тулы татар телле университет булдыруга зур адым. Киләчәктә милли университет булдыруга рәсми мөмкинлекләр тудырылгач, Ачык Университет аның өчен нигез булачак. 
        </p>
    </div>
</div>
<div class="how-to-use">
    <div class="how-to-use-left">
        <h2>ничек <span>платформа</span> урнаштырылган</h2>
        <div class="how-to-use-left-card">
            <div class="content">
                <img src="/icons/Stack.svg" alt="">
                <h6>Курслар даими яңартыла</h6>
                <p>Хезмәт базары таләпләренә җавап <br> бирә торган белем алачаксыз</p>
            </div>
            <div class="number">02</div>
        </div>
        <div style="display: flex; justify-content: flex-end; margin-right: 45px;">
            <ButtonArrowLong text={'Яңа онлайн курслар'} />
        </div>
    </div>
    <div class="how-to-use-right">
        <div class="how-to-use-right-card card01">
            <div class="number">01</div>
            <div class="content">
                <img src="/icons/MonitorPlay.svg" alt="">
                <h6>Шәхси кабинетка тәүлек <br> буе керү мөмкинлеге</h6>
                <p>Дәресләрне онлайн уңайлы вакытта кара</p>
            </div>
        </div>
        <div class="how-to-use-right-card card03">
            <div class="number">03</div>
            <div class="content">
                <img src="/icons/Target.svg" alt="">
                <h6>Тикшерү тестлары <br> һәм практик биремнәр</h6>
                <p>Закрепляете теориясен һәм алачаксыз кире элемтә</p>
            </div>
        </div>
    </div>
</div>
<div class="reviews container">
    <div class="reviews-nav">
        <h3><span>студентлар</span>  фикерләре</h3>
        <div class="reviews-nav-buttons">
            <div class="reviews-nav-button-left">
                <img src="/icons/CaretLeft.svg" alt="">
            </div>
            <div class="reviews-nav-button-right">
                <img src="/icons/CaretRight.svg" alt="">
            </div>
        </div>
    </div>
    <div class="reels">
        <div class="reel">
            <img class="reel-img" src="/img/review-reels/1.png" alt=""> 
            <img class="gradient" src="/img/review-reels/gradient.png" alt="">
            <div class="reel-texts">
                <a href="" class="reel-play-button">
                    <img src="/icons/Play.svg" alt="">
                </a>
                <div class="reel-info">
                    <span class="desc">6 курс узды</span>
                    <span class="name">Талия, 17</span>
                </div>
            </div>
        </div>
        <div class="reel">
            <img class="reel-img" src="/img/review-reels/1.png" alt=""> 
            <img class="gradient" src="/img/review-reels/gradient.png" alt="">
            <div class="reel-texts">
                <a href="" class="reel-play-button">
                    <img src="/icons/Play.svg" alt="">
                </a>
                <div class="reel-info">
                    <span class="desc">6 курс узды</span>
                    <span class="name">Талия, 17</span>
                </div>
            </div>
        </div>
        <div class="reel">
            <img class="reel-img" src="/img/review-reels/1.png" alt=""> 
            <img class="gradient" src="/img/review-reels/gradient.png" alt="">
            <div class="reel-texts">
                <a href="" class="reel-play-button">
                    <img src="/icons/Play.svg" alt="">
                </a>
                <div class="reel-info">
                    <span class="desc">6 курс узды</span>
                    <span class="name">Талия, 17</span>
                </div>
            </div>
        </div>
         <div class="reel">
            <img class="reel-img" src="/img/review-reels/1.png" alt=""> 
            <img class="gradient" src="/img/review-reels/gradient.png" alt="">
            <div class="reel-texts">
                <a href="" class="reel-play-button">
                    <img src="/icons/Play.svg" alt="">
                </a>
                <div class="reel-info">
                    <span class="desc">6 курс узды</span>
                    <span class="name">Талия, 17</span>
                </div>
            </div>
        </div>
        <div class="reel">
            <img class="reel-img" src="/img/review-reels/1.png" alt=""> 
            <img class="gradient" src="/img/review-reels/gradient.png" alt="">
            <div class="reel-texts">
                <a href="" class="reel-play-button">
                    <img src="/icons/Play.svg" alt="">
                </a>
                <div class="reel-info">
                    <span class="desc">6 курс узды</span>
                    <span class="name">Талия, 17</span>
                </div>
            </div>
        </div>
        <div class="reel">
            <img class="reel-img" src="/img/review-reels/1.png" alt=""> 
            <img class="gradient" src="/img/review-reels/gradient.png" alt="">
            <div class="reel-texts">
                <a href="" class="reel-play-button">
                    <img src="/icons/Play.svg" alt="">
                </a>
                <div class="reel-info">
                    <span class="desc">6 курс узды</span>
                    <span class="name">Талия, 17</span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container teachers-section">
    <h2><span>оештыру</span> төркеме</h2>
    <div class="teachers">
        <a href="/teachers/1" class="teacher">
            <img src="/img/teachers/yoldiz.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </a>
        <div class="teacher">
            <img src="/img/teachers/halisa.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
        <div class="teacher">
            <img src="/img/teachers/fayaz.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
        <div class="teacher">
            <img src="/img/teachers/damir.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
    </div>
</div>
<div class="container teachers-section">
    <h2><span>нигез</span> салучылар</h2>
    <div class="teachers">
        <a href="/teachers/1" class="teacher">
            <img src="/img/teachers/yoldiz.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </a>
        <div class="teacher">
            <img src="/img/teachers/halisa.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
        <div class="teacher">
            <img src="/img/teachers/fayaz.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
    </div>
</div>
<div class="courses-foryou-section container">
    <div class="courses-foryou-nav">
        <h3>сезнең өчен курслар</h3>
        <div class="courses-nav-buttons">
            <div class="courses-nav-button-left">
                <img src="/icons/CaretLeft.svg" alt="">
            </div>
            <div class="courses-nav-button-right">
                <img src="/icons/CaretRight.svg" alt="">
            </div>
        </div>
    </div>
    <div class="courses-foryou">
        <div class="course-foryou-card">
            <div>
                <img src="/img/courses/course3.png" alt="">
                <a href="" class="course-foryou-card-button">
                    <img src="/icons/ArrowUpRight.svg" alt="">
                </a>
            </div>
            <div class="course-foryou-card-right">
                <p class="course-foryou-card-title">Татар әдәбияты тарихы: яңа заман әдәбияты</p>
                <div class="course-foryou-card-info">
                    <div>
                        <span>Әдәбият</span>
                    </div>
                    <div>
                        <span>12 дәрес</span>
                    </div>
                </div>
            </div>
		</div>
        <div class="course-foryou-card">
            <div>
                <img src="/img/courses/course1.png" alt="">
                <a href="" class="course-foryou-card-button">
                    <img src="/icons/ArrowUpRight.svg" alt="">
                </a>
            </div>
            <div class="course-foryou-card-right">
                <p class="course-foryou-card-title">Татар әдәбияты тарихы: яңа заман әдәбияты</p>
                <div class="course-foryou-card-info">
                    <div>
                        <span>Әдәбият</span>
                    </div>
                    <div>
                        <span>12 дәрес</span>
                    </div>
                </div>
            </div>
		</div>
        <div class="course-foryou-card">
            <div>
                <img src="/img/courses/course2.png" alt="">
                <a href="" class="course-foryou-card-button">
                    <img src="/icons/ArrowUpRight.svg" alt="">
                </a>
            </div>
            <div class="course-foryou-card-right">
                <p class="course-foryou-card-title">Татар әдәбияты тарихы: яңа заман әдәбияты</p>
                <div class="course-foryou-card-info">
                    <div>
                        <span>Әдәбият</span>
                    </div>
                    <div>
                        <span>12 дәрес</span>
                    </div>
                </div>
            </div>
		</div>
    </div>
</div>

<style>
    .top {
        margin-top: 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-right: 270px;
        margin-left: 155px;
    }
    .uni-img-section {
        display: flex;
    }
    .uni-title-section h2{
        font-size: 52px;
        line-height: 52px;
        width: 490px
    }
    .uni-title-section h2 span{
        color: var(--primary-color);
    }
    .uni-top-courses-section {
        margin-top: 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
    }
    .circle {
		width: 100px;
        height: 100px;
		/* height: 120px; */
		border: 1px solid var(--text-color);
		border-radius: 120px;
	}
    .uni-top-courses-number {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        border: 1px solid #1A233E;
        border-radius: 60px;
        width: 420px;
    }
    .uni-top-courses-number h3{
        font-size: 52px;
        font-weight: 500;
    }
    .uni-top-courses-number span{
        font-size: 52px;
        font-weight: 600;
        color: var(--primary-color);
    }
    .uni-top-teachers {
        display: flex;
        align-items: flex-end;
        gap: 15px;
    }
    .uni-top-teachers-number {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        border: 1px solid var(--primary-color);
        border-radius: 60px;
        padding: 0 50px;
    }
    .uni-top-teachers-number h3{
        font-size: 52px;
        font-weight: 500;
    }
    .uni-top-teachers-number span{
        font-size: 52px;
        font-weight: 700;
        color: var(--primary-color);
    }
    .long-circle {
        border: 1px solid #1A233E;
        border-radius: 60px;
        width: 85px;
        height: 34px;
        margin-left: 5px
    }
    .small-circle {
        border: 1px solid #1A233E;
        border-radius: 60px;
        width: 34px;
        height: 34px;
    }
    .history {
        margin-top: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 70px;
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-right: 220px;
        margin-left: 300px;
    }
    .history-text h2{
        font-weight: 500;
        font-size: 52px;
    }
    .history-text h2 span{
        color: var(--primary-color);
    }
    .history-text p{
        margin-top: 20px;
    }
    .history-img {
        /* display: flex;
        justify-content: center; */
    }
    .play-overlay {
        position: absolute;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap: 35px;
        background: #911FEB;
        opacity: 0.8;
        border-radius: 180px;
        color: white;
        padding: 40px;
        width: 590px;
        margin-top: -265px;
        margin-left: 75px;
    }
    .play-overlay:hover {
        text-decoration: none;
        color: white;
    }
    .play-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: 2px solid white;
        border-radius: 100px;
        width: 126px;
        height: 126px;
    }
    .play-circle img {
        margin-left: 5px;
        width: 45px;
        height: 45px;
    }
    .creative {
        margin-top: 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-right: 270px;
        margin-left: 155px;
        gap: 90px;
    }
    .creative-text h2{
        font-weight: 600;
        font-size: 52px;
    }
    .creative-text h2 span{
        color: var(--primary-color);
    }
    .creative-text p{
        margin-top: 20px;
    }
    .how-to-use {
        margin-top: 120px;
        display: flex;
        align-items: center;
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        /* padding-right: calc(var(--bs-gutter-x) * 0.5); */
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        /* margin-right: 220px; */
        margin-left: 300px;
    }
    .how-to-use .number {
        font-size: 22px;
        color: var(--primary-color);
    }
    .how-to-use-left {
        width: 40%;
    }
    .how-to-use-left h2{
        font-weight: 600;
        font-size: 52px;
        line-height: 52px;
    }
    .how-to-use-left h2 span{
        color: var(--primary-color);
    }
    .how-to-use-left-card {
        margin-top: 60px;
        margin-bottom: 60px;
        border: 1px solid #1A233E;
        border-radius: 150px;
        padding: 45px 64px 45px 64px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 45px;
    }
    .how-to-use-left-card .content{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 20px;
    }
    .how-to-use-left-card .content h6{
        font-weight: 600;
        font-size: 22px;
    }
    .how-to-use-left-card .content p {
        font-size: 16px;
        text-align: right;
        color: #A1A6B3;
    }

    .how-to-use-right {
        width: 60%;
    }
    .how-to-use-right h2{
        font-weight: 600;
        font-size: 52px;
        line-height: 52px;
    }
    .how-to-use-right h2 span{
        color: var(--primary-color);
    }
    .how-to-use-right-card {
        margin-top: 60px;
        border: 1px solid #1A233E;
        border-radius: 150px;
        padding: 45px 64px 45px 64px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 45px;
    }
    .card01 {
        border-color: var(--primary-color);
        border-radius: 150px 0 0 150px;
    }
    .card03 {
        border-color: #E7E7E7;
        max-width: 710px;
    }
    .how-to-use-right-card .content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
    }
    .how-to-use-right-card .content h6{
        font-weight: 600;
        font-size: 22px;
    }
    .how-to-use-right-card .content p {
        font-size: 16px;
        text-align: right;
        color: #A1A6B3;
    }
    .reviews,
    .teachers-section {
        margin-top: 120px;
    }
    .teachers-section h2{
        font-weight: 600;
        font-size: 52px;
        line-height: 52px;
    }
    .teachers-section h2 span{
        color: var(--primary-color);
    }
</style>