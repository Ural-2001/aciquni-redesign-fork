<script>
    export let text;
    export let link;
    export let action;
</script>

<a href={link} class="button-secondary" on:click={action}>
    {text}
</a>

<style>
    .button-secondary {
        display: flex;
        align-items: center;
        border: 1px solid var(--primary-color);
        border-radius: 32px;
        padding: 10px 25px;
        font-size: 14px;
    }
    .button-secondary:hover {
        text-decoration: none;
        color: var(--primary-color);
        cursor: pointer;
    }
</style>