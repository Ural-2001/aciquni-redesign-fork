<script>
    import CircleProgressBar from '$lib/components/CircleProgressBar/CircleProgressBar.svelte'
	import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';

	const progress = 0.57;

    export let quizSitting;

    let mcAnswer;
    let quizId;
    let answerQuestionResult;
    let client = getContextClient();
    const answerQuestion = async (answers, quizId) => {
        answerQuestionResult = await mutationStore({
            client,
            query: gql`
            mutation ($answers: [String], $quizId: ID) {
                answerQuestion(answers: $answers, quizId: $quizId) {
                    ok
                    sitting {
                        id
                        quiz {
                            id
                        }
                        questionOrder
                        questionList
                        complete
                        end
                        totalQuestionsCount
                        wrongAnswersCount
                        rightAnswersCount
                        userScore
                        passingScore
                        isUserPassed
                        text
                        currentQuestionNumber
                        userProgressInQuiz
                        currentQuestionType
                        multiSelectQuestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            answerOrder
                            correctAnswer
                            answersList (quizId: $quizId) {
                                id
                                content
                            }
                        } 
                        sqQuestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            userAnswer
                            answermcSet {
                                id
                                question {
                                    id
                                    figure
                                    imageCropped
                                    content
                                    explanation
                                    hidden
                                    userAnswer
                                }
                                content
                                serialNumber
                            }
                            answersList(quizId: $quizId) {
                                id
                                content
                            }
                        } 
                        rationQuestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            userAnswer
                            answerrationSet {
                            ration
                            }
                            rationList {
                            ration
                            }
                            answersList (quizId: $quizId) {
                                id
                                content
                            }
                        } 
                        mCQuestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            answerOrder
                            answermcsingleSet {
                            id
                            question {
                                id
                                figure
                                imageCropped
                                content
                                explanation
                                hidden
                                answerOrder
                            }
                            content
                            correct
                            }
                            answersList(quizId: $quizId) {
                                id
                                content
                            }
                        }  
                    }
                    errors
                }
            }`,
            variables: { answers, quizId }
        });        
    };
</script>

