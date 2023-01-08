<script>
    import { onMount } from 'svelte';

    export let lesson;

    let openPlayer;
    let isPlayerOpened = false;

    // onMount(() => {
    //     openPlayer =
	// });
</script>

<div class="lesson-video">
    {#if !isPlayerOpened}
        <a href="" on:click={() => isPlayerOpened = !isPlayerOpened} class="lesson-video-play-btn">
            <div class="lesson-video-play-btn-img">
                <img src="/icons/Play.svg" alt="">
            </div>
            <div class="lesson-video-play-btn-text">
                <p>дәресне <br> карый <br> башларга</p>
                <div class="lesson-video-play-btn-duration">
                    <img src="/icons/ClockWhite.svg" alt="">
                    {lesson.time}
                </div>
            </div>
        </a>
        <img src="/img/lesson/1.png" alt="">
    {:else}
        <iframe 
            class="player"
            height="400"
            src={lesson.link}
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    {/if}
</div>

<style>
    .lesson-page {
        display: flex;
        justify-content: space-between;
        gap: 125px;
    }
    .lesson {
        width: 65%;
    }
    h1 {
        font-size: 30px;
        font-weight: 600;
        margin: 0;
    }
    .lesson-info {
        color: #B4B4B4;
        font-size: 12px;
        margin: 0;
    }
    .lesson-nav {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-top: 25px;
    }
    .lesson-left {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 13px 40px 15px 20px;
        border: 1px solid var(--primary-color);
        border-radius: 50px;
        cursor: pointer;
    }
    .lesson-right {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 13px 20px 15px 40px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50px;
        cursor: pointer;
    }
    .lesson-lessons {
        display: flex;
        gap: 10px;
    }
    .lesson-number {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        width: 40px;
        cursor: pointer;
    }
    .lesson-number img{
        width: 16px;
    }
    .lesson-number.finished {
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .lesson-number.active {
        font-size: 12px;
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color);
        color: white;
    }
    .lesson-number.test {
        padding: 0 25px;
    }
    .lesson-video {
        margin-top: 25px;
    }
    .lesson-video-play-btn {
        background: #911FEB;
        opacity: 0.8;
        padding: 35px 60px 35px 35px;
        border-radius: 200px;
        color: white;
        position: absolute;
        display: flex;
        align-items: center;
        gap: 35px;
        margin-left: 250px;
        margin-top: 140px;
        text-decoration: none;
    }
    .lesson-video-play-btn-img {
        padding: 40px 40px;
        border: 1px solid white;
        border-radius: 200px;
    }
    .lesson-video-play-btn-img img{
        width: 35px;
        margin-left: 5px;
    }
    .lesson-video-play-btn-text {
        font-size: 22px;
        font-weight: 600;
    }
    .lesson-video-play-btn-text p {
        margin-bottom: 12px;
    }
    .lesson-video-play-btn-duration {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 12px;
    }
    .lesson-materials-section {
        margin-top: 50px;
    }
    .lesson-materials {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .lesson-material {
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 18px;
    }
    .lesson-material-info-section {
        display: flex;
        gap: 15px;
    }
    .lesson-material-info {
        display: flex;
        flex-direction: column;
    }
    .lesson-material-info p{
        margin: 0;
        line-height: 20px;
    }
    .lesson-material-title {
        font-size: 16px;
        font-weight: 500;
    }
    .lesson-material-file-size {
        font-size: 12px;
        color: #B4B4B4;
    }
    .download-button {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
        border-radius: 50px;
    }
    .comments-section {
        margin-top: 50px;
    }
    .comments-section h2{
        font-size: 32px;
    }
    .comment-input {
        border: 1px solid #E7E7E7;
        border-radius: 30px;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .comment-input div {
        display: flex;
        align-items: center;
    }
    .comment-input img {
        width: 48px;
    }
    .comment-input input {
        border: none;
        margin-left: 20px;
        font-size: 16px;
        width: inherit;
    }
    .comment-input input:focus {
        outline: none;
    }
    .send-comment {
        background: var(--primary-color);
        border-radius: 24px;
        color: white;
        padding: 10px 25px;
        font-size: 14px;
    }
    .send-comment:hover {
        cursor: pointer;
    }
    .comments {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .comment {
        display: flex;
        border-radius: 20px;
        background-color: #F7F7F5;
        display: flex;
        flex-direction: column;
        padding: 25px 30px;
    }
    .comment-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .comment-top img{
        width: 28px;
    }
    .comment-author{
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-weight: 600;
    }
    .comment-date{
        font-size: 12px;
        color: #9A9DA8;
    }
    .comment-text {
        margin-top: 12px;
        font-size: 16px;
        line-height: 140%;
        margin-bottom: 0px;
    }
    .show-more-comment-text {
        font-size: 12px;
        color: var(--primary-color);
        margin-top: 5px;
    }
    .show-more-comment-text:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .show-more-comments {
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
	.show-more-comments img {
		margin-left: 80px;
		width: 20px;
	}
	.show-more-comments:hover {
        color: var(--primary-color);
		text-decoration: none;
	}
    .player {
        width: 100%;
        border-radius: 20px;
    }
</style>
