<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";
    import { queryStore, gql, getContextClient } from '@urql/svelte';
    import { page } from '$app/stores';
    // import { API_URL } from '$env/static/private'
    // import { API_URL } from '$env/static/public'


    const id = parseInt($page.params.slug);

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
						getUserLastLesson  {
							id
							queueNumber
							module {
								id
								queueNumber
							}
						}
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

    const certificate = queryStore({
		client: getContextClient(),
		query: gql`
			query ($certificateId: ID!){
				certificate (certificateId: $certificateId) {
                    id
                    course {
                        id
                        name
                        shortDescription
                        description
                    }
                    file
                    image
                    created
                }
			}
		`,
        variables: { certificateId: id }
	});
    
</script>

<div class="container profile">
    {#if $me.fetching}
        <p>Loading...</p>
    {:else if $me.error}
        <p>Oh no... {$me.error.message}</p>
    {:else}
        <ProfileCard me={$me.data.me} />
        {#if $certificate.fetching}
            <p>Loading...</p>
        {:else if $certificate.error}
            <p>Oh no... {$certificate.error.message}</p>
        {:else}
            <div class="profile-content">
                <h1 class="certificate-title">Котлыйбыз! Сезнең сертификат.</h1>
                <p class="certificate-course-title">{$certificate.data.certificate.course.name}</p>
                <div class="certificate">
                    <div class="certificate-description">
                        <div class="divider"></div>
                        <p contenteditable bind:innerHTML={$certificate.data.certificate.course.description}>
                        </p>
                        <div class="divider" style="margin-top: 30px;"></div>
                    </div>
                    <div class="certificate-img-section">
                        <img src="/img/certificates/1.png" alt="">
                    </div>
                </div>
                <div class="certificate-actions">
                    <p>Курс хакында фикерегезне калдыра аласыз. Безнең өчен бу бик мөһим, рәхмәт!</p>
                    <div class="certificate-buttons">
                        <a href="" class="send-advice">Фикер калдыру</a>
                        <a href={`https://univer.tatar/media/${$certificate.data.certificate.file}`} target="_blank" download class="download">Сертификатны йөкләргә</a>
                    </div>
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
    .certificate {
        display: flex;
        gap: 75px;
    }
    .certificate-description p {
        font-size: 16px;
        line-height: 25px;
    }
    .certificate-img-section img{
        width: 478px;
        height: 330px;
    }
    .certificate-title {
        font-weight: 600;
        font-size: 40px;
        color: var(--primary-color);
    }
    .certificate-course-title {
        font-weight: 600;
        font-size: 18px;
    }
    .divider {
        width: 110px;
        height: 2px;
        background-color: var(--primary-color);
        margin-bottom: 20px;
    }
    .certificate-actions {
        display: flex;
        gap: 75px;
        align-items: flex-start;
    }
    .certificate-actions p {
        font-size: 16px;
        font-weight: 600;
        max-width: 300px;
        line-height: 22px;
    }
    .certificate-buttons {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
    }
    .send-advice {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
        background-color: var(--primary-color);
        padding: 10px 25px;
        color: white;
    }
    .download {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
        border: 1px solid var(--primary-color);
        padding: 10px 25px;
    }
    .send-advice:hover {
        text-decoration: none;
    }
    .download:hover {
        text-decoration: none;
        color: initial;
    }
</style>
