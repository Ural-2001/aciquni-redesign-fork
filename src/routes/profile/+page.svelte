<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";
    import ProfileCourses from "$lib/profile/ProfileCourses.svelte";
    import ProfileCertificates from "$lib/profile/ProfileCertificates.svelte";
    import ProfileFavourites from "$lib/profile/ProfileFavourites.svelte";

    import { onMount } from 'svelte';

    let selectedPage = 'courses';
    let selectPage = (page) => {
        selectedPage = page;
    };
    // onMount(() => {
	// });
    
</script>

<div class="container profile">
    <ProfileCard />
    <div class="profile-content">
        <div class="profile-pages-links">
            <div on:click={() => selectPage('courses')} 
                class="profile-pages-link" class:active="{selectedPage === 'courses'}"
            >
                курслар
            </div>
            <div on:click={() => selectPage('certificates')} 
                class="profile-pages-link" class:active="{selectedPage === 'certificates'}"
            >
                сертификатлар
                <div class="profile-pages-links-notify">
                    <span>3</span>
                </div>
            </div>
            <div on:click={() => selectPage('favourites')} 
                class="profile-pages-link" class:active="{selectedPage === 'favourites' }"
            >
                сайланма
                <div class="profile-pages-links-notify">
                    <span>7</span>
                </div>
            </div>
        </div>
        {#if selectedPage === 'courses'}
            <ProfileCourses />
        {:else if selectedPage === 'certificates'}
            <ProfileCertificates />
        {:else if selectedPage === 'favourites'}
            <ProfileFavourites />  
        {/if}
    </div>
</div>


<style>
    .profile {
        display: flex;
        gap: 125px;
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
</style>
