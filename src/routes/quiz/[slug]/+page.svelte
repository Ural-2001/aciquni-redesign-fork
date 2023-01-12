<script>
    import LessonCard from "$lib/lesson/LessonCard.svelte";
    import LessonText from "$lib/lesson/LessonText.svelte";
    import LessonVideo from "$lib/lesson/LessonVideo.svelte";
    import LessonPresentation from "$lib/lesson/LessonPresentation.svelte";
    import LessonTestBegin from "$lib/lesson/LessonTestBegin.svelte";
    import LessonTestQuestion from "$lib/lesson/LessonTestQuestion.svelte";

    import { onMount } from 'svelte';
    import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';
    import { page } from '$app/stores';

    const id = parseInt($page.params.slug);

    let selectedPage = 'content';
    let selectPage = (page) => {
        selectedPage = page;
    };

    // onMount(() => {
	// });

    const quiz = queryStore({
		client: getContextClient(),
		query: gql`
            query ($quizId: ID!) {
                quiz (quizId: $quizId) {
                    id
                    title
                    description
                    course {
                        id
                        name
                        shortDescription
                        description
                        image
                        imageCoursesAndCourse
                        imageDash
                        tags
                        chat
                        isVideo
                        videoLink
                        created
                        updated
                        isActive
                        isReady
                        totalStarted
                        totalEnded
                        totalWatches
                        queueNumber
                        isCertificated
                        lessonsCount
                        time
                        total
                        userProgress
                        userLastModule
                        userLastLesson
                    }
                    module {
                        id
                        name
                        queueNumber
                        userModuleStartedStatus
                        userModuleEndedStatus
                        userProgress
                        lessons {
                            id
                            name
                            time
                            userLessonStartedStatus
                        }
                    }
                    url
                    randomOrder
                    maxQuestions
                    answersAtEnd
                    singleAttempt
                    passMark
                    successText
                    failText
                    isUserStarted
                }
            }
		`,
        variables: { quizId: id }
	});

    let resultStartQuiz;
    let client = getContextClient();
    const startQuiz = async () => {
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
                            answersList {
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
                            questionPtr {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            mcquestion {
                                id
                                figure
                                imageCropped
                                content
                                explanation
                                hidden
                                answerOrder
                            }
                            sqquestion {
                                id
                                figure
                                imageCropped
                                content
                                explanation
                                hidden
                                userAnswer
                            }
                            multiselectquestion {
                                id
                                figure
                                imageCropped
                                content
                                explanation
                                hidden
                                answerOrder
                                correctAnswer
                            }
                            rationquestion {
                                id
                                figure
                                imageCropped
                                content
                                explanation
                                hidden
                                userAnswer
                            }
                            }
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
                            answersList(quizId: "_____") {
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
                            answersList {
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
                            answersList(quizId: "_____") {
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

    let resultResumeQuiz;
    const resumeQuiz = () => {
        resultResumeQuiz = queryStore({
            client,
            query: gql`
            query ($quizId: ID!) {
                quizSitting(quizId: $quizId) {
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
                        answersList {
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
                        questionPtr {
                        id
                        figure
                        imageCropped
                        content
                        explanation
                        hidden
                        mcquestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            answerOrder
                        }
                        sqquestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            userAnswer
                        }
                        multiselectquestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            answerOrder
                            correctAnswer
                        }
                        rationquestion {
                            id
                            figure
                            imageCropped
                            content
                            explanation
                            hidden
                            userAnswer
                        }
                        }
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
                        answersList(quizId: "_____") {
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
                        answersList {
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
                        answersList(quizId: "_____") {
                            id
                            content
                        }
                    } 
                }
            }`,
            variables: { quizId: id }
        });        
    };
    
</script>

<div class="container lesson-page">
    {#if $quiz.fetching}
        <p>Loading...</p>
    {:else if $quiz.error}
        <p>Oh no... {$quiz.error.message}</p>
    {:else}
        <LessonCard quiz={$quiz.data.quiz} isQuiz={true} />
        <div class="lesson">
            <!-- <h1>{$quiz.data.quiz.course.name}</h1> -->
            {#if $resultResumeQuiz?.data}
                <LessonTestQuestion quizSitting={$resultResumeQuiz.data.quizSitting} />
            {:else}
                <LessonTestBegin quiz={$quiz.data.quiz} on:startQuiz={startQuiz} on:resumeQuiz={resumeQuiz}/>
            {/if}
        </div>
    {/if}
</div>


<style>
    .lesson-page {
        display: flex;
        justify-content: space-between;
        gap: 125px;
    }
    .lesson {
        width: 66%;
    }
    h1 {
        font-size: 30px;
        font-weight: 600;
        margin: 0;
    }
    .lesson-info {
        color: #B4B4B4;
        font-size: 12px;
        margin: 0;
    }
    .lesson-nav {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .lesson-left {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 13px 40px 15px 20px;
        border: 1px solid var(--primary-color);
        border-radius: 50px;
        cursor: pointer;
    }
    .lesson-right {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 13px 20px 15px 40px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50px;
        cursor: pointer;
        text-decoration: none;
    }
    .lesson-lessons {
        display: flex;
        gap: 10px;
    }
    .lesson-number {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        width: 40px;
        cursor: pointer;
    }
    .lesson-number img{
        width: 16px;
    }
    .lesson-number.finished {
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .lesson-number.active {
        font-size: 12px;
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color);
        color: white;
    }
    .lesson-number.test {
        padding: 0 25px;
    }
    .lesson-materials-section {
        margin-top: 50px;
    }
    .lesson-materials {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .lesson-material {
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 18px;
    }
    .lesson-material-info-section {
        display: flex;
        gap: 15px;
    }
    .lesson-material-info {
        display: flex;
        flex-direction: column;
    }
    .lesson-material-info p{
        margin: 0;
        line-height: 20px;
    }
    .lesson-material-title {
        font-size: 16px;
        font-weight: 500;
    }
    .lesson-material-file-size {
        font-size: 12px;
        color: #B4B4B4;
    }
    .download-button {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
        border-radius: 50px;
    }
    .comments-section {
        margin-top: 50px;
    }
    .comments-section h2{
        font-size: 32px;
    }
    .comment-input {
        border: 1px solid #E7E7E7;
        border-radius: 30px;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .comment-input div {
        display: flex;
        align-items: center;
    }
    .comment-input img {
        width: 48px;
    }
    .comment-input input {
        border: none;
        margin-left: 20px;
        font-size: 16px;
        width: inherit;
    }
    .comment-input input:focus {
        outline: none;
    }
    .send-comment {
        background: var(--primary-color);
        border-radius: 24px;
        color: white;
        padding: 10px 25px;
        font-size: 14px;
    }
    .send-comment:hover {
        cursor: pointer;
    }
    .comments {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .comment {
        display: flex;
        border-radius: 20px;
        background-color: #F7F7F5;
        display: flex;
        flex-direction: column;
        padding: 25px 30px;
    }
    .comment-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .comment-top img{
        width: 28px;
    }
    .comment-author{
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-weight: 600;
    }
    .comment-date{
        font-size: 12px;
        color: #9A9DA8;
    }
    .comment-text {
        margin-top: 12px;
        font-size: 16px;
        line-height: 140%;
        margin-bottom: 0px;
    }
    .show-more-comment-text {
        font-size: 12px;
        color: var(--primary-color);
        margin-top: 5px;
    }
    .show-more-comment-text:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .show-more-comments {
        display: flex;
		justify-content: center;
        align-items: center;
		width: fit-content;
        border: 1px solid var(--primary-color);
        border-radius: 32px;
        padding: 18px 37px;
        font-size: 18px;
        margin-top: 45px;
	}
	.show-more-comments img {
		margin-left: 80px;
		width: 20px;
	}
	.show-more-comments:hover {
        color: var(--primary-color);
		text-decoration: none;
	}
</style>
