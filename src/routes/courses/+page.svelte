<script>
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const courses = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				courses {
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

    const teachers = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				teachers {
					id
					firstName
					lastName
					information
					position
					imageCropped
				}
			}
		`,
	});
</script>

<div class="container top-section">
    <div class="breadcrumbs">
        <a href="/">баш</a>
        <img src="/icons/CaretLeft.svg" alt="">
        <a href="/courses">курслар</a>
        <img src="/icons/CaretLeft.svg" alt="">
        <a href="">мәдәният</a>
    </div>
    <h2 class="page-title"><span class="courses-category">мәдәният</span> курслары</h2>    
</div>

<div class="section container courses">
    {#if $courses.fetching}
        <p>Loading...</p>
    {:else if $courses.error}
        <p>Oh no... {$courses.error.message}</p>
    {:else if $courses.data.courses.length > 0}
        <div>
            <div class="courses-cards">
                {#each $courses.data.courses as course}
                    <div class="course-card">
                        <img src="/img/courses/1.png" alt="">
                        <a href={`/courses/${course.id}`} class="course-card-button">
                            <img src="/icons/ArrowUpRight.svg" alt="">
                        </a>
                        <p class="course-card-title">{course?.name}: {course?.shortDescription}</p>
                        <div class="course-card-info">
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
                {/each}
            </div>
            <!-- <a href="/" class="all-courses-button">
                Тагын 9 курс арасыннан 154
                <img src="/icons/ArrowsClockwise.svg" alt="">
            </a> -->
        </div>
    {:else}
        <p>Пока курсов нет</p>
    {/if}
    <div class="filter-sections">
        <div class="categories filter-section">
            <span class="title">Категория</span>
            <hr>
            <label class="filter-item" for="history">
                <input type="checkbox" id="history" name="category">
                <span class="checkmark"></span>
                <span>Тарих</span>
            </label>
            <label class="filter-item" for="meden">
                <input type="checkbox" id="meden" name="category">
                <span class="checkmark"></span>
                <span>Мәдәният</span>
            </label>
            <label class="filter-item" for="dizayn">
                <input type="checkbox" id="dizayn" name="category">
                <span class="checkmark"></span>
                <span>Дизайн</span>
            </label>
            <label class="filter-item" for="iktisad">
                <input type="checkbox" id="iktisad" name="category">
                <span class="checkmark"></span>
                <span>Икътисад</span>
            </label>
            <label class="filter-item" for="edeb">
                <input type="checkbox" id="edeb" name="category">
                <span class="checkmark"></span>
                <span>Әдәбият</span>
            </label>
            <div class="show-all-categories">Барысын да күрсәтү</div>
        </div>
        <div class="filters filter-section">
            <span class="title">Башта</span>
            <hr>
            <label class="filter-item" for="new">
                <input type="checkbox" id="new" name="filter">
                <span class="checkmark"></span>
                <span>Яңа курслар</span>
            </label>
            <label class="filter-item" for="old">
                <input type="checkbox" id="old" name="filter">
                <span class="checkmark"></span>
                <span>Элекеге курслар</span>
            </label>
            <label class="filter-item" for="time">
                <input type="checkbox" id="time" name="filter">
                <span class="checkmark"></span>
                <span>Үтү саннары</span>
            </label>
            <label class="filter-item" for="views">
                <input type="checkbox" id="views" name="filter">
                <span class="checkmark"></span>
                <span>Карау саннары</span>
            </label>
        </div>
        {#if $teachers.fetching}
            <p>Loading...</p>
        {:else if $teachers.error}
            <p>Oh no... {$teachers.error.message}</p>
        {:else}
            <div class="teachers filter-section">
                <span class="title">Укытучылар</span>
                <hr>
                {#each $teachers.data.teachers as teacher}
                    <label class="filter-item filter-item-teacher" for="teacher1">
                        <input type="checkbox" id="teacher1" name="teacher">
                        <span class="checkmark checkmark-teacher" style="
                            background-image: url(/img/teachers/yoldiz.png);
                        ">
                        </span>
                        <span>{teacher.firstName} {teacher.firstName}</span>
                    </label>
                {/each}
                <div class="show-all-categories">Барысын да күрсәтү</div>
            </div>
        {/if}
    </div>
</div>
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
                    <a href={`courses/${course.id}`} class="course-foryou-card-button">
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

<style>
    .top-section {
        margin-bottom: 30px;
    }
    .courses {
		display: flex;
        justify-content: space-between;
        gap: 100px;
	}
    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .breadcrumbs a{
        color: #BCBCBC;
        font-size: 12px;
    }
    .breadcrumbs img{
        width: 11px;
    }
    .breadcrumbs a:hover{
        text-decoration: none;
    }
    .page-title{
		font-size: 52px;
	}
    .courses-category {
        color: var(--primary-color);
    }
	.courses-cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 15px;
		grid-row-gap: 50px;
		margin-bottom: 50px;
	}
	.course-card {
		display: flex;
		flex-direction: column;
	}
	.course-card-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border: 1px solid var(--primary-color);
		border-radius: 50px;
		margin-top: -20px;
	}
	.course-card-button img {
		width: 24px;
	}
	.course-card-title {
		font-size: 20px;
		padding-left: 65px;
		padding-right: 20px;
	}
	.course-card-info {
		display: flex;
		justify-content: center;
		gap: 8px;
	}
	.course-card-info div {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0px 15px;
		border: 1px solid #999999;
		border-radius: 50px;
		color: #999999;
		font-size: 12px;
	}
	.course-card-info span {
		margin-top: -2px;
	}
	.all-courses-button {
        display: flex;
		justify-content: center;
        align-items: center;
		width: fit-content;
        border: 1px solid var(--primary-color);
        border-radius: 32px;
        padding: 10px 25px;
        font-size: 14px;
	}
	.all-courses-button img {
		margin-left: 80px;
		width: 20px;
	}
	.all-courses-button:hover {
        color: var(--primary-color);
		text-decoration: none;
	}
    .filter-sections {
        display: flex;
        flex-direction: column;
        width: 418px;
    }
    .filter-section {
        margin-bottom: 30px;
    }
    .filter-section .title {
        color: #1A233E;
        font-size: 14px;
    }
    .filter-section hr {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .filter-item {
        display: block;
        position: relative;
        padding-left: 23px;
        margin-bottom: 8px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        color: #999999;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .filter-item-teacher {
        padding-left: 40px;
    }
    /* Hide the browser's default checkbox */
    .filter-item input {
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
        top: 5px;
        left: 0;
        height: 18px;
        width: 18px;
        border: 1px solid #E1E1E1;
        border-radius: 100px;
    }
    .checkmark-teacher {
        top: 0px;
        height: 30px;
        width: 30px;
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: center;
    }
    /* On mouse-over, add a primary-color background color */
    .filter-item:hover input ~ .checkmark {
        border-color: var(--primary-color);
        background-image: url(./teachers-filter/yoldiz.png);
    }
    /* When the checkbox is checked, add a blue background */
    .filter-item input:checked ~ .checkmark {
        background-color: var(--primary-color);
        background-image: url(./check.svg) ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 12px;
    }
    .filter-item input:checked ~ .checkmark-teacher {
        background-size: 25px;
    }
    .filter-item input:hover ~ span {
        color: #A38BA5 !important;
    }
    .filter-item input:checked ~ span {
        color: #1A233E !important;
    }
    .show-all-categories {
        color: var(--primary-color);
        cursor: pointer;
        font-size: 11px;
        margin-top: -5px;
    }
    .show-all-categories:hover {
        text-decoration: underline;
    }
    .courses-foryou-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 140px;
        margin-bottom: 40px;
    }
    .courses-foryou-nav h3 {
        font-size: 40px;
    }
    .courses-nav-buttons {
		display: flex;
	}
	.courses-nav-button-left, .courses-nav-button-right {
		/* display: inline-block; */
		/* margin-top: 100px; */
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #E7E7E7;
		border-radius: 150px;
		padding: 18px;
	}
	.courses-nav-button-right {
		border: 1px solid var(--primary-color);
		margin-left: -10px;
	}
	.courses-nav-button-left:hover, .courses-nav-button-right:hover {
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
</style>