<div class="lesson">
    <div class="presentation">
        <img class="presentation-slide-img" src="/img/lesson/3.png" alt="">
        <div class="presentation-nav">
            <div class="presentation-left">
                <img src="/icons/CaretLeft.svg" alt="">
            </div>
            <div class="presentation-nav-slides">
                <div class="presentation-nav-slide active">
                    <img src="/img/lesson/3.png" alt="">
                </div>
                <div class="presentation-nav-slide">
                    <img src="/img/lesson/3.png" alt="">
                </div>
                <div class="presentation-nav-slide">
                    <img src="/img/lesson/3.png" alt="">
                </div>
                <div class="presentation-nav-slide">
                    <img src="/img/lesson/3.png" alt="">
                </div>
                <div class="presentation-nav-slide">
                    <img src="/img/lesson/3.png" alt="">
                </div>
                <div class="presentation-nav-slide">
                    <img src="/img/lesson/3.png" alt="">
                </div>
                <div class="presentation-nav-slide">
                    <img src="/img/lesson/3.png" alt="">
                </div>
            </div>
            <div class="presentation-right">
                <img src="/icons/CaretRightWhite.svg" alt="">
            </div>
        </div>
    </div>
    <div class="lesson-materials-section">
        <h2>дәрес материаллары</h2>
        <div class="lesson-materials">
            <div class="lesson-material">
                <div class="lesson-material-info-section">
                    <img src="/icons/Note.svg" alt="">
                    <div class="lesson-material-info">
                        <p class="lesson-material-title">Өстәмә материаллар бүлегендә урнаштыру өчен кулланма</p>
                        <p class="lesson-material-file-size">Файл PDF  ·  156 kb</p>
                    </div>
                </div>
                <a href="" class="download-button">
                    <img src="/icons/DownloadWhite.svg" alt="">
                </a>
            </div> 
            <div class="lesson-material">
                <div class="lesson-material-info-section">
                    <img src="/icons/Note.svg" alt="">
                    <div class="lesson-material-info">
                        <p class="lesson-material-title">Өстәмә материаллар бүлегендә урнаштыру өчен кулланма</p>
                        <p class="lesson-material-file-size">Файл PDF  ·  156 kb</p>
                    </div>
                </div>
                <a href="" class="download-button">
                    <img src="/icons/DownloadWhite.svg" alt="">
                </a>
            </div>                
        </div>
    </div>
    <div class="comments-section">
        <h2>комментарийлар</h2>
        <div class="comment-input">
            <div style="width: 90%;">
                <img src="/img/people/1.png" alt="">
                <input type="text" placeholder="Сезнең комментарий">
            </div>
            <div class="send-comment">Җибәрү</div>
        </div>
        <div class="comments">
            <div class="comment">
                <div class="comment-top">
                    <div class="comment-author">
                        <img src="/img/people/1.png" alt="">
                        <span>Сергей Рейдер</span>
                    </div>
                    <div class="comment-date">
                        <span>15 сентябрь · 13: 40</span>
                    </div>
                </div>
                <p class="comment-text">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the...
                </p>
                <div class="show-more-comment-text">Барысын да күрсәтү</div>
            </div>
            <div class="comment">
                <div class="comment-top">
                    <div class="comment-author">
                        <img src="/img/people/2.png" alt="">
                        <span>Анна Гребенник</span>
                    </div>
                    <div class="comment-date">
                        <span>15 сентябрь · 13: 40</span>
                    </div>
                </div>
                <p class="comment-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 👍😭🔥
                </p>
            </div>
        </div>
        <a href="/" class="show-more-comments">
            Тагын 12 мөгалимнәр арасыннан 45
            <img src="/icons/ArrowsClockwise.svg" alt="">
        </a>
    </div>
</div>

<style>
    .presentation {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 13px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .presentation-slide-img {
        border-radius: 8px;
    }
    .presentation-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .presentation-left,
    .presentation-right {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 24px;
        cursor: pointer;
    }
    .presentation-left {
        background-color: #F3F3F3;
    }
    .presentation-right {
        background-color: var(--primary-color);
    }
    .presentation-nav-slides {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .presentation-nav-slide {
        padding: 4px;
        border: 2px solid #E7E7E7;
        cursor: pointer;
        border-radius: 8px;
    }
    .presentation-nav-slide img{
        width: 54px;
    }
    .presentation-nav-slide.active,
    .presentation-nav-slide:hover {
        border-color: var(--primary-color);
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
</style>
