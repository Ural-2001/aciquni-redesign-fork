<script>
    import { mutationStore, gql, getContextClient } from '@urql/svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    const slug = parseInt($page.url);

    let token;
    let uidb64;

    let result;
    let client = getContextClient();
    const activate = async () => {
        result = await mutationStore({
            client,
            query: gql`
                mutation ($token: String!, $uidb64: String!) {
                    activate(token: $token, uidb64: $uidb64) {
                        ok
                        errors
                    }
                }
            `,
            variables: { token, uidb64 },
        });        
    };

    onMount(() => {
        token = $page.url.searchParams.get('token');
        uidb64 = $page.url.searchParams.get('uidb64');
        activate();
	});
</script>

<div class="container">
    Поздравляем! Ваша почта подтверждена
    <br>
    <a href="/profile">Личный кабинет</a>
</div>