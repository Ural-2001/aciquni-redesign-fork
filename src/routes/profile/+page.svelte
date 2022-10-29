<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";
    import ProfileCourses from "$lib/profile/ProfileCourses.svelte";
    import ProfileCertificates from "$lib/profile/ProfileCertificates.svelte";
</script>

<div class="container profile">
    <ProfileCard />
    <div class="profile-content">
        <div class="profile-pages-links">
            <a href="" class="profile-pages-link active">курслар</a>
            <a href="" class="profile-pages-link">
                сертификатлар
                <div class="profile-pages-links-notify">
                    <span>3</span>
                </div>
            </a>
            <a href="" class="profile-pages-link">
                сайланма
                <div class="profile-pages-links-notify">
                    <span>7</span>
                </div>
            </a>
        </div>
        <ProfileCourses />
        <ProfileCertificates />
    </div>
</div>


<style>
    .profile {
        display: flex;
        gap: 125px;
    }
    .profile-content {
        widows: 70%;
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
    .profile-courses {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
    }
    .profile-courses-title {
        margin-bottom: 35px;
        font-size: 18px;
    }
    .profile-active-courses {
        display: flex;
        flex-direction: column;
        gap: 45px;
    }
    .profile-active-course-card {
        display: flex;
        gap: 20px;
    }
    .course-card-img {
        display: flex;
    }
    .course-card-img img {
        width: 218px;
        height: 130px;
        border-radius: 65px;
    }
    .course-card-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        border: 1px solid var(--primary-color);
        border-radius: 50px;
        margin-left: -20px;
    }
    .course-card-link img {
        width: 24px;
    }
    .profile-active-course-card-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .course-card-title {
        margin: 0;
    }
    .course-card-status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
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
    .course-card-content-links {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .course-card-content-links.done {
        gap: 10px;
    }
    .course-card-resume-button {
        font-size: 14px;
        background-color: var(--primary-color);
        border-radius: 24px;
        padding: 10px 15px 10px 25px;
        display: flex;
        color: white;
        gap: 25px;
    }
    .course-card-resume-button-info {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        background-color: white;
        border-radius: 24px;
        color: var(--primary-color);
    }
    .course-card-resume-button:hover {
        text-decoration: none;
    }
    .course-card-social-link {
        display: flex;
        gap: 10px;
        font-size: 12px;
        color: #B4B4B4;
    }
    .course-finished {
        border-color: #56B954;
    }
    .course-card-review-button {
        font-size: 14px;
        background-color: var(--primary-color);
        border-radius: 24px;
        padding: 10px 25px 10px 25px;
        display: flex;
        color: white;
        gap: 25px; 
    }
    .course-card-certificate-button {
        font-size: 14px;
        background-color: transparent;
        border: 1px solid var(--primary-color);
        border-radius: 24px;
        padding: 10px 25px 10px 25px;
        display: flex;
        gap: 25px; 
        color: #1A233E;
    }
    .course-card-review-button.done {
        font-size: 14px;
        background-color: transparent;
        border: 1px solid var(--primary-color);
        border-radius: 24px;
        padding: 10px 25px 10px 25px;
        display: flex;
        color: #1A233E;
    }
    .course-card-review-button:hover {
        text-decoration: none;
    }
</style>
