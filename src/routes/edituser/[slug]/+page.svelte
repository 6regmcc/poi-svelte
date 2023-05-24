
<script>
    import Header from '$lib/Header.svelte';

    import MainNavigator from '$lib/MainNavigator.svelte';
    import EditUser from '$lib/EditUser.svelte'
    export let data;
</script>

<Header>
    <MainNavigator />
</Header>
<h1>{data.slug}</h1>
<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <img alt="Poi marker" src="poi_marker.png" width="300" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Pois</h1>
        <EditUser />
    </div>
</div>
