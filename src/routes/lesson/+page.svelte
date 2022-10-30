<script>
    import LessonCard from "$lib/lesson/LessonCard.svelte";

    import { onMount } from 'svelte';

    let selectedPage = 'content';
    let selectPage = (page) => {
        selectedPage = page;
    };
    // onMount(() => {
	// });
    
</script>

<div class="container lesson">
    <LessonCard />
</div>


<style>
    .lesson {
        display: flex;
        gap: 125px;
    }
</style>
