
<script>
    import Header from '$lib/Header.svelte';

    import MainNavigator from '$lib/MainNavigator.svelte';
    import EditUser from '$lib/EditUser.svelte'
    export let data;
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns is-vcentered">
    <div class="column has-text-centered">

    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Edit user details</h1>
        <EditUser />
    </div>
</div>
