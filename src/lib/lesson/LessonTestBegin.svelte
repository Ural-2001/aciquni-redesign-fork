<script>
	import { createEventDispatcher } from 'svelte';
    import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';
    import { page } from '$app/stores';

    export let quiz;
    export let results;

    const id = parseInt($page.params.slug);

    let resultStartQuiz;
    let client = getContextClient();
    const startQuizMutation = async () => {
        resultStartQuiz = await mutationStore({
            client,
            query: gql`
            mutation ($quizId: ID,) {
                startQuiz(quizId: $quizId) {
                    ok
                    firstQuestionId
                    sitting {
                        id
                        quiz {
                            id
                            title
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
            variables: { quizId: id }
        });        
    };

    let startQuiz = (quizId) => {
        startQuizMutation();
        window.location.href = `/quiz/${quizId}/question`;
    }

    let resumeQuiz = (quizId) => {
        window.location.href = `/quiz/${quizId}/question`;
    }

    let months = [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ]
</script>

<div class="test">
    <div class="test-top">
        <h1>{quiz.title}</h1>
        <div class="close-test">
            <img src="/icons/XCircle.svg" alt="">
            Тестны башка вакытта үтәргә
        </div>
    </div>
    <div class="test-begin-card">
        <span>Заманча татар шигърияте</span>
        <h2>Бу "{quiz.module.name}" модуле буенча тест. Әгәр дә сез 60% сорауга дөрес җавап бирсәгез, сезгә киләсе модуль ачылачак!</h2>
        <div class="test-begin-button-section">
            {#if quiz.isUserStarted}
                <div on:click={resumeQuiz(quiz.id)} class="test-begin-button">
                    Дэвам итергэ
                    <img src="/icons/CaretRightWhite.svg" alt="">
                </div>
            {:else}
                <div on:click={startQuiz(quiz.id)} class="test-begin-button">
                    Тестны башларга
                    <img src="/icons/CaretRightWhite.svg" alt="">
                </div>
            {/if}
            <div class="test-questions-count">
                Бу тест {quiz.maxQuestions} сораудан тора
                <img src="/icons/ChatTeardropTextPurple.svg" alt="">
            </div>
        </div>
        <hr>
        <div class="previous-attempts">
            <h6>Элекеге тест нәтиҗәләре</h6>
            <div class="previous-attempts-table">
                <div class="previous-attempts-dates">
                    {#each results as sitting, i}
                        <div class="previous-attempts-date" class:grey_row="{i % 2 === 0}">
                            {new Date(sitting.end).getDate()} {months[new Date(sitting.end).getMonth()]} {new Date(sitting.end).getFullYear()} - {new Date(sitting.end).getHours()}:{new Date(sitting.end).getMinutes()}
                        </div>
                    {/each}
                </div>
                <div class="previous-attempts-falses">
                    {#each results as sitting, i}
                        <div class="previous-attempts-false" class:grey_row="{i % 2 === 0}">
                            <span>{sitting.wrongAnswersCount}</span> · Дөрестүгел җаваплар
                        </div>
                    {/each}
                </div>
                <div class="previous-attempts-trues">
                    {#each results as sitting, i}
                        <div class="previous-attempts-true" class:grey_row="{i % 2 === 0}">
                            <span>{sitting.rightAnswersCount}</span> · Дөрестүгел җаваплар
                        </div>
                    {/each}
                </div>
                <div class="previous-attempts-results">
                    {#each results as sitting, i}
                        <div class="previous-attempts-result" class:grey_row="{i % 2 === 0}">
                            <p><span>{sitting.userScore}</span> · Сез баллар җыйдыгыз</p>
                            {#if sitting.isUserPassed}
                                <img src="/icons/ThumbsUpPurple.svg" alt="">
                            {:else}
                                <img src="/icons/Prohibit.svg" alt="">
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .grey_row {
        background:#F7F7F5;
    }
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
        padding: 4px 15px 4px 15px;
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