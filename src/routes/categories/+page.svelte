<script>
    import Header from '$lib/Header.svelte';
    import CreateCategory from '$lib/CreateCategory.svelte';
</script>

<Header />

<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <img alt="Poi marker" src="/poi_marker.png" width="300" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Create Category!</h1>
        <CreateCategory />
    </div>
</div>report
