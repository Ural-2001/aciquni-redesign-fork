<script>
    import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
    import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';
    import { page } from '$app/stores';

    const id = parseInt($page.params.slug);

	const course = queryStore({
		client: getContextClient(),
		query: gql`
            query ($courseId: ID!) {
                course (courseId: $courseId) {
                    id
                    name
                    shortDescription
                    description
                    image
                    imageCoursesAndCourse
                    tags
                    chat
                    videoLink
                    totalStarted
                    totalEnded
                    totalWatches
                    modules {
                        id
                        name
                        queueNumber
                    }
                    videoFeedbacks {
                        id
                        videoUrl
                    }
                    selectedCourses {
                        id
                    }
                    teachers {
                        id
                        firstName
                        lastName
                        image
                        position
                    }
                    lessonsCount
                    time
                }
            }
		`,
        variables: { courseId: id }
	});

    const recommendedCourses = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				recommendedCourses {
					id
					name
					description
					shortDescription
					image
					tags
					lessonsCount
				}
			}
		`,
	});

    let resultStartCourse;
    let client = getContextClient();
    const startCourse = async () => {
        resultStartCourse = await mutationStore({
            client,
            query: gql`
            mutation (
                $courseId: ID!,
                ){
                    startCourse(
                        courseId: $courseId
                    ) {
                        ok
                        errors
                    }
                }
            `,
            variables: { courseId: id }
        });   
        window.location = `/profile/course/${id}`;     
    };
</script>

{#if $course.fetching}
    <p>Loading...</p>
{:else if $course.error}
    <p>Oh no... {$course.error.message}</p>
{:else}
    <div class="container course">
        <div class="course-info">
            <div class="breadcrumbs">
                <a href="/">баш</a>
                <img src="/icons/CaretLeft.svg" alt="">
                <a href="/courses">курслар</a>
                <img src="/icons/CaretLeft.svg" alt="">
                <a href="">мәдәният</a>
                <img src="/icons/CaretLeft.svg" alt="">
                <a href="">{$course.data.course.name}</a>
            </div>
            <h2 class="page-title">{$course.data.course.name}</h2>  
            <div class="actions">
                {#each $course.data.course.tags as tag}
                    <div class="course-tag">
                        <span>{tag?.name}</span>
                    </div>
                {/each}
                
                <div class="course-tag">
                    <span>{$course.data.course.lessonsCount} дәрес</span>
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
                {$course.data.course.shortDescription}
            </p>
            <div class="start-course">
                <!-- <ButtonArrowLong action={() => {startCourse(); window.location = `/profile/course/${id}`}} text={'Курсны башларга'}/> -->
                <div class="button" on:click={() => startCourse()} style="background-color: var(--primary-color);
                    color: white;
                    padding: 15px 30px 18px 30px;
                    border-radius: 50px; cursor: pointer">
                    <span>{'Курсны башларга'}</span>
                    <img src="../icons/ArrowUpRightWhite.svg" alt="">
                </div>
                <div class="total-students">
                    <span class="total-students-number">{$course.data.course.totalStarted}</span>
                    <span class="total-students-text">студентлар саны</span>
                </div>
            </div>
            <p class="course-description-title">курсның тасвирламасы</p>
            <div class="course-description" contenteditable bind:innerHTML={$course.data.course.description}></div>
            <div class="teachers">
                <p>мөгаллимнәр</p>
                <div class="teachers-block">
                    {#each $course.data.course.teachers as teacher}
                        <div class="teacher">
                            <img src={`/img/teachers/${teacher.image}`} alt="">
                            <div class="teacher-info">
                                <span class="teacher-name">{teacher.firstName} {teacher.lastName}</span>
                                <span class="teacher-occupation">{teacher.position}</span>
                            </div>
                        </div>
                    {/each}
                    <!-- <div class="teacher">
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
                    </div> -->
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
            <img class="course-img" src="/img/courses/big.png" alt="">
            <div class="course-content-block">
                <p class="course-content-title">курсның эчтәлеге</p>
                <div class="course-duration">
                    <span>{$course.data.course.lessonsCount} дәрес · {$course.data.course.time}</span>
                </div>
            </div>
            <div class="modules">
                {#each $course.data.course.modules as module}
                    <div class="module">
                        <span class="module-title">{module.name}</span>
                        {#if module.lessons}
                            {#each module.lessons as lesson}
                                <hr>
                                <a href="" class="module-lesson">
                                    <div>
                                        <img src="/icons/Note.svg" alt="">
                                        <span class="lesson-name">
                                        {lesson.name}
                                        </span>
                                    </div>
                                    <div class="lesson-duration">
                                        <img src="/icons/Clock.svg" alt="">
                                        <span class="lesson-duration-text">{lesson.time} мин</span>
                                    </div>
                                </a>
                            {/each}
                        {/if}
                        <hr>
                        <a href="" class="module-lesson">
                            <div>
                                <img src="/icons/Note.svg" alt="">
                                <span class="lesson-name">
                                    Балаларны дәрескә һәм предметка ничек җәлеп итәргә?
                                </span>
                            </div>
                            <div class="lesson-duration">
                                <img src="/icons/Clock.svg" alt="">
                                <span class="lesson-duration-text">15 мин</span>
                            </div>
                        </a>
                    </div>
                {/each}
                <a href="" class="module modules-link">
                    <img src="/icons/NotePencilPurple.svg" alt="">
                    <span class="module-title">Биремнәр мисаллар карау</span>
                </a>
                <a href="" class="module modules-link">
                    <img src="/icons/MedalPurple.svg" alt="">
                    <span class="module-title">Дипломнар, сертификатлар һәм грамоталар мисаллары</span>
                </a>
            </div>
        </div>
    </div>
    {#if $course.data.course.videoFeedbacks.length > 0}
        <div class="container">
            <div class="reviews-nav">
                <h3>курслар турында фикерләр</h3>
                <div class="reviews-nav-buttons">
                    <div class="reviews-nav-button-left">
                        <img src="/icons/CaretLeft.svg" alt="">
                    </div>
                    <div class="reviews-nav-button-right">
                        <img src="/icons/CaretRight.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="reels">
                {#each $course.data.course.videoFeedbacks as reel}
                    <div class="reel">
                        <img class="reel-img" src="/img/review-reels/1.png" alt=""> 
                        <img class="gradient" src="/img/review-reels/gradient.png" alt="">
                        <div class="reel-texts">
                            <a href="" class="reel-play-button">
                                <img src="/icons/Play.svg" alt="">
                            </a>
                            <div class="reel-info">
                                <span class="desc">6 курс узды</span>
                                <span class="name">Талия, 17</span>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
    {#if $recommendedCourses.fetching}
        <p>Loading...</p>
    {:else if $recommendedCourses.error}
        <p>Oh no... {$recommendedCourses.error.message}</p>
    {:else if $recommendedCourses.data.recommendedCourses.length > 0}
    <div class="courses-foryou-section container">
        <div class="courses-foryou-nav">
            <h3>сезнең өчен курслар</h3>
            <div class="courses-nav-buttons">
                <div class="courses-nav-button-left">
                    <img src="/icons/CaretLeft.svg" alt="">
                </div>
                <div class="courses-nav-button-right">
                    <img src="/icons/CaretRight.svg" alt="">
                </div>
            </div>
        </div>
        <div class="courses-foryou">
            {#each $recommendedCourses.data.recommendedCourses as course}
                <div class="course-foryou-card">
                    <div>
                        <img src="/img/courses/course3.png" alt="">
                        <a href={course.id} class="course-foryou-card-button">
                            <img src="/icons/ArrowUpRight.svg" alt="">
                        </a>
                    </div>
                    <div class="course-foryou-card-right">
                        <p class="course-foryou-card-title">{course?.name}: {course?.shortDescription}</p>
                        <div class="course-foryou-card-info">
                            {#each course.tags as tag}
                                <div>
                                    <span>{tag?.name}</span>
                                </div>
                            {/each}
                            <div>
                                <span>{course.lessonsCount} дәрес</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    {/if}
{/if}

<style>
    .course {
        display: flex;
        justify-content: space-between;
        gap: 80px;
    }
    .page-title{
		font-size: 52px;
        max-width: 540px;
        margin-bottom: 35px;
	}
    .course-info {
        /* width: 41%; */
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
    .course-content {
        /* width: 50%; */
    }
    .course-content .course-img{
        margin-bottom: 100px;
    }
    .course-content-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .course-content-title {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 0;
    }
    .course-duration {
        background-color: #1A233E;
        color: white;
        padding: 3px 20px;
        border-radius: 50px;
        font-size: 12px;
    }
    .modules {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .module {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30px 40px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .module-title {
        font-weight: 600;
        font-size: 22px;
        color: var(--primary-color); 
    }
    .module-lesson {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }
    .module-lesson:hover {
        text-decoration: none;
        color: var(--primary-color);
    }
    .module hr {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .lesson-name {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 500;
    }
    .lesson-duration {
        display: flex;
        font-size: 12px;
        color: #999999;
    }
    .modules-link {
        flex-direction: row;
        justify-content: flex-start;
        gap: 15px;
        padding: 15px 40px;
    }
    .modules-link span {
        font-size: 16px;
        font-weight: 500;
    }
    .modules-link img {
        width: 24px;
    }

    .courses-foryou-nav,
    .reviews-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 140px;
        margin-bottom: 40px;
    }
    .courses-foryou-nav h3,
    .reviews-nav h3 {
        font-size: 40px;
    }
    .courses-nav-buttons,
    .reviews-nav-buttons {
		display: flex;
	}
	.courses-nav-button-left, .courses-nav-button-right,
    .reviews-nav-button-left, .reviews-nav-button-right {
		/* display: inline-block; */
		/* margin-top: 100px; */
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #E7E7E7;
		border-radius: 150px;
		padding: 18px;
	}
	.courses-nav-button-right,
    .reviews-nav-button-right {
		border: 1px solid var(--primary-color);
		margin-left: -10px;
	}
	.courses-nav-button-left:hover, .courses-nav-button-right:hover,
    .reviews-nav-button-left:hover, .reviews-nav-button-right:hover {
		cursor: pointer;
	}
    .courses-foryou {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
    }
    .course-foryou-card {
		display: flex;
	}
    .course-foryou-card img{
		width: 172px;
        z-index: -1;
	}
	.course-foryou-card-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 48px;
		height: 48px;
		border: 1px solid var(--primary-color);
		border-radius: 50px;
        margin-top: -106px;
        margin-left: 150px;
	}
	.course-foryou-card-button img {
		width: 24px;
	}
    .course-foryou-card-right {
        margin-left: 15px;
    }
	.course-foryou-card-title {
		font-size: 20px;
	}
	.course-foryou-card-info {
		display: flex;
		gap: 8px;
	}
	.course-foryou-card-info div {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0px 15px;
		border: 1px solid #999999;
		border-radius: 50px;
		color: #999999;
		font-size: 12px;
	}
	.course-foryou-card-info span {
		margin-top: -2px;
    }
    .reels {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 15px;
    }
    .reel {
        border-radius: 24px;
    }
    .reel-img {

    }
    .gradient {
        position: absolute;
        margin-left: -203px;
        z-index: -1;
    }
    .reel-texts {
        display: flex;
        flex-direction: column;
        margin-top: -158px;
        margin-left: 20px;
    }
    .reel-play-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: 1px solid white;
        border-radius: 100px;
        width: 72px;
        height: 72px;
        margin-bottom: 15px;
    }
    .reel-play-button img {
        margin-left: 5px;
    }
    .reel-info {
        display: flex;
        flex-direction: column;
    }
    .reel .desc {
        color: white;
        opacity: 0.6;
        font-size: 12px;
        font-weight: 500;
    }
    .reel .name {
        color: white;
        font-weight: 600;
    }
</style>