<div class="test">
    <div class="test-top">
        <h1>{quizSitting.quiz.title}</h1>
        <div class="close-test">
            <img src="/icons/XCircle.svg" alt="">
            Тестны башка вакытта үтәргә
        </div>
    </div>
    {#if quizSitting.complete}
        <div class="test-begin-card finished">
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
            <h2>Яхшы! Сез барлык сорауларга да җавап бирдегез 🔥</h2>
            <div class="result-info">
                <div class="points">
                    <div class="points-number">
                        <span class="number">54</span>
                        <span class="text">Вы набрали баллов</span>
                    </div>
                    <div class="points-number">
                        <span class="number">90</span>
                        <span class="text">Проходной балл</span>
                    </div>
                </div>
                <div class="grapgh">
                    <CircleProgressBar progress={progress} />
                    <img src="/icons/CheckCircleBlack.svg" alt="">
                    <span class="true-number">7</span>
                    <span class="false-number">4</span>
                </div>
                <div class="question-amounts">
                    <div class="question-amount">
                        <div class="number">11</div>
                        <span class="text">Барлык сораулар</span>
                    </div>
                    <div class="question-amount">
                        <div class="number">4</div>
                        <span class="text">Дөрестүгел җаваплар</span>
                    </div>
                    <div class="question-amount">
                        <div class="number">7</div>
                        <span class="text">Дөрес җаваплар</span>
                    </div>
                </div>
            </div>
            <div class="test-bottom finished">
                <div class="test-begin-button">
                    Киләсе бүлек
                </div>
                <div class="test-begin-button again">
                    Тестны кабат узарга
                </div>
            </div>
        </div>
    {:else}
        <div class="test-begin-card">
            {#if quizSitting.currentQuestionType === 'MCQuestion'}
                <h2>{quizSitting.mCQuestion.content}</h2>
                <hr>
                <div class="question">
                    <span class="questions-title">Җавапның бер вариантын сайлагыз</span>
                    {#each quizSitting.mCQuestion.answermcsingleSet as questionAnswer, i}
                        <div class="question-answers">
                            <label class="question-answers" for={`answer${questionAnswer.id}`}>
                                <input type="radio" id={`answer${questionAnswer.id}`} name="answers" bind:group={mcAnswer} value={i+1}>
                                <span class="checkmark"></span>
                                <span style="padding-left: 40px;">{questionAnswer.content}</span>
                            </label>
                        </div>
                    {/each}
                </div>
                <div class="my-answer">
                    <input type="text" placeholder="Минем вариант...">
                </div>
                <div class="test-bottom">
                    <div class="test-begin-button" on:click={answerQuestion([mcAnswer.toString()], parseInt(quizSitting.quiz.id))}>
                        Киләсе сорау
                        <img src="/icons/CaretRightWhite.svg" alt="">
                    </div>
                    <div class="test-progress">
                        <div class="test-progress-top">
                            <div>
                                <p class="percent"><span>{quizSitting.userProgressInQuiz}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${quizSitting.userProgressInQuiz}%;`}></div>
                        </div>
                    </div>
                </div>
            {:else if quizSitting.currentQuestionType === 'MultiSelectQuestion'}
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
                    <div class="test-begin-button" on:click={() => {console.log(mcAnswer)}}>
                        Киләсе сорау
                        <img src="/icons/CaretRightWhite.svg" alt="">
                    </div>
                    <div class="test-progress">
                        <div class="test-progress-top">
                            <div>
                                <p class="percent"><span>{quizSitting.userProgressInQuiz}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${quizSitting.userProgressInQuiz}%;`}></div>
                        </div>
                    </div>
                </div>
            {:else if quizSitting.currentQuestionType === 'RationQuestion'}
                <h2>Выбор последовательности</h2>
                <hr>
                <div class="question">
                    <span class="questions-title">Җавапның бер вариантын сайлагыз</span>
                    <div class="question-answers-select">
                        {#each quizSitting.rationQuestion.answerrationSet as questionAnswer, i}
                            <div class="question-select">
                                <select name="select" id={`rationQuestion${i}`}>
                                    {#each quizSitting.rationQuestion.answerrationSet as questionAnswer, i}
                                        <option value={`${i+1}`}>{i+1}</option>
                                    {/each}
                                </select>
                                <label class="select-label" for={i}>
                                    <span style="padding-left: 10px;">{questionAnswer.ration}</span>
                                </label>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="test-bottom">
                    <div class="test-begin-button" on:click={() => {
                        let answerList = [];
                        quizSitting.rationQuestion.answerrationSet.forEach((questionAnswer, i) => {
                            let rationQuestionOption = document.getElementById(`rationQuestion${i}`)
                            answerList.push(rationQuestionOption.value);
                        });
                        console.log(answerList)

                        let allUnique = () => answerList.length === new Set(answerList).size;
                        if (allUnique()) {
                            console.log(answerList)
                            console.log(parseInt(quizSitting.quiz.id))
                            answerQuestion(answerList, parseInt(quizSitting.quiz.id))
                        }
                        else {
                            alert('цифры не должны повторяться')
                            return;
                        }
                    }}>
                        Киләсе сорау
                        <img src="/icons/CaretRightWhite.svg" alt="">
                    </div>
                    <div class="test-progress">
                        <div class="test-progress-top">
                            <div>
                                <p class="percent"><span>{quizSitting.userProgressInQuiz}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${quizSitting.userProgressInQuiz}%;`}></div>
                        </div>
                    </div>
                </div>
            {:else if quizSitting.currentQuestionType === 'SqQuestion'}
                <h2>{quizSitting.sqQuestion.content}</h2>
                <hr>
                <div class="question">
                    <span class="questions-title">Дөрес пунктларны берләштер</span>
                    <div class="question-answers-select">
                        {#each quizSitting.sqQuestion.answersList as questionAnswer, i}
                            <div class="question-select">
                                <select name="select" id={`rationQuestion${i}`}>
                                    {#each quizSitting.sqQuestion.answersList as questionAnswer, i}
                                        <option value={`${i+1}`}>{i+1}</option>
                                    {/each}
                                </select>
                                <label class="select-label" for={i}>
                                    <span style="padding-left: 10px;">{questionAnswer.content}</span>
                                </label>
                            </div>
                        {/each}
                    </div>
                    <hr>
                    <div class="question-select-variants">
                        {#each quizSitting.sqQuestion.answermcSet.sort((a, b) => (a.serialNumber > b.serialNumber) ? 1 : -1) as questionAnswer, i}
                            <div class="question-select-variant">
                                <div class="question-select-variant-number">{questionAnswer.serialNumber}</div>
                                <span>{questionAnswer.content}</span>
                            </div>
                        {/each}
                        
                    </div>
                </div>
                <div class="test-bottom">
                    <div class="test-begin-button" on:click={() => {
                        let answerList = [];
                        quizSitting.sqQuestion.answersList.forEach((questionAnswer, i) => {
                            let rationQuestionOption = document.getElementById(`rationQuestion${i}`)
                            answerList.push(rationQuestionOption.value);
                        });
                        console.log(answerList)

                        let allUnique = () => answerList.length === new Set(answerList).size;
                        if (allUnique()) {
                            console.log(answerList)
                            console.log(parseInt(quizSitting.quiz.id))
                            answerQuestion(answerList, parseInt(quizSitting.quiz.id))
                        }
                        else {
                            alert('цифры не должны повторяться')
                            return;
                        }
                    }}>
                        Киләсе сорау
                        <img src="/icons/CaretRightWhite.svg" alt="">
                    </div>
                    <div class="test-progress">
                        <div class="test-progress-top">
                            <div>
                                <p class="percent"><span>{quizSitting.userProgressInQuiz}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${quizSitting.userProgressInQuiz}%;`}></div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    {/if}
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
        background-image: url(./DotWhite.svg) ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 8px;
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
        border-radius: 50px;
        background-color: var(--primary-color);
        color: white;
        font-size: 14px;
        padding: 10px 30px;
        cursor: pointer;
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
    .question-answers-select {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        gap: 10px;
    }
    .question-select label {
        font-size: 16px;
        font-weight: 600;
    }
    .question-answers-select select {
        font-size: 12px;
        font-weight: 600;
        padding: 5px 7px;
        border: 1px solid #E7E7E7;
        border-radius: 8px; 
    }
    .question-select-variants {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .question-select-variant {
        display: flex;
        gap: 14px;
        font-size: 16px;
    }
    .question-select-variant-number {
        font-size: 12px;
        font-weight: 600;
        background: #F3F3F3;
        border-radius: 8px;
        padding: 0px 20px;
    }
    .finished h2 {
        margin-top: 40px;
    }
    .result-info {
        display: flex;
        gap: 35px;
        margin-top: 50px;
    }
    .points {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .points-number {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .points-number .number{
        font-weight: 600;
        font-size: 48px;
    }
    .points-number .text{
        font-weight: 400;
        font-size: 14px;
    }


    .question-amounts {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .question-amount {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .question-amount .number{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 22px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        padding: 4px 18px;
        width: 67px;
    }
    .question-amount .text{
        font-weight: 400;
        font-size: 16px;
    }
    .test-bottom.finished {
        justify-content: flex-start;
        gap: 10px;
        margin-top: 50px;
    }
    .test-begin-button.again {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: #1A233E;
    }
    .grapgh img {
        position: absolute;
        margin-top: -102px;
        margin-left: 56px;
        width: 45px;
    }
    .grapgh .true-number {
        position: absolute;
        margin-top: -95px;
        margin-left: 20px;
        width: 45px;
        font-size: 18px;
        color: white;
    }
    .grapgh .false-number {
        position: absolute;
        margin-top: -95px;
        margin-left: 130px;
        width: 45px;
        font-size: 18px;
    }
</style>