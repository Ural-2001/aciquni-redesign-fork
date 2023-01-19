<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";
    import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
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

	let closePopup;
    let openPopup;
	onMount(() => {
        let popup = document.getElementById('commentPopup');
        let popupBackground = document.getElementById('popupBackground');

		closePopup = () => {
			popup.style.display = 'none';
            popup.style.opacity = '0';
			popupBackground.style.display = 'none';
        };

        openPopup = () => {
			popupBackground.style.display = 'block';
			popup.style.display = 'flex';
			popup.style.opacity = '100%';
        };
	});

	let text = '';
	let courseId;
	let resultFeedback;
	let client = getContextClient();
	let resultMessage;
	let isFeedbackSent = false;
    const addCourseFeedback = () => {
        resultFeedback = mutationStore({
            client,
            query: gql`
				mutation ($courseId: ID!, $text: String!) {
					addCourseFeedback (courseId: $courseId, text: $text) {
						ok
						errors
					}
				}
            `,
            variables: { courseId, text }
        });
		isFeedbackSent = !isFeedbackSent;
		// resultMessage = $resultFeedback.data.ok ? 'Спасибо! Ваш отзыв отправлен' : 'Ошибка :(';
    };
    
</script>

<div class="popup" id="commentPopup">
    <div class="popup-section">
        <div style="width: 100%;">
            <div class="login-header">
                <div class="login-links">  
                    <span class="selected">Фикер калдыру</span>
                </div>
				<p class="popup-description">Узган курс турында сезнең фикерегезне калдырыгыз</p>
            </div>
			{#if isFeedbackSent}
				<form class="login-form">
					<p>Спасибо! Ваш отзыв отправлен</p>
					<div class="popup-bottom">
						<button 
							on:click|preventDefault={() => {
								closePopup();
								isFeedbackSent = !isFeedbackSent;
							}}
						type="submit" class="button submit-button">
							ОК
						</button>
					</div>
				</form>
			{:else}
				<form class="login-form">
					<div class="form-input">
						<div class="form-input-field">
							<label for="name">Фикерегез</label>
							<textarea bind:value={text} type="text" id="name" placeholder="Александр" />
						</div>
					</div>
					<div class="popup-bottom">
						<button 
							on:click|preventDefault={() => {
								addCourseFeedback()
							}}
						type="submit" class="button submit-button">
							Фикерне җибәрергә
							<img src="/icons/ArrowUpRightWhite.svg" alt="">
						</button>
					</div>
				</form>
			{/if}
        </div> 
        <div>
            <button class="button-secondary close-button" on:click={closePopup}>
                <img src="/icons/x.svg" alt="">
            </button>
        </div>
    </div>
</div>

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
                        <div class="send-advice" on:click={() => {
							openPopup();
							courseId = parseInt($certificate.data.certificate.course.id);
						}}>Фикер калдыру</div>
                        <a href={`https://univer.tatar/media/${$certificate.data.certificate.file}`} target="_blank" download class="download">Сертификатны йөкләргә</a>
                    </div>
                </div>
            </div>
        {/if}
    {/if}
</div>


<style>
	.popup-description {
		font-size: 16px;
	}
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

	.popup {
        display: none;
        opacity: 0;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        background-color: white;
        border: 1px solid var(--text-tertiary-color);
        border-radius: 24px;
        padding: 40px 30px 50px 80px;

        transition: all cubic-bezier(0.22, 0.61, 0.36, 1) 0.2s;
        -webkit-transition: all ease 0.2s;
        -moz-transition: all ease 0.2s;
        -ms-transition: all ease 0.2s;
        -o-transition: all ease 0.2s;
    }
    .popup-section {
        display: flex;
        position: fixed;
        top: 50%;
        left: 50%;
		width: 800px;
        transform: translate(-50%, -50%);
        z-index: 2;
        background-color: white;
        border: 1px solid var(--text-tertiary-color);
        border-radius: 24px;
        padding: 40px 30px 50px 80px;
    }

    .login-header {
        font-size: 40px;
        color: var(--text-color);
        margin-bottom: 40px;
        line-height: initial;
    }

    .login-links span {
        color: #B4B4B4;
    }

    .login-links span:hover {
        cursor: pointer;
        color: #1A233E;
    }

    .login-links span.selected {
        color: #1A233E;
    }

    label {
        color: #B4B4B4;
    }

    .form-input{
        display: flex;
        justify-content: space-between;
        border-radius: 25px;
        border: 1px solid var(--text-tertiary-color);
        padding: 8px 20px;
        /* background: url(./MagnifyingGlass.svg) no-repeat scroll 95% 50%; */
        font-size: 14px;
        margin-bottom: 15px;
    }
    .form-input-field {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .form-input-field label {
        font-size: 12px;
        margin-top: -5px;
    }
    .form-input-field textarea{
        border: none;
        font-size: 16px;
        padding: 0;
        margin-top: -5px;
    }

    .close-button {
        border: none;
        padding: 12px;
        background-color: #f7f7f5;
    }

    .submit-button {
        padding: 15px 25px 15px 30px;
        font-size: 18px;
    }
    .submit-button img {
        margin-left: 40px;
    }

    .forgot-password {
        font-size: 12px;
        color: var(--primary-color);
    }
    .forgot-password:hover {
        cursor: pointer;
    }

    .popup-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .check-terms {
        display: flex;
        font-size: 11px;
        color: #B4B4B4;
        margin-bottom: 30px;
        margin-top: 30px;
    }
    .check-terms input{
        margin-right: 10px;
    }
</style>
