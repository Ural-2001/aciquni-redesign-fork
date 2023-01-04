<script>
	import { queryStore, gql, getContextClient } from '@urql/svelte';

    const videoPosts = queryStore({
		client: getContextClient(),
		query: gql`
            query {
                videoPosts {
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
                    comments {
                        id
                        text
                        replies {
                            id
                            text
                        }
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
        <img src="/icons/CaretLeft.svg" alt="">
        <a href="">видео</a>
    </div>
    <h1>видео</h1>
    <div class="themes">
        <div class="theme active">Барча</div>
        <div class="theme">Тарих</div>
        <div class="theme">Музыка</div>
        <div class="theme">Тел</div>
        <div class="theme">Әдәбият</div>
        <div class="theme">Ислам</div>
        <div class="theme">Тәрбия</div>
        <div class="theme">Кием</div>
        <div class="theme">Фольклор</div>
        <div class="theme">Театр</div>
    </div>
    {#if $videoPosts.fetching}
        <p>Loading...</p>
    {:else if $videoPosts.error}
        <p>Oh no... {$videoPosts.error.message}</p>
    {:else if $videoPosts.data.videoPosts.length > 0}
        <div class="articles-section">
            <div class="articles">
                {#each $videoPosts.data.videoPosts as videoPost}
                    <a href={`/videos/{videoPost.id}`} class="article">
                        <img src="/img/blog/articles/1.png" alt="">
                        <a href="/videos/1" class="video-play-button">
                            <img src="/icons/Play.svg" alt="">
                        </a>
                        <span class="article-title">
                            {videoPost.title}
                        </span>
                        <p class="article-description">
                            {videoPost.description}
                        </p>
                        <div class="article-tags">
                            {#each videoPost.tags as tag}
                                <div class="article-tag">{tag.title}</div>
                            {/each}
                            <div class="article-date"> {videoPost.datePub}</div>
                        </div>
                    </a>
                {/each}
                <div class="article">
                    <img src="/img/blog/articles/1.png" alt="">
                    <a href="/videos/1" class="video-play-button">
                        <img src="/icons/Play.svg" alt="">
                    </a>
                    <span class="article-title">
                        Татар әдәбияты һәм суфичылык
                    </span>
                    <p class="article-description">
                        Идеологик күренеш буларак, суфичылык VIII гасырларда гарәп дөньясында туа һәм IX-XII йөзләр...
                    </p>
                    <div class="article-tags">
                        <div class="article-tag">Тәрбия</div>
                        <div class="article-tag">Тел</div>
                        <div class="article-date">2019 елның 7 ноябре</div>
                    </div>
                </div>
            </div>
            <div class="pagination">
                <a href="/" class="show-all-button">
                    Тагын 9 курс арасыннан 154
                    <img src="/icons/ArrowsClockwise.svg" alt="">
                </a>
                <div class="pagination-numbers">
                    <div class="pagination-number">1</div>
                    <div class="pagination-number active">2</div>
                    <div class="pagination-number">3</div>
                    <div class="pagination-number">4</div>
                </div>
            </div>
        </div>
    {/if}
    <div class="section container partners">
        <h2>өстәмә белем <br> бүлеге партнерлары</h2>
        <div class="partners-carousel">
            <div>
                <img src="/img/partners/5.png" alt="">
            </div>
            <div>
                <img src="/img/partners/7.png" alt="">
            </div>
            <div>
                <img src="/img/partners/6.png" alt="">
            </div>
            <div>
                <img src="/img/partners/1.png" alt="">
            </div>
        </div>
    </div>
</div>

<style>
    h1 {
        font-weight: 600;
        font-size: 52px;
    }
    .themes {
        margin-top: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        border-radius: 60px;
    }
    .themes {
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
    .theme.active {
        border: 1px solid #1A233E;
        background-color: #1A233E;
        color: white;
    }
    .theme:hover {
        cursor: pointer;
        border: 1px solid #1A233E;
        background-color: #1A233E;
        color: white;
    }
    .articles-section {
        margin-top: 40px;
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
    .pagination {
        margin-top: 45px;
        display: flex;
        align-items: center;
    }
    .pagination-numbers {
        display: flex;
        gap: 15px;
        margin-left: 15px;
    }
    .pagination-number {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        width: 48px;
        font-size: 16px;
        border: 1px solid #E7E7E7;
        border-radius: 124px;
    }
    .pagination-number:hover {
        cursor: pointer;
        border-color: var(--primary-color);
    }
    .pagination-number.active {
        border-color: var(--primary-color);
    }
    .show-all-button {
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