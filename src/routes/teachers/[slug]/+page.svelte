<script>
    import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
    import { queryStore, gql, getContextClient } from '@urql/svelte';
    import { page } from '$app/stores';

    const id = parseInt($page.params.slug);

	const teacher = queryStore({
		client: getContextClient(),
		query: gql`
            query ($teacherId: ID!){
                teacher(teacherId: $teacherId) {
                    id
                    firstName
                    lastName
                    patronymic
                    image
                    imageCropped
                    imageCroppedTeacherPage
                    information
                    position
                }
            }
		`,
        variables: { teacherId: id }
	});
</script>

{#if $teacher.fetching}
<p>Loading...</p>
{:else if $teacher.error}
<p>Oh no... {$teacher.error.message}</p>
{:else}
    <div class="container top-section">
        <div class="breadcrumbs">
            <a href="/">баш</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="">мөгалимнәр</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="">{teacher.firstName} {teacher.lastName}</a>
        </div>
    </div>
    <div class="container">
        <div style="width: 75%;">
            <div class="teacher-card">
                <div class="teacher-info">
                    <h1 class="teacher-name">Гөлназ Җиһангирова</h1>
                    <p class="teacher-occupation">
                        Музыка белгече, Әүхәдиев исемендәге музыка көллияте укытучысы.
                    </p>
                </div>
                <div class="teacher-photo">
                    <img class="teacher-photo-img" src="/img/teachers/yoldiz.png" alt="">
                    <div class="teacher-courses">
                        <div style="display: flex; justify-content: flex-end;">
                            <img src="/icons/GraduationCapPurple.svg" alt="">
                        </div> 
                        <div style="display: flex; flex-direction: column;">
                            <span class="teacher-courses-number">42</span>
                            <span class="teacher-courses-text">курслар</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="biography">
                <h3>биография</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                </p>
                <a href="">
                    <img src="/icons/ArrowsClockwisePurple.svg" alt="">
                    Барысын да күрсәтү
                </a>
            </div>
            <hr>
            <div>
                <h2 style="margin-left: 42px;">курслар</h2>
                <div class="courses-cards">
                    <div class="course-card">
                        <img src="/img/courses/1.png" alt="">
                        <a href="" class="course-card-button">
                            <img src="/icons/ArrowUpRight.svg" alt="">
                        </a>
                        <p class="course-card-title">Татар әдәбияты тарихы: борынгы чорлардан – яңа зама..</p>
                        <div class="course-card-info">
                            <div>
                                <span>Әдәбият</span>
                            </div>
                            <div>
                                <span>12 дәрес</span>
                            </div>
                        </div>
                    </div>
                    <div class="course-card">
                        <img src="/img/courses/2.png" alt="">
                        <a href="" class="course-card-button">
                            <img src="/icons/ArrowUpRight.svg" alt="">
                        </a>
                        <p class="course-card-title">Татар әдәбияты тарихы: борынгы чорлардан – яңа зама..</p>
                        <div class="course-card-info">
                            <div>
                                <span>Әдәбият</span>
                            </div>
                            <div>
                                <span>12 дәрес</span>
                            </div>
                        </div>
                    </div>
                    <div class="course-card">
                        <img src="/img/courses/3.png" alt="">
                        <a href="" class="course-card-button">
                            <img src="/icons/ArrowUpRight.svg" alt="">
                        </a>
                        <p class="course-card-title">Татар әдәбияты тарихы: борынгы чорлардан – яңа зама..</p>
                        <div class="course-card-info">
                            <div>
                                <span>Әдәбият</span>
                            </div>
                            <div>
                                <span>12 дәрес</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/" class="all-courses-button">
                    Тагын 12 мөгалимнәр арасыннан 45
                    <img src="/icons/ArrowsClockwise.svg" alt="">
                </a>
            </div>
        </div>
    </div>
{/if}

<style>
    .teacher-card {
        padding: 25px;
        border: 1px solid var(--primary-color);
        border-radius: 54px 134px 134px 54px;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }
    .teacher-info {
        max-width: 410px;
        margin-left: 17px;
    }
    .teacher-name {
        font-size: 52px;
        font-weight: 600;
    }
    .teacher-occupation {
        font-size: 18px;
        margin-top: 18px;
    }
    .teacher-photo {
        display: flex;
    }
    .teacher-photo .teacher-photo-img {
        width: 220px;
        height: 220px;
    }
    .teacher-courses {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 30px 50px;
        border: 1px solid #1A233E;
        border-radius: 220px;
        width: 220px;
        height: 220px;
        margin-left: -20px;
    }
    .teacher-courses img{
        justify-self: flex-end;
    }
    .teacher-courses-number {
        font-size: 46px;
    }
    .teacher-courses-text {
        margin-top: 5px;
        color: var(--primary-color);
    }
    .biography {
        padding-left: 42px;
        padding-right: 42px;
    }
    .biography h3 {
        font-size: 32px;
        font-weight: 600;
        margin-top: 50px;
    }
    .biography p {
        margin-top: 20px;
    }
    .biography a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--primary-color);
    }
    hr {
        margin-top: 45px;
        margin-bottom: 40px;
        margin-left: 42px;
        margin-right: 42px;
    }

    .all-courses-button {
        display: flex;
		justify-content: center;
        align-items: center;
		width: fit-content;
        border: 1px solid var(--primary-color);
        border-radius: 32px;
        padding: 18px 37px;
        font-size: 18px;
        margin-top: 45px;
        margin-left: 42px;
	}
	.all-courses-button img {
		margin-left: 80px;
		width: 20px;
	}
	.all-courses-button:hover {
        color: var(--primary-color);
		text-decoration: none;
	}


    .courses-cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 15px;
		grid-row-gap: 50px;
		margin-bottom: 50px;
        margin-top: 40px;
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
</style>