<script>
    import { onMount } from 'svelte';

    export let course;

    let limit = 3;
   
    // onMount(() => {
    //     let acc = document.getElementsByClassName("course-module-button");

    //     showAll = () => {
    //         isShowAll
    //     }
	// });
</script>

<div class="course-teachers">
    {#each course.teachers.slice(0, course.teachers.length >= 3 ? limit : course.teachers.length) as teacher}
        <a href={`teacher/${teacher.id}`} class="course-teacher">
            <img src="/img/teachers/almaz.png" alt="">
            <div class="teacher-info">
                <p class="teacher-name">{teacher.firstName} {teacher.lastName}</p>
                <p class="teacher-occupation">
                    {teacher.position}
                </p>
            </div>
        </a>
    {/each}
</div>
{#if course.teachers.length > 3}
    {#if limit === 3}
        <a href=""
            on:click={() => {
                limit = course.teachers.length;
            }}
        class="show-all-teachers">
            <img src="/icons/ArrowsClockwisePurple.svg" alt="">
            Барысын да күрсәтү
        </a>
    {:else if limit > 3}
        <a href=""
            on:click={() => {
                limit = 3;
            }}
        class="show-all-teachers">
            <img src="/icons/ArrowsClockwisePurple.svg" alt="">
            Азрак күрсәтү
        </a>
    {/if}
{/if}

<style>
    .course-teachers {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .course-teacher {
        display: flex;
        align-items: center;
    }
    .course-teacher:hover {
        text-decoration: none;
        color: initial;
    }
    .course-teacher p {
        margin: 0;
    }
    .teacher-info {
        margin-left: -20px;
        padding: 12px 35px;
    }
    .teacher-occupation {
        font-size: 14px;
        color: var(--primary-color);
    }
    .show-all-teachers {
        display: flex;
        color: var(--primary-color);
        font-size: 13px;
        margin-top: 30px;
        margin-left: 65px;
    }
    .show-all-teachers img{
        margin-right: 10px;
    }
</style>
