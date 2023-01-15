<script>
	export let me;
</script>
{#if me.certificates.length === 0}
    <h3>У вас пока нет сертификатов(</h3>
{/if}
<div class="profile-certificates">
    {#each me.certificates as certificate}
        <div class="profile-certificate-card">
            <img src="/img/certificates/1.png" alt="">
            <div class="profile-certificate-card-content">
                <span class="profile-certificate-card-date">Сертификат · {certificate.created}</span>
                <p class="certificate-card-title">{certificate.course.name}</p>
                <p class="certificate-card-description">{certificate.course.shortDescription}</p>
                <a href={`/profile/certificate/${certificate.id}`} class="certificate-download">
                    Сертификат алу
                    <img src="/icons/DownloadWhite.svg" alt="">
                </a>
            </div>
        </div>
    {/each}
</div>

<style>
    h3 {
        margin-top: 30px;
    }
    .profile-certificates {
        display: flex;
        margin-top: 35px;
    }
    .profile-certificate-card {
        display: flex;
        gap: 25px;
        padding: 7px;
        border: 1px solid #E7E7E7;
        border-radius: 24px;
    }
    .profile-certificate-card-date {
        font-size: 12px;
        color: #B4B4B4;
    }
    .certificate-card-title {
        font-size: 18px;
    }
    .certificate-card-description {
        font-size: 12px;
        line-height: 17px;
    }
    .certificate-download {
        background-color: var(--primary-color);
        border-radius: 30px;
        color: white;
        padding: 15px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        width: fit-content;
        margin-top: 18px;
        font-size: 14px;
    }
    .certificate-download:hover {
        text-decoration: none;
    }
</style>
