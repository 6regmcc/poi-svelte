<script>
    import Header from '$lib/Header.svelte';
    import CategoryList from '$lib/CategoryList.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="POI" src="/point-of-interest.png" width="300" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">List of Categories</h1>
        <CategoryList />
    </div>
</div>
