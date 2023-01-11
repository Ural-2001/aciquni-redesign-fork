<script>
    import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';
    import { page } from '$app/stores';

    const id = parseInt($page.params.slug);

	const videoPost = queryStore({
		client: getContextClient(),
		query: gql`
            query ($videoPostId: ID!) {
                videoPost (videoPostId: $videoPostId) {
                    id
                    title
                    description
                    slug
                    tags {
                        id
                        title
                    }
                    videoLink
                    datePub
                    viewCount
                    status
                    comments {
                        id
                        text
                        userProfile {
                            user {
                                id
                                username
                                firstName
                                lastName
                            }
                        }
                        total
                    }
                }
            }
		`,
        variables: { videoPostId: id }
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

    let resultAddComment;
    let text;
    let client = getContextClient();
    const addComment = async () => {
        resultAddComment = await mutationStore({
            client,
            query: gql`
            mutation (
                $videoPostId: ID,
                $text: String!,
                ){
                    addBlogComment(
                        videoPostId: $videoPostId
                        text: $text
                    ) {
                        ok
                        blogComment {
                        id
                        createdAt
                        updatedAt
                        parent {
                            id
                            text
                        }
                        post {
                            id
                        }
                        video {
                            id
                            title
                        }
                        userProfile {
                            user {
                                id
                                username
                                firstName
                                lastName
                            }
                        }
                        text
                        replies {
                            text
                            userProfile {
                            user {
                                id
                                username
                                firstName
                                lastName
                            }
                            }
                        }
                        total
                        }
                        errors
                    }
                }
            `,
            variables: { videoPostId: id, text }
        });        
    };

    let resultDeleteComment;
    const deleteComment = async (commentId) => {
        resultDeleteComment = await mutationStore({
            client,
            query: gql`
            mutation ($commentId: ID!){
                deleteBlogComment(commentId: $commentId) {
                    ok
                    errors
                }
            }
            `,
            variables: { commentId }
        });        
    };
</script>

{#if $videoPost.fetching}
    <p>Loading...</p>
{:else if $videoPost.error}
    <p>Oh no... {$videoPost.error.message}</p>
{:else}
    <div class="container top-section">
        <div class="breadcrumbs">
            <a href="/">баш</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="">татарча фән</a>
            <img src="/icons/CaretLeft.svg" alt="">
            <a href="">{$videoPost.data.videoPost.title}</a>
        </div>
    </div>
    <div class="container article-tags">
        {#each $videoPost.data.videoPost.tags as tag}
            <div class="tag">{tag.title}</div>
        {/each}
        <div class="date">{$videoPost.data.videoPost.datePub}</div>
    </div>
    <div class="main-section container">
        <div class="article">
            <h1>{$videoPost.data.videoPost.title}</h1>
            <div class="actions">
                <div class="like">
                    <img src="/icons/HeartStraightGrey.svg" alt="">
                    <span>Сайланма әсәрләр</span>
                </div>
                <div class="share">
                    <img src="/icons/PaperPlaneTilt.svg" alt="">
                    <span>Уртаклашу</span>
                </div>
            </div>
            <img class="article-img" src="/img/blog/articles/1.png" alt="">
            <p>
                {$videoPost.data.videoPost.description}
            </p>
            <hr>
            <div class="article-author">
                <div style="margin-bottom: 20px;">
                    <img src="/icons/UserPurple.svg" alt="">
                    <span class="author-name">Алинә Галиева <span class="author-text">язмасы</span></span>
                </div>
                <p class="author-link">
                    Материал һәм мәгълүматлар http://kitaphane.tatarstan.ru/tat/tinch.htm, http://tatar-inform.tatar/ чыганакларыннан алынды.
                </p>
                <p class="author-link">
                    Чыганак: http://giylem.tatar/archives/2361
                </p>
            </div>
            <hr>
            <div class="comments-section">
                <h2>комментарийлар</h2>
                <div class="comment-input">
                    <div style="width: 90%;">
                        <img src="/img/people/1.png" alt="">
                        <input bind:value={text} type="text" placeholder="Сезнең комментарий">
                    </div>
                    <div class="send-comment"
                        on:click={() => {
                            addComment(text);
                            text = '';
                        }}
                    >Җибәрү</div>
                </div>
                <div class="comments">
                    {#each $videoPost.data.videoPost.comments as comment}
                        <div class="comment">
                            <div class="comment-top">
                                <div class="comment-author">
                                    <img src="/img/people/1.png" alt="">
                                    <span>{comment.userProfile.user.firstName} {comment.userProfile.user.lastName}</span>
                                </div>
                                <div class="comment-date">
                                    <span>15 сентябрь · 13: 40</span>
                                    {#if comment.userProfile.user.id === JSON.parse(localStorage.getItem('user')).user.id}
                                        <div
                                            on:click={() => {
                                                deleteComment(comment.id);
                                            }}
                                            style="cursor: pointer"
                                        >
                                            <img src="/icons/delete.png" alt="" style="width: 15px;">
                                        </div>
                                    {/if}
                                </div>
                            </div>
                            <p class="comment-text">
                                {comment.text}
                            </p>
                            <div class="show-more-comment-text">Барысын да күрсәтү</div>
                        </div>
                    {/each}
                </div>
                <a href="/" class="show-more-comments">
                    Тагын 12 мөгалимнәр арасыннан 45
                    <img src="/icons/ArrowsClockwise.svg" alt="">
                </a>
            </div>
        </div>
        <div class="suggested-articles">
            <h2>тәкъдим <br> итәбез</h2>
            <div style="display: flex; flex-direction: column; gap: 60px;">
                <!-- {#each $videoPost.data.videoPost.selectedArticles as selectedArticle}
                    <div class="suggested-article">
                        <img src="/img/blog/articles/1.png" alt="">
                        <a href="/videos/1" class="video-play-button">
                            <img src="/icons/Play.svg" alt="">
                        </a>
                        <h6 class="suggested-article-title">
                            Татар әдәбияты һәм суфичылык
                        </h6>
                        <span class="suggested-article-date">
                            2019 елның 7 ноябре
                        </span>
                    </div>
                {/each} -->
                <div class="suggested-article">
                    <img src="/img/blog/articles/1.png" alt="">
                    <h6 class="suggested-article-title">
                        Татар әдәбияты һәм суфичылык
                    </h6>
                    <span class="suggested-article-date">
                        2019 елның 7 ноябре
                    </span>
                </div>
            </div>
        </div>
    </div>
{/if}

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

<style>
    .article-tags {
        display: flex;
    }
    .article-tags {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    .tag {
        font-size: 12px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
        color: var(--primary-color);
        padding: 0 15px;
        line-height: 120%;
        display: flex;
        align-items: center;
    }
    .date {
        font-size: 12px;
        color: #BCBCBC;
    }
    .main-section {
        display: flex;
        justify-content: space-between;
        gap: 230px
    }
    .main-section {
        margin-top: 10px;
    }
    h1 {
        max-width: 740px;
    }
    .actions {
        display: flex;
        font-size: 12px;
        gap: 20px;
    }
    .like,
    .share {
        color: #999999;
    }
    .article-img {
        margin-top: 25px;
        margin-bottom: 45px;
        width: 748px;
    }
    hr {
        margin-top: 35px;
        margin-bottom: 35px;
    }
    h3 {
        font-size: 32px;
    }
    .quote {
        display: flex;
        flex-direction: column;
        padding: 45px 40px 25px 40px;
        background: #F7F7F5;
        border-radius: 20px;
        margin-top: 50px;
        margin-bottom: 40px;
    }
    .double-qoutes {
        display: flex;
        gap: 8px;
        position: absolute;
        margin-top: -61px;
    }
    .double-qoutes img {
        width: 23px;
    }
    .quote-text {
        font-size: 22px;
        font-weight: 500;
        width: 500px;
    }
    .quote-author {
        color: var(--primary-color);
        font-weight: 600;
    }
    .article-author {
    }
    .article-author img {
        width: 25px;
    }
    .author-name {
        font-size: 17px;
        color: var(--primary-color);
        font-weight: 500;
    }
    .author-text {
        font-weight: 400;
    }
    .author-link {
        color: #9A9DA8;
        font-size: 14px;
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
        display: flex;
        align-items: center;
        gap: 20px;
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
    .suggested-articles h2{
        color: #D7D7D7;
        margin-bottom: 50px;
    }
    .suggested-articles img {
        width: 312px;
    }
    .suggested-article-title {
        font-weight: 600;
        font-size: 20px;
        width: 200px;
        margin-top: 20px;
    }
    .suggested-article-date {
        font-size: 12px;
        color: #BCBCBC;
    }
    .video-play-button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin-top: -95px;
        margin-left: 120px;
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