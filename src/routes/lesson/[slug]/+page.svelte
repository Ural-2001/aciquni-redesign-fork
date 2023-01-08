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
                    minutesLearn
                    minutesLearnMessage
                    usersStarted {
                        id
                        user {
                            id
                            firstName
                            lastName
                        }
                        birthDate
                        middleName
                        phoneNumber
                    }
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
                <div class="lesson-right">
                    Киләсе дәрес
                    <img src="/icons/CaretRightWhite.svg" alt="">
                </div>
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
</style>
