<script>
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const articlePosts = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				articlePosts (limit: 6) {
                    id
                    title
                    body
                    tags {
                        id
                        title
                    }
                    datePub
                    viewCount
                    image
                    cropping
                    croppingGrid
                    status
                }
			}
		`,
	});

    const videoPosts = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				videoPosts (limit: 6) {
                    id
                    title
                    videoLink
                    description
                    tags {
                        id
                        title
                    }
                    datePub
                    viewCount
                    status
                }
			}
		`,
	});

    const blogPartners = queryStore({
		client: getContextClient(),
		query: gql`
            query {
                blogPartners {
                    id
                    title
                    logo
                    link
                    total
                }
            }
		`,
	});

    const blogTopics = queryStore({
		client: getContextClient(),
		query: gql`
            query{
                blogTopics {
                    title
                }
            }
		`,
	});

    const randomPost = queryStore({
		client: getContextClient(),
		query: gql`
            query{
                randomPost {
                    videoPost {
                        id
                        title
                        slug
                        tags {
                            id
                            title
                        }
                        description
                        datePub
                    }
                    articlePost {
                        id
                        title
                        slug
                        body
                        tags {
                            id
                            title
                        }
                        datePub
                        image
                        cropping
                        croppingGrid
                    }
                }
            }
		`,
	});
</script>


