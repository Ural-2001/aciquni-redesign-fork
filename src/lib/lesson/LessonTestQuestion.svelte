<div class="test">
    <div class="test-top">
        <h1>Икенче модуль буенча тест</h1>
        <div class="close-test">
            <img src="/icons/XCircle.svg" alt="">
            Тестны башка вакытта үтәргә
        </div>
    </div>
    <div class="test-begin-card">
        <span>Бүлек буенча йомгаклау тестына сораулар</span>
        <div class="questions-nav">
            <div class="questions-nav-item passed">
                <p>1</p>
            </div>
            <div class="questions-nav-item passed">
                2
            </div>
            <div class="questions-nav-item passed">
                3
            </div>
            <div class="questions-nav-item passed">
                4
            </div>
            <div class="questions-nav-item passed">
                5
            </div>
            <div class="questions-nav-item active">
                6
            </div>
            <div class="questions-nav-item">
                7
            </div>
            <div class="questions-nav-item">
                8
            </div>
            <div class="questions-nav-item">
                9
            </div>
            <div class="questions-nav-item">
                10
            </div>
            <div class="questions-nav-item">
                11
            </div>
            <div class="questions-nav-item">
                Результат
            </div>
        </div>
        <h2>Что было написано над входом на кухню в доме Пифии — программы, которая помогала людям в борьбе с машинами?</h2>
        <hr>
        <div class="question">
            <span class="questions-title">Җавапның бер вариантын сайлагыз</span>
            <div class="question-answers">
                <label class="question-answers" for="answer1">
                    <input type="checkbox" id="answer1" name="answers">
                    <span class="checkmark"></span>
                    <span style="padding-left: 40px;">Memento mori — «Помни о смерти»</span>
                </label>
            </div>
            <div class="question-answers">
                <label class="question-answers" for="answer2">
                    <input type="checkbox" id="answer2" name="answers">
                    <span class="checkmark"></span>
                    <span style="padding-left: 40px;">Homo quisque fortūnae faber — «Каждый человек — творец своей судьбы»</span>
                </label>
            </div>
            <div class="question-answers">
                <label class="question-answers" for="answer3">
                    <input type="checkbox" id="answer3" name="answers">
                    <span class="checkmark"></span>
                    <span style="padding-left: 40px;">Temet nosce — «Познай себя»</span>
                </label>
            </div>
            <div class="question-answers">
                <label class="question-answers" for="answer4">
                    <input type="checkbox" id="answer4" name="answers">
                    <span class="checkmark"></span>
                    <span style="padding-left: 40px;">Җавапыгызны языгыз</span>
                </label>
            </div>
        </div>
        <div class="my-answer">
            <input type="text" placeholder="Минем вариант...">
        </div>
        <div class="test-bottom">
            <div class="test-begin-button">
                Киләсе сорау
                <img src="/icons/CaretRightWhite.svg" alt="">
            </div>
            <div class="test-progress">
                <div class="test-progress-top">
                    <div>
                        <p class="percent"><span>54%</span> сорауларга җавап бирдем</p>
                    </div> 
                    <div>
                        <p><span>6</span>/11</p>
                    </div>
                </div>
                <div class="progress-line-back">
                    <div class="progress-line-front" style="width: 53%;"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .test-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .test-top h1 {
        font-weight: 600;
        font-size: 30px;
        margin: 0;
    }
    .close-test {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: #B4B4B4;
    }
    .test-begin-card {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        padding: 27px 40px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .test-begin-card span {
        font-size: 16px;
    }
    .test-begin-card h2 {
        font-size: 25px;
        font-weight: 600;
        margin-top: 18px;
    }
    .questions-nav {
        display: flex;
        gap: 10px;
        font-size: 12px;
        margin-top: 10px;
    }
    .questions-nav-item {
        padding: 5px 15px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        line-height: 14px;
        cursor: pointer;
    }
    .questions-nav-item.passed {
        background-color: #F3F3F3;
        border-color: #F3F3F3;
    }
    .questions-nav-item.active {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
    }
    .questions-nav-item:hover {
        border-color: var(--primary-color);
    }
    .questions-nav-item p {
        margin: 0;
    }
    hr {
        margin-top: 12px;
        margin-bottom: 10px;
        color: #1A233E;
    }
    .questions-title {
        color: #B4B4B4;
        font-size: 12px;
    }

    .question-answers {
        display: block;
        position: relative;
        margin-bottom: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        color: #999999;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-top: 15px;
    }
    /* Hide the browser's default checkbox */
    .question-answers input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    /* Create a custom checkbox */
    .checkmark {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        /* top: 5px; */
        left: 0;
        height: 28px;
        width: 28px;
        border: 1px solid #E1E1E1;
        border-radius: 100px;
    }
    /* When the checkbox is checked, add a blue background */
    .question-answers input:checked ~ .checkmark {
        background-color: #1A233E;
        background-image: url(./check.svg) ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 18px;
    }
    .question-answers input:hover ~ span {
        color: #A38BA5 !important;
    }
    .question-answers input:checked ~ span {
        color: #1A233E !important;
    }
    .my-answer {
        padding: 7px 18px;
        border: 1px solid #E7E7E7;
        border-radius: 12px;
        font-size: 16px;
        margin-top: 10px;
        margin-left: 40px;
    }
    .my-answer input {
        border: none;
    }
    .my-answer input:focus {
        outline: none;
    }
    .test-bottom {
        display: flex;
        margin-top: 60px;
        justify-content: space-between;
    }
    .test-progress {
        width: 70%;
    }
    .test-begin-button {
        font-size: 14px;
        padding: 10px 30px;
    }
    .test-progress-top {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #B4B4B4;
    }
    .test-progress-top p{
        margin-bottom: 5px;
    }
    .test-progress-top p span{
        font-weight: 600;
    }
    .progress-line-back {
        background: #E7E7E7;
        border-radius: 2px;
        height: 4px;
    }
    .progress-line-front {
        background: var(--primary-color);
        border-radius: 2px;
        height: 4px;
    }
</style>