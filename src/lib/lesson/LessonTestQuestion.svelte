<script>
    import CircleProgressBar from '$lib/components/CircleProgressBar/CircleProgressBar.svelte'
	import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';

	const progress = 0.57;

    export let quizSitting;

    let mcAnswer;
    let multipleAnswers = [];
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
                            title
                            isLastCourseModuleAndNoModuleAfter 
                            course {
                                id
                            }
                        }
                        nextLessonId
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

    let endCourseResult;
    const endCourse = async (courseId) => {
        endCourseResult = await mutationStore({
            client,
            query: gql`
            mutation ($courseId: ID!) {
                endCourse(courseId: $courseId) {
                    ok
                    errors
                }
            }`,
            variables: { courseId: parseInt(courseId) }
        });        
    };
</script>

<div class="test">
    <div class="test-top">
        {#if quizSitting?.quiz?.title}    
            <h1>{quizSitting?.quiz?.title}</h1>
        {:else if $answerQuestionResult?.data?.answerQuestion?.sitting?.quiz?.title}
            <h1>{$answerQuestionResult?.data?.answerQuestion?.sitting?.quiz?.title}</h1>
        {/if}
        <div class="close-test">
            <img src="/icons/XCircle.svg" alt="">
            Тестны башка вакытта үтәргә
        </div>
    </div>
    {#if $answerQuestionResult?.data?.answerQuestion?.sitting?.complete}
        <div class="test-begin-card finished">
            <div class="questions-nav">
                {#each Array($answerQuestionResult?.data?.answerQuestion?.sitting.totalQuestionsCount) as _, i}
                    <div class="questions-nav-item passed">
                        {i+1}
                    </div>
                {/each}    
                <div class="questions-nav-item active">
                    Результат
                </div>
            </div>
            <h2>Яхшы! Сез барлык сорауларга да җавап бирдегез 🔥</h2>
            <div class="result-info">
                <div class="points">
                    <div class="points-number">
                        <span class="number">{$answerQuestionResult?.data?.answerQuestion?.sitting.rightAnswersCount}</span>
                        <span class="text">Вы набрали баллов</span>
                    </div>
                    <div class="points-number">
                        <span class="number">{$answerQuestionResult?.data?.answerQuestion?.sitting.totalQuestionsCount}</span>
                        <span class="text">Проходной балл</span>
                    </div>
                </div>
                <div class="grapgh">
                    <CircleProgressBar progress={$answerQuestionResult?.data?.answerQuestion?.sitting.rightAnswersCount/$answerQuestionResult?.data?.answerQuestion?.sitting.totalQuestionsCount} />
                    <img src="/icons/CheckCircleBlack.svg" alt="">
                    <span class="true-number">{$answerQuestionResult?.data?.answerQuestion?.sitting.rightAnswersCount}</span>
                    <span class="false-number">{$answerQuestionResult?.data?.answerQuestion?.sitting.passingScore}</span>
                </div>
                <div class="question-amounts">
                    <div class="question-amount">
                        <div class="number">{$answerQuestionResult?.data?.answerQuestion?.sitting.totalQuestionsCount}</div>
                        <span class="text">Барлык сораулар</span>
                    </div>
                    <div class="question-amount">
                        <div class="number">{$answerQuestionResult?.data?.answerQuestion?.sitting.wrongAnswersCount}</div>
                        <span class="text">Дөрестүгел җаваплар</span>
                    </div>
                    <div class="question-amount">
                        <div class="number">{$answerQuestionResult?.data?.answerQuestion?.sitting.rightAnswersCount}</div>
                        <span class="text">Дөрес җаваплар</span>
                    </div>
                </div>
            </div>
            <div class="test-bottom finished">
                {#if  $answerQuestionResult?.data?.answerQuestion?.sitting.isUserPassed}
                    {#if $answerQuestionResult?.data?.answerQuestion?.sitting.quiz.isLastCourseModuleAndNoModuleAfter}
                        <div class="test-begin-button" on:click={() => {
                            endCourse($answerQuestionResult?.data?.answerQuestion?.sitting.quiz.course.id);
                            // window.location.href = '/profile';
                        }}>
                            Личный кабинет
                        </div>
                    {:else}
                        <a data-sveltekit-reload href={`/lesson/${$answerQuestionResult?.data?.answerQuestion?.sitting?.nextLessonId}`} class="test-begin-button">
                            Киләсе бүлек
                        </a>
                    {/if}
                {/if}
                <a data-sveltekit-reload href={`/quiz/${$answerQuestionResult?.data?.answerQuestion?.sitting?.quiz?.id}`} class="test-begin-button again">
                    Тестны кабат узарга
                </a>
            </div>
        </div>
    {:else}
        <div class="test-begin-card">
            <span>Бүлек буенча йомгаклау тестына сораулар</span>
            <div class="questions-nav">
                {#each Array(quizSitting.totalQuestionsCount) as _, i}
                    {#if quizSitting.currentQuestionNumber === i+1}
                        <div class="questions-nav-item active">
                            {i+1}
                        </div>
                    {:else if quizSitting.currentQuestionNumber > i+1}
                        <div class="questions-nav-item passed">
                            {i+1}
                        </div>
                    {:else}
                        <div class="questions-nav-item">
                            {i+1}
                        </div>
                    {/if}
                {/each}    
                <div class="questions-nav-item">
                    Результат
                </div>
            </div>
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
                <div class="test-bottom">
                    <div class="test-begin-button" on:click={answerQuestion([mcAnswer.toString()], parseInt(quizSitting.quiz.id))}>
                        Киләсе сорау
                        <img src="/icons/CaretRightWhite.svg" alt="">
                    </div>
                    <div class="test-progress">
                        <div class="test-progress-top">
                            <div>
                                <p class="percent"><span>{Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%;`}></div>
                        </div>
                    </div>
                </div>
            {:else if quizSitting.currentQuestionType === 'MultiSelectQuestion'}
                <h2>{quizSitting.multiSelectQuestion.content}</h2>
                <hr>
                <div class="question">
                    <span class="questions-title">Җавапның бер вариантын сайлагыз</span>
                    {#each quizSitting.multiSelectQuestion.answersList as questionAnswer, i}
                        <div class="question-answers">
                            <label class="question-answers" for={`answer${questionAnswer.id}`}>
                                <input type="checkbox" id={`answer${questionAnswer.id}`} bind:group={multipleAnswers} name="answers" value={`${i+1}`}>
                                <span class="checkmark"></span>
                                <span style="padding-left: 40px;">{questionAnswer.content}</span>
                            </label>
                        </div>
                    {/each}
                </div>
                <div class="test-bottom">
                    <div class="test-begin-button" on:click={() => {
                        console.log(multipleAnswers);
                        console.log(parseInt(quizSitting.quiz.id))
                        answerQuestion(multipleAnswers, parseInt(quizSitting.quiz.id))
                    }}>
                        Киләсе сорау
                        <img src="/icons/CaretRightWhite.svg" alt="">
                    </div>
                    <div class="test-progress">
                        <div class="test-progress-top">
                            <div>
                                <p class="percent"><span>{Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%;`}></div>
                        </div>
                    </div>
                </div>
            {:else if quizSitting.currentQuestionType === 'RationQuestion'}
                <h2>{quizSitting.rationQuestion.content}</h2>
                <hr>
                <div class="question">
                    <span class="questions-title">Дөрес пунктларны берләштер</span>
                    <div class="question-answers-select">
                        {#each quizSitting.rationQuestion.answersList as questionAnswer, i}
                            <div class="question-select">
                                <select name="select" id={`rationQuestion${i}`}>
                                    {#each quizSitting.rationQuestion.answersList as questionAnswer, i}
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
                        {#each quizSitting.rationQuestion.rationList as questionAnswer, i}
                            <div class="question-select-variant">
                                <div class="question-select-variant-number">{i+1}</div>
                                <span>{questionAnswer.ration}</span>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="test-bottom">
                    <div class="test-begin-button" on:click={() => {
                        let answerList = [];
                        quizSitting.rationQuestion.answersList.forEach((questionAnswer, i) => {
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
                                <p class="percent"><span>{Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%;`}></div>
                        </div>
                    </div>
                </div>
            {:else if quizSitting.currentQuestionType === 'SqQuestion'}
                <h2>{quizSitting.sqQuestion.content}</h2>
                <hr>
                <div class="question">
                    <span class="questions-title">Җавапның бер вариантын сайлагыз</span>
                    <div class="question-answers-select">
                        {#each quizSitting.sqQuestion.answersList as questionAnswer, i}
                            <div class="question-select">
                                <select name="select" id={i+1}>
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
                </div>
                <div class="test-bottom">
                    <div class="test-begin-button" on:click={() => {
                        let answerList = [];
                        let answerObjList = [];
                        let resultList = [];
                        quizSitting.sqQuestion.answersList.forEach((questionAnswer, i) => {
                            let rationQuestionOption = document.getElementById(i+1);
                            answerList.push(rationQuestionOption.value);
                        });

                        let allUnique = () => answerList.length === new Set(answerList).size;
                        if (allUnique()) {
                            quizSitting.sqQuestion.answersList.forEach((questionAnswer, i) => {
                                let rationQuestionOption = document.getElementById(i+1);
                                answerObjList.push({answeredNumber: rationQuestionOption.value, orderNumber: i+1});
                            });
                            answerObjList.sort((a, b) => (a.answeredNumber > b.answeredNumber) ? 1 : -1)
                            console.log(answerObjList)
                            answerObjList.forEach(obj => {
                                resultList.push(obj.orderNumber.toString());
                            })
                            console.log(resultList);
                            console.log(parseInt(quizSitting.quiz.id));
                            answerQuestion(resultList, parseInt(quizSitting.quiz.id))
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
                                <p class="percent"><span>{Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%</span> сорауларга җавап бирдем</p>
                            </div> 
                            <div>
                                <p><span>{quizSitting.currentQuestionNumber}</span>/{quizSitting.totalQuestionsCount}</p>
                            </div>
                        </div>
                        <div class="progress-line-back">
                            <div class="progress-line-front" style={`width: ${Math.floor((quizSitting.currentQuestionNumber-1)/quizSitting.totalQuestionsCount*100)}%;`}></div>
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
        text-decoration: none;
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
        text-decoration: none;
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