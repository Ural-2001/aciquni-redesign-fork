<div class="test">
    <div class="test-top">
        <h1>Икенче модуль буенча тест</h1>
        <div class="close-test">
            <img src="/icons/XCircle.svg" alt="">
            Тестны башка вакытта үтәргә
        </div>
    </div>
    <div class="test-begin-card">
        <span>Заманча татар шигърияте</span>
        <h2>Бу "Заманча татар шигърияте, прозасы" модуле буенча тест. Әгәр дә сез 60% сорауга дөрес җавап бирсәгез, сезгә киләсе модуль ачылачак!</h2>
        <div class="test-begin-button-section">
            <div class="test-begin-button">
                Тестны башларга
                <img src="/icons/CaretRightWhite.svg" alt="">
            </div>
            <div class="test-questions-count">
                Бу тест 7 сораудан тора
                <img src="/icons/ChatTeardropTextPurple.svg" alt="">
            </div>
        </div>
        <hr>
        <div class="previous-attempts">
            <h6>Элекеге тест нәтиҗәләре</h6>
            <div class="previous-attempts-table">
                <div class="previous-attempts-dates">
                    <div class="previous-attempts-date" style="background:#F7F7F5;">
                        28 июль 2022 - 15:34
                    </div>
                    <div class="previous-attempts-date">
                        28 июль 2022 - 15:34
                    </div>
                    <div class="previous-attempts-date" style="background:#F7F7F5;">
                        28 июль 2022 - 15:34
                    </div>
                </div>
                <div class="previous-attempts-falses">
                    <div class="previous-attempts-false" style="background:#F7F7F5;">
                        <span>4</span> · Дөрестүгел җаваплар
                    </div>
                    <div class="previous-attempts-false">
                        <span>4</span> · Дөрестүгел җаваплар
                    </div>
                    <div class="previous-attempts-false" style="background:#F7F7F5;">
                        <span>4</span> · Дөрестүгел җаваплар
                    </div>
                </div>
                <div class="previous-attempts-trues">
                    <div class="previous-attempts-true" style="background:#F7F7F5;">
                        <span>7</span> · Дөрес җаваплар
                    </div>
                    <div class="previous-attempts-true">
                        <span>7</span> · Дөрес җаваплар
                    </div>
                    <div class="previous-attempts-true" style="background:#F7F7F5;">
                        <span>7</span> · Дөрес җаваплар
                    </div>
                </div>
                <div class="previous-attempts-results">
                    <div class="previous-attempts-result" style="background:#F7F7F5;">
                        <p><span>54</span> · Сез баллар җыйдыгыз</p>
                        <img src="/icons/ThumbsUpPurple.svg" alt="">
                    </div>
                    <div class="previous-attempts-result">
                        <p><span style="color: #D83A3A;">54</span> · Сез баллар җыйдыгыз</p>
                        <img src="/icons/Prohibit.svg" alt="">
                    </div>
                    <div class="previous-attempts-result" style="background:#F7F7F5;">
                        <p><span>54</span> · Сез баллар җыйдыгыз</p>
                        <img src="/icons/ThumbsUpPurple.svg" alt="">
                    </div>
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
    .test-begin-button-section {
        margin-top: 30px;
        display: flex;
        align-items: center;
        gap: 23px;
    }
    .test-begin-button {
        display: flex;
        align-items: center;
        gap: 20px;
        background-color: var(--primary-color);
        border-radius: 50px;
        padding: 15px 30px;
        color: white;
        cursor: pointer;
    }
    .test-questions-count {
        color: var(--primary-color);
    }
    .test-questions-count img {
        position: absolute;
        margin-top: -10px;
    }
    hr {
        margin-top: 40px;
        margin-bottom: 30px;
    }
    .previous-attempts h6 {
        font-weight: 600;
        font-size: 18px;
    }
    .previous-attempts-table {
        display: flex;
        gap: 5px;
        margin-top: 10px;
    }
    .previous-attempts-date {
        font-size: 12px;
        font-weight: 500;
    }
    .previous-attempts-false,
    .previous-attempts-true,
    .previous-attempts-result,
    .previous-attempts-date {
        padding: 4px 44px 4px 15px;
        border-radius: 12px;
        display: flex;
        gap: 4px;
    }
    .previous-attempts-false,
    .previous-attempts-true,
    .previous-attempts-result {
        font-size: 12px;
        color: #9096A9;
    }
    .previous-attempts-false span,
    .previous-attempts-true span,
    .previous-attempts-result span {
        font-size: 12px;
        font-weight: 600;
        color: #1A233E;
    }
    .previous-attempts-result {
        gap: 28px;
        padding: 4px 10px 4px 15px;
    }
    .previous-attempts-result p {
        margin: 0;
        gap: 28px;
    }
</style>