<div class="container top-section">
    <div class="breadcrumbs">
        <a href="/">баш</a>
        <img src="/icons/CaretLeft.svg" alt="">
        <a href="">татарча фән</a>
    </div>

    {#if $randomPost.fetching}
        <p>Loading...</p>
    {:else if $randomPost.error}
        <p>Oh no... {$randomPost.error.message}</p>
    {:else if $randomPost.data.randomPost.videoPost || $randomPost.data.randomPost.articlePost}
        {#if $randomPost.data.randomPost.videoPost}
            <div class="suggestion">
                <img src="/img/blog/suggestion/1.png" alt="">
                <div class="suggestion-info">
                    <div class="suggestion-top">
                        <div class="suggestion-tags">
                            {#each $randomPost.data.randomPost.videoPost.tags.splice(0,1) as tag}
                                <div class="suggestion-tag">
                                    {tag.title}
                                </div>
                            {/each}
                            <div class="suggestion-date">
                                {$randomPost.data.randomPost.videoPost.datePub}
                            </div>
                        </div>
                        <a href={`videos/${$randomPost.data.randomPost.videoPost.id}`} class="suggestion-link">
                            <img src="/icons/ArrowUpRightWhite.svg" alt="">
                        </a>
                    </div>
                    <div class="suggestion-title">
                        <h2>{$randomPost.data.randomPost.videoPost.title}</h2>
                    </div>
                    <div class="suggestion-actions">
                        <div class="suggestion-nav-dots">
                            <div class="nav-dot nav-dot-active"></div>
                            <div class="nav-dot"></div>
                            <div class="nav-dot"></div>
                        </div>
                        <div class="suggestion-arrows">
                            <div class="suggestion-arrow">
                                <img src="/icons/CaretLeft.svg" alt="">
                            </div>
                            <div class="suggestion-arrow" style="margin-left: -10px;">
                                <img src="/icons/CaretRight.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
        {#if $randomPost.data.randomPost.articlePost}
            <div class="suggestion">
                <img src="/img/blog/suggestion/1.png" alt="">
                <div class="suggestion-info">
                    <div class="suggestion-top">
                        <div class="suggestion-tags">
                            {#each $randomPost.data.randomPost.articlePost.tags.splice(0,1) as tag}
                                <div class="suggestion-tag">
                                    {tag.title}
                                </div>
                            {/each}
                            <div class="suggestion-date">
                                {$randomPost.data.randomPost.articlePost.datePub}
                            </div>
                        </div>
                        <a href={`videos/${$randomPost.data.randomPost.articlePost.id}`} class="suggestion-link">
                            <img src="/icons/ArrowUpRightWhite.svg" alt="">
                        </a>
                    </div>
                    <div class="suggestion-title">
                        <h2>{$randomPost.data.randomPost.articlePost.title}</h2>
                    </div>
                    <div class="suggestion-actions">
                        <div class="suggestion-nav-dots">
                            <div class="nav-dot nav-dot-active"></div>
                            <div class="nav-dot"></div>
                            <div class="nav-dot"></div>
                        </div>
                        <div class="suggestion-arrows">
                            <div class="suggestion-arrow">
                                <img src="/icons/CaretLeft.svg" alt="">
                            </div>
                            <div class="suggestion-arrow" style="margin-left: -10px;">
                                <img src="/icons/CaretRight.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    {/if}

    {#if $blogTopics.fetching}
        <p>Loading...</p>
    {:else if $blogTopics.error}
        <p>Oh no... {$blogTopics.error.message}</p>
    {:else if $blogTopics.data.blogTopics.length > 0}
        <div class="themes">
            <span>темалар</span>
            <div class="themes-buttons">
                {#each $blogTopics.data.blogTopics.splice(0,7) as blogTopic}
                    <div class="theme">{blogTopic.title}</div>
                {/each}
            </div>
        </div>
    {/if}
    <div class="articles-section">
        <div class="articles-section-top">
            <h2>мәкаләләр</h2>
            <a href="/articles" class="all-articles">
                Барлык мәкаләләр
            </a>
        </div>
        {#if $articlePosts.fetching}
            <p>Loading...</p>
        {:else if $articlePosts.error}
            <p>Oh no... {$articlePosts.error.message}</p>
        {:else if $articlePosts.data.articlePosts.length > 0}
            <div class="articles">
                {#each $articlePosts.data.articlePosts as articlePost}
                    <a href={`/articles/${articlePost.id}`}  class="article">
                        <img src="/img/blog/articles/1.png" alt="">
                        <span class="article-title">
                            {articlePost.title}
                        </span>
                        {#if articlePost.body}
                            <p class="article-description">
                            <!-- <p class="article-description" contenteditable bind:innerHTML={articlePost.description}> -->
                                {`${articlePost.body.substr(0, 100)}${articlePost.body.length > 100 ? '...' : ''}`}
                            </p>
                        {/if}
                        <div class="article-tags">
                            {#each articlePost.tags as tag}
                                <div class="article-tag">{tag.title}</div>
                            {/each}
                            <div class="article-date">{articlePost.datePub}</div>
                        </div>
                    </a>
                {/each}
            </div>
        {:else}
            <p>Пока постов нет</p>
        {/if}
        <a href="/articles" class="show-all-button">
            Барлык мәкаләләр
            <img src="/icons/ArrowUpRight.svg" alt="">
        </a>
    </div>
    <div class="articles-section">
        <div class="articles-section-top">
            <h2>видео</h2>
            <a href="/videos" class="all-articles">
                Барлык видеолар
            </a>
        </div>
        {#if $videoPosts.fetching}
            <p>Loading...</p>
        {:else if $videoPosts.error}
            <p>Oh no... {$videoPosts.error.message}</p>
        {:else if $videoPosts.data.videoPosts.length > 0}
            <div class="articles">
                {#each $videoPosts.data.videoPosts as videoPost}
                    <a href={`/videos/${videoPost.id}`} class="article">
                        <img src="/img/blog/articles/1.png" alt="">
                        <a href={`/videos/${videoPost.id}`} class="video-play-button">
                            <img src="/icons/Play.svg" alt="">
                        </a>
                        <span class="article-title">
                            {videoPost.title}
                        </span>
                        {#if videoPost.description}
                        <p class="article-description">
                        <!-- <p class="article-description" contenteditable bind:innerHTML={videoPost.description}> -->
                            {`${videoPost.description.substr(0, 100)}${videoPost.description.length > 100 ? '...' : ''}`}
                        </p>
                        {/if}
                        <div class="article-tags">
                            {#each videoPost.tags as tag}
                                <div class="article-tag">{tag.title}</div>
                            {/each}
                            <div class="article-date">{videoPost.datePub}</div>
                        </div>
                    </a>
                {/each}
            </div>
        {:else}
            <p>Пока видео постов нет</p>
        {/if}
        <a href="/videos" class="show-all-button">
            Барлык видеолар
            <img src="/icons/ArrowUpRight.svg" alt="">
        </a>
    </div>

    {#if $blogPartners.fetching}
        <p>Loading...</p>
    {:else if $blogPartners.error}
        <p>Oh no... {$blogPartners.error.message}</p>
    {:else if $blogPartners.data.blogPartners.length > 0}
        <div class="section container partners">
            <h2>өстәмә белем <br> бүлеге партнерлары</h2>
            <div class="partners-carousel">
                {#each $blogPartners.data.blogPartners as blogPartner}
                    <div>
                        <img src="/img/partners/5.png" alt="">
                    </div>
                {/each}
                <!-- <div>
                    <img src="/img/partners/7.png" alt="">
                </div>
                <div>
                    <img src="/img/partners/6.png" alt="">
                </div>
                <div>
                    <img src="/img/partners/1.png" alt="">
                </div> -->
            </div>
        </div>
    {/if}
</div>

<style>
    .suggestion {
        display: flex;
        justify-content: space-between;
        border: 1px solid #E7E7E7;
        border-radius: 54px;
    }
    .suggestion-info {
        display: flex;
        flex-direction: column;
        padding: 30px 30px 30px 0;
    }
    .suggestion-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .suggestion-tags {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .suggestion-tag {
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        color: var(--primary-color);
        padding: 0 15px;
        font-size: 12px;
    }
    .suggestion-date {
        font-size: 12px;
        color: #BCBCBC;
    }
    .suggestion-link {
        display: flex;
        background-color: var(--primary-color);
        border-radius: 100px;
        padding: 13px;
        margin-left: 125px;
    }
    .suggestion-title h2{
        font-size: 40px;
        font-weight: 600;
        max-width: 300px;
    }
    .suggestion-actions {
        display: flex;
        align-items: flex-end;
    }
    .suggestion-nav-dots {
        display: flex;
        gap: 6px;
    }
    .nav-dot {
        background-color: #D9D9D9;
        width: 6px;
        height: 6px;
        border-radius: 50px;
    }
    .nav-dot-active {
        background-color: #1A233E;
    }
    .suggestion-actions {
        display: flex;
        justify-content: space-between;
    }
    .suggestion-arrows {
        display: flex;
    }
    .suggestion-arrow {
        display: flex;
        border: 1px solid #E7E7E7;
        border-radius: 100px;
        padding: 13px;
    }
    .suggestion-arrow:hover {
        cursor: pointer;
        border-color: var(--primary-color);
    }
    .themes {
        margin-top: 45px;
        display: flex;
        align-items: center;
        gap: 25px;
        background: #F7F7F5;
        border-radius: 60px;
        padding: 15px 35px;
    }
    .themes span {
        display: contents;
        color: var(--primary-color);
        font-weight: 600;
        font-size: 34px;
    }
    .themes-buttons {
        display: flex;
        align-items: center;
        gap: 25px;
    }
    .theme {
        display: flex;
        justify-content: center;
        border: 1px solid var(--primary-color);
        border-radius: 24px;
        padding: 5px 25px;
        font-size: 14px;
        min-width: 86px;
    }
    /* .theme:hover {
        cursor: pointer;
        border: 1px solid #1A233E;
        background-color: #1A233E;
        color: white;
    } */
    .articles-section {
        margin-top: 110px;
    }
    .articles-section-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .articles-section-top h2 {
        font-weight: 600;
        font-size: 52px;
    }
    .all-articles {
        border: 1px solid #911FEB;
        border-radius: 24px;
        font-size: 14px;
        padding: 10px 30px;
    }
    .all-articles:hover {
        text-decoration: none;
        color: #1A233E;
    }
    .articles {
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 45px;
    }
    .article {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        text-decoration: none;
        color: initial;
        transition: all 0.3s;
    }
    .article:hover {
        transform: scale(1.01);
    }
    .article img {
        max-width: 420px;
    }
    .article-title {
        font-weight: 600;
        font-size: 24px;
        margin-top: 20px;
    }
    .article-description {
        margin-top: 12px;
        font-size: 14px;
        color: #999999;
        line-height: 140%;
    }
    .article-tags {
        display: flex;
        gap: 10px;
    }
    .article-tag {
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        color: var(--primary-color);
        padding: 0 15px;
        line-height: 120%;
        display: flex;
        align-items: center;
    }
    .article-date {
        font-size: 12px;
        color: #BCBCBC;
    }
    .show-all-button {
        margin-top: 45px;
        display: flex;
		justify-content: center;
        align-items: center;
		width: fit-content;
        border: 1px solid var(--primary-color);
        border-radius: 32px;
        padding: 15px 35px;
        font-size: 18px;
	}
	.show-all-button img {
		margin-left: 80px;
		width: 20px;
	}
	.show-all-button:hover {
        color: var(--primary-color);
		text-decoration: none;
	}
    .video-play-button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin-top: 45px;
        margin-left: 170px;
        padding: 20px;
        border: 1px solid white;
        border-radius: 100px;
        width: 72px;
        height: 72px;
        margin-bottom: 15px;
    }
    .video-play-button img {
        margin-left: 5px;
    }

    .partners {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
        margin-top: 130px;
	}
	.partners h2 {
		font-size: 40px;
	}
    .partners-carousel {
		display: flex;
        align-items: center;
		justify-content: space-between;
		gap: 50px;
	}
</style>