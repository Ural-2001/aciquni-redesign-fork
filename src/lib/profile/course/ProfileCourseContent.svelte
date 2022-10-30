<script>
    import { onMount } from 'svelte';
    
    let openAccordion;
    onMount(() => {
        let acc = document.getElementsByClassName("course-module-button");

        openAccordion = (number) => {
            acc[number].classList.toggle("active");
            let panel = acc[number].nextElementSibling;
            if (panel.style.display === "flex") {
                panel.style.display = "none";
            } else {
                panel.style.display = "flex";
            }
        }
	});
</script>

<div class="course-modules">
    <div class="course-module">
        <div on:click={() => openAccordion(0)} class="course-module-button">
            <img class="course-module-finished-icon" src="/icons/CheckCircleWhite.svg" alt="">
            <span>Беренче модуль</span>
            <div class="course-module-info">
                <div class="course-module-info-lessons">
                    6 дәрес · 1 сәг 15 мин
                </div>
                <div class="course-module-info-progress">
                    78/90 балл
                </div>
            </div>
        </div>
        <div class="course-module-content">
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-finished-time">
                    <img src="/icons/CheckCircleWhite.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда телгә</p>
                </div>
                <div class="course-module-lesson-unfinished">
                    <p>Дәвам итәргә</p>
                    <div class="course-module-lesson-unfinished-time">
                        <p>24 мин</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-not-started">
                    <img src="/icons/ClockGrey.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-not-started">
                    <img src="/icons/ClockGrey.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
        </div>
    </div>
    <div class="course-module">
        <div on:click={() => openAccordion(1)} class="course-module-button">Икенче модуль</div>
        <div class="course-module-content">
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-finished-time">
                    <img src="/icons/CheckCircleWhite.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда телгә</p>
                </div>
                <div class="course-module-lesson-unfinished">
                    <p>Дәвам итәргә</p>
                    <div class="course-module-lesson-unfinished-time">
                        <p>24 мин</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-not-started">
                    <img src="/icons/ClockGrey.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-not-started">
                    <img src="/icons/ClockGrey.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
        </div>
    </div>
    <div class="course-module">
        <div on:click={() => openAccordion(2)} class="course-module-button">Өченче модуль</div>
        <div class="course-module-content">
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-finished-time">
                    <img src="/icons/CheckCircleWhite.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда телгә</p>
                </div>
                <div class="course-module-lesson-unfinished">
                    <p>Дәвам итәргә</p>
                    <div class="course-module-lesson-unfinished-time">
                        <p>24 мин</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-not-started">
                    <img src="/icons/ClockGrey.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
            <hr>
            <div class="course-module-lesson">
                <div class="course-module-lesson-text">
                    <img src="/icons/Note.svg" alt="">
                    <p>Инглиз телен укытуда балаларда</p>
                </div>
                <div class="course-module-lesson-not-started">
                    <img src="/icons/ClockGrey.svg" alt="">
                    <p>15 мин</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .course-module {
        border: 1px solid #D4D4D4;
        border-radius: 24px;
        padding: 30px 40px;
    }
    .course-module-button {
        border: none;
        border-radius: 24px;
        background-color: transparent;
        cursor: pointer;
        font-weight: 600;
        font-size: 22px;
        width: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .course-module-info {
        display: flex;
        gap: 10px;
    }
    .course-module-info-lessons {
        font-size: 12px;
        border: 1px solid #E7E7E7;
        font-weight: 400;
        border-radius: 50px;
        padding: 0 10px;
        color: #1A233E;
    }
    .course-module-info-progress {
        font-size: 12px;
        background-color: #56B954;
        color: white;
        font-weight: 400;
        border-radius: 50px;
        padding: 0 15px;
    }
    .course-module-finished-icon {
        background-color: #56B954;
        padding: 7px;
        border-radius: 20px;
        position: absolute;
        margin-left: -55px;
    }
    .course-module-button.active {
        color: var(--primary-color);
    }
    .course-module-button:hover {
        color: var(--primary-color); 
    }
    .course-modules {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .course-module-content {
        display: none;
        overflow: hidden;
        flex-direction: column;
    }
    .course-module-content hr {
        margin-bottom: 10px;
    }
    .course-module-content p {
        margin: 0px;
    }
    .course-module-lesson {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .course-module-lesson-text {
        display: flex;
        align-items: center;
        gap: 18px;
    }
    .course-module-lesson-text p {
        width: 450px;
        font-size: 16px;
    }
    .course-module-lesson-finished-time {
        background-color: #56B954;
        color: white;
        border-radius: 24px;
        display: flex;
        padding: 0px 20px 0px 10px;
        gap: 8px;
        font-size: 12px; 
    }
    .course-module-lesson-unfinished {
        background-color: var(--primary-color);
        color: white;
        border-radius: 50px;
        display: flex;
        padding: 10px 10px 10px 30px;
        gap: 8px;
        font-size: 14px; 
    }
    .course-module-lesson-unfinished-time {
        display: flex;
        background-color: white;
        font-size: 12px;
        color: var(--primary-color);
        border-radius: 30px;
        padding: 0 10px;
    }
    .course-module-lesson-not-started {
        display: flex;
        background-color: white;
        font-size: 12px;
        color: #999999;
        gap: 8px;
        border-radius: 30px;
        padding: 0 10px;
    }
</style>