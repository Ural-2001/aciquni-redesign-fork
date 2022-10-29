<script>
    import ProfileCard from "$lib/profile/ProfileCard.svelte";

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
        <h1 class="certificate-title">Котлыйбыз! Сезнең сертификат.</h1>
        <p class="certificate-course-title">Татар телен укытуда заманча һәм нәтиҗәле ысуллар</p>
        <div class="certificate">
            <div class="certificate-description">
                <div class="divider"></div>
                <p>Барлык курслар Ачык Университетның партнеры "Ачык мәктәп" ширкәте өстәмә белем бирү програмнарына кертелгән һәм лицензияләнгән. Бу сезгә әлеге курсны уңышлы узудан соң квалификацияне үстерү таныклыгын (повышение квалификации) алырга мөмкинлек бирә. Аның өчен бу биткә күчеп, анда булган форманы тутырыгыз. Әгәр ниндидер авырлыклар туа икән, безнең univer.tatar@gmail.com электрон адресыбызга языгыз.</p>
                <div class="divider" style="margin-top: 30px;"></div>
            </div>
            <div class="certificate-img-section">
                <img src="/img/certificates/1.png" alt="">
            </div>
        </div>
        <div class="certificate-actions">
            <p>Курс хакында фикерегезне калдыра аласыз. Безнең өчен бу бик мөһим, рәхмәт!</p>
            <div class="certificate-buttons">
                <a href="" class="send-advice">Фикер калдыру</a>
                <a href="" class="download">Сертификатны йөкләргә</a>
            </div>
        </div>
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
</style>
