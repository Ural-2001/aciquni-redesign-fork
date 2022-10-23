<script>
    export let text;
    export let link;
    export let action;
</script>

<a href={link} class="button" on:click={action}>
    {text}
</a>

<style>
    .button {
        display: flex;
        align-items: center;
        border-radius: 32px;
        border: none;
        background-color: var(--primary-color);
        color: white;
        padding: 10px 30px;
        font-size: 14px; 
    }
    .button:hover {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
</style>