<div class="container top-section">
    <div class="breadcrumbs">
        <a href="/">баш</a>
        <img src="/icons/CaretLeft.svg" alt="">
        <a href="">мөгалимнәр</a>
    </div>
    <h2 class="page-title">мөгалимнәр</h2>    
</div>
<div class="filter-section container">
    <div class="subjects">
        <div class="subject">
            Барча
        </div>
        <div class="subject">
            Барча
        </div>
        <div class="subject">
            Барча
        </div>
        <div class="subject">
            Барча
        </div>
        <div class="subject">
            Барча
        </div>
        <div class="subject">
            Барча
        </div>
    </div>
    <div class="search">
        <input type="text" 
        style="background: url(/icons/MagnifyingGlass.svg) no-repeat scroll 95% 50%;"
        placeholder="Мөгалимнәр буенча эзләү">
    </div>
</div>
<div class="container">
    <div class="teachers">
        <a href="/teachers/1" class="teacher">
            <img src="/img/teachers/yoldiz.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </a>
        <div class="teacher">
            <img src="/img/teachers/halisa.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
        <div class="teacher">
            <img src="/img/teachers/fayaz.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
        <div class="teacher">
            <img src="/img/teachers/damir.png" alt="">
            <div class="teacher-info">
                <span class="name">Йолдыз <br> Миңнуллина</span>
                <span class="occupation">шагыйрә, "Ялкын" журналында эшли.</span>
            </div>
        </div>
    </div>
    <a href="/" class="all-courses-button">
        Тагын 12 мөгалимнәр арасыннан 45
        <img src="/icons/ArrowsClockwise.svg" alt="">
    </a>
</div>
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
        <div class="course-foryou-card">
            <div>
                <img src="/img/courses/course3.png" alt="">
                <a href="" class="course-foryou-card-button">
                    <img src="/icons/ArrowUpRight.svg" alt="">
                </a>
            </div>
            <div class="course-foryou-card-right">
                <p class="course-foryou-card-title">Татар әдәбияты тарихы: яңа заман әдәбияты</p>
                <div class="course-foryou-card-info">
                    <div>
                        <span>Әдәбият</span>
                    </div>
                    <div>
                        <span>12 дәрес</span>
                    </div>
                </div>
            </div>
		</div>
        <div class="course-foryou-card">
            <div>
                <img src="/img/courses/course1.png" alt="">
                <a href="" class="course-foryou-card-button">
                    <img src="/icons/ArrowUpRight.svg" alt="">
                </a>
            </div>
            <div class="course-foryou-card-right">
                <p class="course-foryou-card-title">Татар әдәбияты тарихы: яңа заман әдәбияты</p>
                <div class="course-foryou-card-info">
                    <div>
                        <span>Әдәбият</span>
                    </div>
                    <div>
                        <span>12 дәрес</span>
                    </div>
                </div>
            </div>
		</div>
        <div class="course-foryou-card">
            <div>
                <img src="/img/courses/course2.png" alt="">
                <a href="" class="course-foryou-card-button">
                    <img src="/icons/ArrowUpRight.svg" alt="">
                </a>
            </div>
            <div class="course-foryou-card-right">
                <p class="course-foryou-card-title">Татар әдәбияты тарихы: яңа заман әдәбияты</p>
                <div class="course-foryou-card-info">
                    <div>
                        <span>Әдәбият</span>
                    </div>
                    <div>
                        <span>12 дәрес</span>
                    </div>
                </div>
            </div>
		</div>
    </div>
</div>

<style>
    .top-section {
        margin-bottom: 30px;
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
    .subjects {
        display: flex;
        gap: 15px;
    }
    .subject {
        padding: 5px 25px;
        border: 1px solid var(--primary-color);
        border-radius: 100px;
        width: fit-content;
        font-size: 14px;
    }
    .subject:hover {
        cursor: pointer;
        border-color: #1A233E;
        background-color: #1A233E;
        color: white;
    }
    .search {
        margin-top: 15px;
    }
    .search input{
        border-radius: 25px;
        border: 1px solid #D3D3D3;
        padding: 8px 20px;
        font-size: 14px;
        width: 350px;
    }
    .teachers {
		margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 40px;
	}
    .teacher {
		display: flex;
		align-items: center;
	}
    .teacher:hover {
		text-decoration: none;
        color: var(--primary-color);
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
	.teachers .teacher-info{
		margin-left: -20px;
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
    .show-all-categories {
        color: var(--primary-color);
        cursor: pointer;
        font-size: 11px;
        margin-top: -5px;
    }
    .show-all-categories:hover {
        text-decoration: underline;
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
	}
	.all-courses-button img {
		margin-left: 80px;
		width: 20px;
	}
	.all-courses-button:hover {
        color: var(--primary-color);
		text-decoration: none;
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