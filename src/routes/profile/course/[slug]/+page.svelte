<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";
    import ProfileCourseContent from "$lib/profile/course/ProfileCourseContent.svelte";
    import ProfileCourseDescription from "$lib/profile/course/ProfileCourseDescription.svelte";
    import ProfileCourseTeachers from "$lib/profile/course/ProfileCourseTeachers.svelte";

    import { onMount } from 'svelte';
    import { queryStore, gql, getContextClient } from '@urql/svelte';
    import { page } from '$app/stores';

    const id = parseInt($page.params.slug);

    let selectedPage = 'content';
    let selectPage = (page) => {
        selectedPage = page;
    };
    
    let isAuthenticated;
    onMount(() => {
        isAuthenticated = localStorage.getItem('user') ? true : false;
	});
    
    const me = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				me {
					id
					username
					firstName
					lastName
					email
					isActive
					dateJoined
					middleName
					phoneNumber
					birthDate
					activeCourses {
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
					}
					endedCourses {
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
					}
					certificates {
						id
						course {
							id
							name
                            shortDescription
						}
						file
						image
						created
					}
					savedCourses {
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
					}
					savedArticlePosts {
						id
						title
						slug
						body
						datePub
						viewCount
						image
						cropping
						croppingGrid
						status
						total
					}
					savedVideoPosts {
						id
						title
						slug
						videoLink
						tags {
							id
							title
						}
						description
						datePub
						viewCount
						status
						total
					}
				}
			}
		`,
	});

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
                        lessons {
                            id
                            name
                            link
                            text
                            userLessonStartedStatus
                        }
                        userModuleStartedStatus
                        userModuleEndedStatus
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
                    userProgress 
                }
            }
		`,
        variables: { courseId: id }
	});
    
</script>

<div class="container profile">
    {#if $me.fetching}
        <p>Loading...</p>
    {:else if $me.error}
        <p>Oh no... {$me.error.message}</p>
    {:else}
        <ProfileCard me={$me.data.me}/>
        {#if $course.fetching}
            <p>Loading...</p>
        {:else if $course.error}
            <p>Oh no... {$course.error.message}</p>
        {:else}
            <div class="profile-content">
                <h1 class="course-title">{$course.data.course.name}</h1>
                <div class="course-tags">
                    <div style="display: flex; gap: 10px">
                        <div class="course-card-tag">Укытучылык</div>
                        <div class="course-card-tag">{$course.data.course.lessonsCount} дәрес </div>
                        <div class="course-card-progress-section">
                            <div class="course-card-progress-percent">{$course.data.course.userProgress}% <span>уздым</span></div>
                            <div class="course-card-progress-back">
                                <div class="course-card-progress-front" style={`width: ${$course.data.course.userProgress}%;`}></div>
                            </div>
                        </div>
                    </div>
                    <div class="course-card-social-link">
                        <img src="/icons/social/TelegramGreyOutline.svg" alt="">
                        Телеграмм чат
                    </div>
                    <div class="course-card-social-link">
                        <img src="/icons/XCircle.svg" alt="">
                        Бетерү
                    </div>
                </div>
                <div class="course-nav">
                    <p 
                        class="profile-courses-title" 
                        class:active="{selectedPage === 'content'}"
                        on:click={() => selectPage('content')} 
                    >Курсның эчтәлеге</p>
                    <p 
                        class="profile-courses-title" 
                        class:active="{selectedPage === 'description'}"
                        on:click={() => selectPage('description')} 
                    >Курсның тасвирламасы</p>
                    <p
                        class="profile-courses-title" 
                        class:active="{selectedPage === 'teachers'}"
                        on:click={() => selectPage('teachers')} 
                    >Мөгаллимнәр</p>
                </div>
                <div class="course-sections">
                    <!-- svelte-ignore empty-block -->
                    {#if selectedPage === 'content'}
                        <ProfileCourseContent course={$course.data.course} />
                    {:else if selectedPage === 'description'}
                        <ProfileCourseDescription course={$course.data.course} />
                    {:else if selectedPage === 'teachers'}
                        <ProfileCourseTeachers course={$course.data.course} />
                    {/if}
                </div>
            </div>
        {/if}
    {/if}
</div>


<style>
    .profile {
        display: flex;
        gap: 125px;
    }
    .profile-content {
        width: 70%;
    }
    .course-title {
        font-weight: 600;
        font-size: 40px;
        color: var(--primary-color);
    }
    .course-tags {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }
    .course-card-tag {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        font-size: 12px;
    }
    .course-card-social-link {
        display: flex;
        gap: 10px;
        font-size: 12px;
        color: #B4B4B4;
    }
    .course-card-progress-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        font-size: 12px;
        gap: 10px;
    }
    .course-card-progress-percent {
        font-weight: 600;
        font-size: 12px;
    }
    .course-card-progress-percent span {
        font-weight: 400;
    }
    .course-card-progress-back {
        height: 4px;
        background-color: #E7E7E7;
        border-radius: 10px;
        width: 290px;
    }
    .course-card-progress-front {
        height: 100%;
        background-color: var(--primary-color);
        border-radius: 10px;
    }
    .profile-courses-title {
        margin-bottom: 35px;
        font-size: 18px;
        color: #999999;
    }
    .profile-courses-title:hover {
        cursor: pointer;
        color: #1A233E;
    }
    .profile-courses-title.active {
        margin-bottom: 35px;
        font-size: 18px;
        color: #1A233E;
    }
    .course-nav {
        display: flex;
        gap: 27px;
        margin-top: 40px;
    }
</style>
