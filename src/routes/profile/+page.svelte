<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";
    import ProfileCourses from "$lib/profile/ProfileCourses.svelte";
    import ProfileCertificates from "$lib/profile/ProfileCertificates.svelte";
    import ProfileFavourites from "$lib/profile/ProfileFavourites.svelte";
	import ProfileEdit from "$lib/profile/ProfileEdit.svelte";

    import { onMount } from 'svelte';
    import { queryStore, gql, getContextClient } from '@urql/svelte';

    let selectedPage = 'courses';
    let selectPage = (page) => {
		console.log(page);
		console.log('selectedPage');
		if (page?.detail) {
			selectedPage = page?.detail?.text;
		}
		else {
			selectedPage = page;
		}
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
</script>

<div class="container profile">
    {#if $me.fetching}
        <p>Loading...</p>
    {:else if $me.error}
        <p>Oh no... {$me.error.message}</p>
    {:else}
        <ProfileCard me={$me.data.me} selectPage={selectPage} />
        <div class="profile-content">
			{#if !$me.data.me.isActive}
				<div class="confirm">
					<p>???? ?????????????????? ?????????? ({$me.data.me.email}) ???????? ???????????????????? ???????????? ?? ???????????????????????????? <br/> <b>??????????????????????! ?????????? ?????? ?????????????? ?????????????????? ?????????? 2 ????????????</b></p>
				</div>
			{/if}
			{#if selectedPage !== 'edit'}
				<div class="profile-pages-links">
					<div on:click={() => selectPage('courses')} 
						class="profile-pages-link" class:active="{selectedPage === 'courses'}"
					>
						??????????????
					</div>
					<div on:click={() => selectPage('certificates')} 
						class="profile-pages-link" class:active="{selectedPage === 'certificates'}"
					>
						??????????????????????????
						<div class="profile-pages-links-notify">
							<span>3</span>
						</div>
					</div>
					<div on:click={() => selectPage('favourites')} 
						class="profile-pages-link" class:active="{selectedPage === 'favourites' }"
					>
						????????????????
						<div class="profile-pages-links-notify">
							<span>7</span>
						</div>
					</div>
				</div>
			{/if}
            {#if selectedPage === 'courses'}
                <ProfileCourses me={$me.data.me} />
            {:else if selectedPage === 'certificates'}
                <ProfileCertificates me={$me.data.me} />
            {:else if selectedPage === 'favourites'}
                <ProfileFavourites me={$me.data.me} />  
			{:else if selectedPage === 'edit'}
                <ProfileEdit me={$me.data.me} />
            {/if}
        </div>
    {/if}
</div>


<style>
    .profile {
        display: flex;
        gap: 130px;
    }
    .profile-content {
        width: 70%;
    }
    .profile-pages-links {
        display: flex;
        gap: 40px;
    }
    .profile-pages-link {
        display: flex;
        font-size: 40px;
        font-weight: 600;
        line-height: 100%;
        color: #CBCBCB;
    }
    .profile-pages-link.active{
        color: var(--primary-color);
    }
    .profile-pages-link.active:hover{
        color: var(--primary-color);
    }
    .profile-pages-link:hover {
        text-decoration: none;
        color: #A38BA5;
        cursor: pointer;
    }
    .profile-pages-links-notify {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 50px;
        background-color: #56B954;
        color: white;
        font-size: 11px;
        height: 16px;
        width: 16px;
    }
	.confirm {
		background-color: rgb(255, 207, 207);
		color: indianred;
		border: 2px solid indianred;
		border-radius: 20px;
		padding: 10px 20px;
		margin-bottom: 20px;
	}
	.confirm p {
		margin: 0;
	}
</style>
