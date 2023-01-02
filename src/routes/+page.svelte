<script>
	import ButtonArrowLong from '$lib/components/button/ButtonArrowLong.svelte';
	import ButtonPrimary from '$lib/components/button/ButtonPrimary.svelte';
	import ButtonSecondary from '$lib/components/button/ButtonSecondary.svelte';
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const mainPage = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				mainPage {
					firstNumber
					secondNumber
					selectedCourses {
						id
						name
						description
						shortDescription
						image
						tags
						lessonsCount
					}
					description
				}
			}
		`,
	});

	const teachers = queryStore({
		client: getContextClient(),
		query: gql`
			query ($limit: Int) {
				teachers (limit: $limit) {
					id
					firstName
					lastName
					information
					position
					imageCropped
				}
			}
		`,
		variables: { limit: 4 }
	});
	// let randomTeachers = $teachers.data.teachers

	const universityPartners = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				universityPartners {
					id
					title
					logo
					link
				}
			}
		`,
	});

	// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
	let partners = [
		{title: 'kitap', img: '/img/people/1.png'},
		{title: 'mdm', img: '/img/people/2.png'},
		{title: 'vkt', img: '/img/people/3.png'},
		{title: 'gtr', img: '/img/people/4.png'},
		{title: 'new', img: '/img/people/5.png'},
	]
</script>

<svelte:head>
	<title>AçıqUni</title>
	<meta name="description" content="AçıqUni" />
</svelte:head>

<div class="top-section">
	<div class="top">
		<div class="left-tube">
		</div>
		<div>
			<img src="./img/mainpeople.png" alt="">
		</div>
	</div>
	<div class="tatar">
		<div class="circle"></div>
		<div class="circle" style="border-color: var(--primary-color); margin-left: -30px"></div>
		<div class="action-section">
			<h1>тулысынча <span>татар</span> теле</h1>
			<div style="margin-left: 15px;">
				<ButtonArrowLong text={'Яңа онлайн курслар'} />
			</div>
		</div>
	</div>
	<div class="people">
		<div class="people-images">
			<img src="./img/people/1.png" alt="">
			<img src="./img/people/2.png" alt="">
			<img src="./img/people/3.png" alt="">
			<img src="./img/people/4.png" alt="">
			<img src="./img/people/5.png" alt="">
		</div>
		<div class="people-section">
			<h1>онлайн <span>университет</span></h1>
		</div>
	</div>
</div>

