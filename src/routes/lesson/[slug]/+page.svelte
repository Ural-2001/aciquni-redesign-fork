<script>
    import LessonCard from "$lib/lesson/LessonCard.svelte";
    import LessonText from "$lib/lesson/LessonText.svelte";
    import LessonVideo from "$lib/lesson/LessonVideo.svelte";
    import LessonPresentation from "$lib/lesson/LessonPresentation.svelte";
    import LessonTestBegin from "$lib/lesson/LessonTestBegin.svelte";
    import LessonTestQuestion from "$lib/lesson/LessonTestQuestion.svelte";

    import { onMount } from 'svelte';
    import { queryStore, gql, getContextClient } from '@urql/svelte';
    import { page } from '$app/stores';

    const id = parseInt($page.params.slug);

    let selectedPage = 'content';
    let selectPage = (page) => {
        selectedPage = page;
    };

    // onMount(() => {
	// });

    const lesson = queryStore({
		client: getContextClient(),
		query: gql`
            query ($lessonId: ID!) {
                lesson (lessonId: $lessonId) {
                    id
                    type
                    name
                    link
                    text
                    description
                    module {
                        id
                        name
                        course {
                            id
                            name
                            userProgress  
                        }
                        queueNumber
                        lessons {
                            id
                            name
                            time
                            userLessonStartedStatus
                        }
                        userModuleStartedStatus
                        userModuleEndedStatus
                        userProgress
                    }
                    teachers {
                        id
                        firstName
                        lastName
                        patronymic
                        image
                        imageCropped
                        imageCroppedTeacherPage
                        information
                        position
                        total
                    }
                    resources {
                        id
                        name
                        link
                        file
                        isLink
                        image
                    }
                    comments {
                        id
                        createdAt
                        updatedAt
                        profile {
                            user {
                                id
                                username
                                firstName
                                lastName
                            }
                        }
                        text
                    }
                    minutesLearn
                    minutesLearnMessage
                    queueNumber
                    userLessonStartedStatus
                    time
                    nextLessonId
                }
            }
		`,
        variables: { lessonId: id }
	});
    
</script>

<div class="container lesson-page">
    {#if $lesson.fetching}
        <p>Loading...</p>
    {:else if $lesson.error}
        <p>Oh no... {$lesson.error.message}</p>
    {:else}
        <LessonCard lesson={$lesson.data.lesson} />
        <div class="lesson">
            <h1>{$lesson.data.lesson.name}</h1>
            <p class="lesson-info">{$lesson.data.lesson.time}  ·  Лектор {$lesson.data.lesson.teachers[0].firstName} {$lesson.data.lesson.teachers[0].lastName}</p>
            <div class="lesson-nav">
                <div class="lesson-left">
                    <img src="/icons/CaretLeft.svg" alt="">
                    Алдагы дәрес
                </div>
                <div class="lesson-lessons">
                    {#each $lesson.data.lesson.module.lessons as moduleLesson, i}
                        {#if moduleLesson.id  === $lesson.data.lesson.id}
                            <a data-sveltekit-reload href={`/lesson/${moduleLesson.id}`} class="lesson-number active">
                                {i+1}
                            </a>
                        {:else if moduleLesson.userLessonStartedStatus}
                            <a data-sveltekit-reload href={`/lesson/${moduleLesson.id}`} class="lesson-number finished">
                                <img src="/icons/CheckCircleBlack.svg" alt="">
                            </a>
                        {:else}
                            <a data-sveltekit-reload href={`/lesson/${moduleLesson.id}`} class="lesson-number">
                                {i+1}
                            </a>
                        {/if}
                    {/each}
                    <!-- <div class="lesson-number test">Тест</div> -->
                </div>
                <a data-sveltekit-reload href={`/lesson/${$lesson.data.lesson.nextLessonId}`} class="lesson-right">
                    Киләсе дәрес
                    <img src="/icons/CaretRightWhite.svg" alt="">
                </a>
            </div>
            {#if $lesson.data.lesson.type === 'MP4'}
                <LessonVideo lesson={$lesson.data.lesson} />
            <!-- {:else if $lesson.type === 'MP3'} -->
            {:else if $lesson.data.lesson.type === 'PRES'}
                <LessonPresentation lesson={$lesson.data.lesson} />
            {:else if $lesson.data.lesson.type === 'TEXT'}
                <LessonText lesson={$lesson.data.lesson} />
            {/if}
            <!-- <LessonTestBegin lesson={$lesson.data.lesson} /> -->
            <!-- <LessonTestQuestion lesson={$lesson.data.lesson} /> -->
            {#if $lesson.data.lesson.resources.length > 0}
                <div class="lesson-materials-section">
                    <h2>дәрес материаллары</h2>
                    <div class="lesson-materials">
                        {#each $lesson.data.lesson.resources as material}
                            <div class="lesson-material">
                                <div class="lesson-material-info-section">
                                    <img src="/icons/Note.svg" alt="">
                                    <div class="lesson-material-info">
                                        <p class="lesson-material-title">{material.name}</p>
                                        <p class="lesson-material-file-size">Файл PDF  ·   kb</p>
                                    </div>
                                </div>
                                <a href={material.link} target="_blank" class="download-button">
                                    <img src="/icons/DownloadWhite.svg" alt="">
                                </a>
                            </div> 
                        {/each}              
                    </div>
                </div>
            {/if}
            <div class="comments-section">
                <h2>комментарийлар</h2>
                <div class="comment-input">
                    <div style="width: 90%;">
                        <img src="/img/people/1.png" alt="">
                        <input type="text" placeholder="Сезнең комментарий">
                    </div>
                    <div class="send-comment">Җибәрү</div>
                </div>
                <div class="comments">
                    {#each $lesson.data.lesson.comments as comment}
                        <div class="comment">
                            <div class="comment-top">
                                <div class="comment-author">
                                    <img src="/img/people/1.png" alt="">
                                    <span>{comment.profile.user.firstName} {comment.profile.user.lastName}</span>
                                </div>
                                <div class="comment-date">
                                    <span>{comment.createdAt}</span>
                                </div>
                            </div>
                            <p class="comment-text">
                                {comment.text}
                            </p>
                            <div class="show-more-comment-text">Барысын да күрсәтү</div>
                        </div>
                    {/each}
                </div>
                <a href="#" class="show-more-comments">
                    Тагын 12 мөгалимнәр арасыннан 45
                    <img src="/icons/ArrowsClockwise.svg" alt="">
                </a>
            </div>
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
