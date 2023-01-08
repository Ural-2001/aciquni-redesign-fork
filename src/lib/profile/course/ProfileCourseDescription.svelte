<script>
    export let course;
</script>

<div class="course-description">
    <hr>
    <div contenteditable bind:innerHTML={course.description}></div>
</div>

<style>
    .course-description hr {
        margin-top: 10px;
        margin-bottom: 25px
    }
    .description-title {
        font-weight: 600;
        font-size: 20px;
    }
</style>