{#if $mainPage.fetching}
	<p>Loading...</p>
{:else if $mainPage.error}
	<p>Oh no... {$mainPage.error.message}</p>
{:else if $mainPage.data.mainPage.firstNumber && $mainPage.data.mainPage.secondNumber && $mainPage.data.mainPage.description}
<div class="section container description">
	<p class="description-text">
		{$mainPage.data.mainPage.description}
	</p>
	<div class="numbers">
		<div class="students">
			<p>{$mainPage.data.mainPage.firstNumber}</p>
			<span>студент белем ала</span>
			<div class="numbers-circle" style="margin-top: -90px; margin-left: 100px;"></div>
		</div>
		<div class="courses">
			<p>{$mainPage.data.mainPage.secondNumber}</p>
			<span>онлайн курслар</span>
			<div class="numbers-circle" style="margin-left: -50px;"></div>
		</div>
	</div>
</div>
{/if}

<div class="section container topics">
	<div class="topics-left">
		<h2>укыту юнәлешләре</h2>
		<div class="topics-buttons">
			<ButtonSecondary text={'Тарих'} />
			<ButtonSecondary text={'Мәдәният'} />
			<ButtonSecondary text={'Дизайн'} />
			<ButtonPrimary text={'Икътисад'} />
			<ButtonSecondary text={'Әдәбият'} />
			<ButtonSecondary text={'PR һәм реклам'} />
			<ButtonSecondary text={'Укытучылык'} />
			<ButtonSecondary text={'Актёрлык сәнгате'} />
			<ButtonSecondary text={'Дин белеме'} />
		</div>
		<div class="search">
			<input type="text" placeholder="Курслар буенча эзләү">
		</div>
	</div>
	<div>
		<img src="/img/topics-art.png" alt="">
		<div class="topics-circle">

		</div>
	</div>
</div>

{#if $mainPage.fetching}
	<p>Loading...</p>
{:else if $mainPage.error}
	<p>Oh no... {$mainPage.error.message}</p>
{:else if $mainPage.data.mainPage.selectedCourses.length > 0}
	<div class="section container courses">
		<h2>яңа онлайн курслар</h2>
			<div class="courses-cards">
				{#each $mainPage.data.mainPage.selectedCourses as course}
					<div class="course-card">
						<img src="/img/courses/1.png" alt="">
						<a href="" class="course-card-button">
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
		<a href="/" class="all-courses-button">
			Барлык курслар
			<img src="/icons/ArrowUpRight.svg" alt="">
		</a>
	</div>
{/if}

{#if $teachers.fetching}
	<p>Loading...</p>
{:else if $teachers.error}
	<p>Oh no... {$teachers.error.message}</p>
{:else if $teachers.data.teachers.length > 0}
<div class="section container teachers">
	<div class="teachers-left">
		<h2>безнең укытучылар</h2>
		<p>Бу эш иҗтимагый оешма тарафыннан башкарыла. Безнең такым яшь, белемле, креатив шәхесләрдән тора.</p>
		<a href="/" class="all-teachers-button">
			Барлык курслар
			<img src="/icons/ArrowUpRight.svg" alt="">
		</a>
	</div>
	<div class="teachers-examples">
		<div class="teachers-examples-top">
			{#each $teachers.data.teachers.slice(0,2) as teacher}
				<div class="teacher">
					<img src="/img/teachers/yoldiz.png" alt="">
					<div class="teacher-info">
						<span class="name">{teacher.firstName} <br> {teacher.lastName}</span>
						<span class="occupation">{teacher.position}</span>
					</div>
				</div>
			{/each}
		</div>
		<div class="teachers-examples-bottom">
			{#each $teachers.data.teachers.slice(2,4) as teacher}
				<div class="teacher">
					<div class="teacher-info">
						<span class="name">{teacher.firstName} <br> {teacher.lastName}</span>
						<span class="occupation">{teacher.position}</span>
					</div>
					<img src="/img/teachers/damir.png" alt="">
				</div>
			{/each}
		</div>
	</div>
</div>
{/if}

{#if $universityPartners.fetching}
	<p>Loading...</p>
{:else if $universityPartners.error}
	<p>Oh no... {$universityPartners.error.message}</p>
{:else if $universityPartners.data.universityPartners.length > 0}
	<div class="section container partners">
		<h2>университет <br> партнерлары</h2>
		<div class="partners-nav-buttons">
			<div class="partners-nav-button-left">
				<img src="/icons/CaretLeft.svg" alt="">
			</div>
			<div class="partners-nav-button-right">
				<img src="/icons/CaretRight.svg" alt="">
			</div>
		</div>
		<div class="partners-carousel">
			<!-- {#each $universityPartners.data.universityPartners as partner}
				<div>
					<img src={`${partner.logo}`} alt="">
				</div>
			{/each} -->
			<div>
				<img src="/img/partners/2.png" alt="">
			</div>
			<div>
				<img src="/img/partners/1.png" alt="">
			</div>
			<div>
				<img src="/img/partners/4.png" alt="">
			</div>
			<div>
				<img src="/img/partners/3.png" alt="">
			</div>
		</div>
		<!-- <Carousel autoplay="5000">
			{#each partners as partner, index (index)}
			<div class="parners-nav-item">
				<img src={partner.img} alt="">
			</div>
			{/each}
			<div class="parners-nav-button-left" slot="left-control">
				<img src="/icons/ArrowUpRight.svg" alt="">
			</div>
			<div class="parners-nav-button-right" slot="right-control">
				<img src="/icons/ArrowUpRight.svg" alt="">
			</div>
		</Carousel> -->
	</div>
{/if}

<style>
	.top {
		display: flex;
	}
	.section {
		margin-top: 150px;
	}
	.left-tube {
		height: 240px;
		width: 25%;
		border: 1px solid var(--primary-color);
		border-radius: 0 120px 120px 0;
		margin-right: 20px;
	}
	.tatar {
		display: flex;
		padding-left: 10%;
	}
	.circle {
		width: 135px;
		/* height: 120px; */
		border: 1px solid var(--text-color);
		border-radius: 120px;
	}
	.action-section {
		padding: 10px 50px 10px 50px;
		border: 1px solid var(--text-color);
		border-radius: 120px 0 0 120px;
		border-right: none;
		display: flex;
		align-items: center;
		margin-left: 15px;
		width: 100%;
	}
	.action-section h1 {
		font-size: 72px;
		font-weight: 700;
	}
	.action-section span {
		color: var(--primary-color);
	}
	.people {
		padding: 10px 50px 10px 50px;
		border: 1px solid var(--text-color);
		border-radius: 0 120px 120px 0;
		border-left: none;
		display: flex;
		justify-content: end;
		align-items: center;
		width: 80%;
	}
	.people-images{
		display: flex;
		gap: 15px;
		margin-right: 25px;
	}
	.people-images img{
		width: 58px;
	}
	.people-section h1 {
		font-size: 72px;
		font-weight: 700;
	}
	.people-section span {
		color: var(--primary-color);
	}
	.description {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.description-text {
		width: 628px;
	}
	.description .numbers {
		display: flex;
		gap: 65px;
	}
	.description .numbers p {
		font-size: 72px;
		margin-bottom: 35px;
	}
	.description .numbers span {
		font-size: 20px;
		color: var(--primary-color);
	}
	.numbers-circle {
		width: 120px;
		height: 120px;
		border: 1px solid var(--card-border-secondary-color);
		border-radius: 150px;
		position: absolute;
		z-index: -1;
	}
	.topics {
		display: flex;	
		justify-content: space-between;
		align-items: flex-end;
		flex-wrap: wrap;
	}
	.topics-left {
		width: 55%;
	}
	.topics h2 {
		font-size: 52px;
	}
	.topics-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		margin-top: 30px;
	}
	.topics .search input{
        border-radius: 25px;
        border: 1px solid #D3D3D3;
        padding: 8px 20px;
        background: url(/icons/MagnifyingGlass.svg) no-repeat scroll 95% 50%;
        font-size: 14px;
        width: 100%;
		margin-top: 15px;
    }
	.topics-circle {
		width: 247px;
		height: 247px;
		border: 1px solid var(--primary-color);
		border-radius: 250px;
		position: absolute;
		z-index: 1;
		margin-top: -247px; 
		margin-left: 417px;
	}
	.courses h2 {
		font-size: 52px;
	}
	.courses {
		display: flex;
		flex-direction: column;
	}
	.courses-cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-column-gap: 15px;
		grid-row-gap: 50px;
		margin-top: 30px;
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
	.teachers {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 120px;
	}
	.teachers-left {
		width: 30%;
	}
	.teachers-left h2 {
		font-size: 52px;
	}
	.teachers-left p {
		margin-top: 30px;
	}
	.all-teachers-button {
        display: flex;
		justify-content: center;
        align-items: center;
		width: fit-content;
        border: 1px solid var(--primary-color);
        border-radius: 32px;
        padding: 10px 25px;
        font-size: 14px;
		margin-top: 45px;
	}
	.all-teachers-button img {
		margin-left: 80px;
		width: 20px;
	}
	.all-teachers-button:hover {
        color: var(--primary-color);
		text-decoration: none;
	}
	.teachers-examples-top {
		display: flex;
		justify-content: space-between;
		gap: 15px;
	}
	.teachers-examples-bottom {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		margin-top: 40px;
	}
	.teacher {
		display: flex;
		align-items: center;
	}
	.teacher-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		border: 1px solid var(--primary-color);
		border-radius: 100px;
		padding: 30px 50px;
	}
	.teachers-examples-top .teacher-info{
		margin-left: -20px;
	}
	.teachers-examples-bottom .teacher-info{
		margin-right: -20px;
		z-index: 1;
	}
	.teacher-info .name {
		line-height: 24px;
	}
	.teacher-info .occupation {
		font-size: 14px;
		line-height: 16px;
		margin-top: 8px;
		color: var(--primary-color);
	}
	.partners {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
	}
	.partners h2 {
		font-size: 40px;
	}
	/* .partners-nav-item {
	} */
	
	/* .partners-nav-button-left, .partners-nav-button-right {
		display: inline-block;
		margin-top: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--primary-color);
		border-radius: 150px;
	} */

	.partners-nav-buttons {
		display: flex;
	}
	.partners-nav-button-left, .partners-nav-button-right {
		/* display: inline-block; */
		/* margin-top: 100px; */
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #E7E7E7;
		border-radius: 150px;
		padding: 18px;
	}
	.partners-nav-button-right {
		border: 1px solid var(--primary-color);
		margin-left: -10px;
	}
	.partners-nav-button-left:hover, .partners-nav-button-right:hover {
		cursor: pointer;
	}
	.partners-carousel {
		display: flex;
		justify-content: space-between;
		gap: 50px;
	}
</style>
