<script>
    import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
</script>

<div class="container">
    <div class="course-info">
        <div class="breadcrumbs">
            <a href="/">баш</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="/courses">курслар</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="">мәдәният</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="">татар телен укытуда заманча һәм нәтиҗәле ысуллар</a>
        </div>
        <h2 class="page-title">татар телен укытуда заманча һәм нәтиҗәле ысуллар</h2>  
        <div class="actions">
            <div class="course-tag">
                <span>Укытучылык</span>
            </div>
            <div class="course-tag">
                <span>9 дәрес</span>
            </div>
            <div class="like">
                <img src="/icons/HeartStraightGrey.svg" alt="">
                <span>Сайланма әсәрләр</span>
            </div>
            <div class="share">
                <img src="/icons/PaperPlaneTilt.svg" alt="">
                <span>Уртаклашу</span>
            </div>
        </div>
        <p>
            Татар теле укытучыларына татар телен укытуда заманча, кызыклы һәм нәтиҗәле алымнар белән танышу курсы
        </p>
        <div class="start-course">
            <ButtonArrowLong text={'Курсны башларга'}/>
            <div class="total-students">
                <span class="total-students-number">104</span>
                <span class="total-students-text">студентлар саны</span>
            </div>
        </div>
        <p class="course-description-title">курсның тасвирламасы</p>
        <p class="course-description">
            Әлеге курс татар теле укытучыларына татар телен укытуда заманча, кызыклы һәм нәтиҗәле алымнар белән танышу, укытучыларга яңа проектларны һәм юнәлешләрне өйрәнү, татар телен укыту процессын камилләштерү өчен оештырылды. Курс Казан мэриясе һәм Казан Башкарма комитетының мәгариф идарәсе Туган телләр һәм халыклар бердәмлеге елы уңаеннан үткәргән семинар очрашуларыннан тора. Укытучыларга 14 спикер чыгыш тәкъдим ителә.
            <br>
            Курс җитәкчесе – “Сәлам” дәреслеге авторы, “Унбер” лицееның татар теле укытучысы Рашат Якупов.
        </p>
        <div class="teachers">
            <p>мөгаллимнәр</p>
            <div class="teachers-block">
                <div class="teacher">
                    <img src="/img/teachers/ayrat.png" alt="">
                    <div class="teacher-info">
                        <span class="teacher-name">Айрат Хәбибуллин</span>
                        <span class="teacher-occupation">“Унбер” лицееның инглиз теле укытучысы</span>
                    </div>
                </div>
                <div class="teacher">
                    <img src="/img/teachers/yuto.png" alt="">
                    <div class="teacher-info">
                        <span class="teacher-name">Юто Һишияма</span>
                        <span class="teacher-occupation">Токио чит телләр университеты аспиранты</span>
                    </div>
                </div>
                <div class="teacher">
                    <img src="/img/teachers/almaz.png" alt="">
                    <div class="teacher-info">
                        <span class="teacher-name">Алмаз Хәмидуллин</span>
                        <span class="teacher-occupation">“Унбер” лицее диркторы, Global Teacher Prize 2021 халы...</span>
                    </div>
                </div>
            </div>
            <div class="show-all-teachers">
                <a href="">
                    <img src="/icons/ArrowsClockwisePurple.svg" alt="">
                    Барысын да күрсәтү
                </a>
            </div>
        </div>
    </div>
    <div class="course-content">
    </div>
</div>

<style>
    .page-title{
		font-size: 52px;
        max-width: 540px;
        margin-bottom: 35px;
	}
    .course-info {
        width: 41%;
    }
    .actions {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
    }
    .actions .course-tag {
        background-color: #1A233E;
        color: white;
        padding: 3px 20px;
        border-radius: 50px;
    }
    .like,
    .share {
        color: #999999;
        margin-left: 13px;
    }
    .course-info p {
        margin-top: 35px;
    }
    .start-course {
        display: flex;
        align-items: center;
        margin-top: 60px;
        gap: 40px;
    }
    .total-students {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .total-students-number {
        font-size: 46px;
    }
    .total-students-text {
        font-size: 16px;
        color: var(--primary-color);
    }
    .course-description-title {
        font-size: 32px;
        font-weight: 600;
        margin-top: 100px !important;
        margin-bottom: 15px;
    }
    .teachers {
        margin-top: 70px;
    }
    .teachers-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .teachers p {
        font-size: 32px;
        font-weight: 600;
    }
    .teacher {
        display: flex;
    }
    .teacher img {
        width: 86px;
        height: 86px;
    }
    .show-all-teachers {
        margin-top: 30px;
        margin-left: 66px;
    }
    .show-all-teachers a{
        display: flex;
        align-items: center;
        color: var(--primary-color);
        font-size: 13px;
    }
    .show-all-teachers a:hover{
        color: var(--primary-color);
    }
    .show-all-teachers a img{
        margin-right: 5px;
    }
    .teacher-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid var(--primary-color);
        border-radius: 100px;
        padding: 15px 40px;
        margin-left: -20px;
        width: 100%;
    }
    .teacher-occupation {
        font-size: 14px;
        color: var(--primary-color);
    }
</style>