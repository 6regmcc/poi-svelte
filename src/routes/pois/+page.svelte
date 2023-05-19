<script>
    import Header from '$lib/Header.svelte';
    import PoiList from '$lib/PoiList.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import PoiForm from '$lib/PoiForm.svelte'
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <img alt="Poi marker" src="poi_marker.png" width="300" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Pois</h1>
        <PoiList />
        <PoiForm />
    </div>
</div>
