<script>
    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <img width="300" src="/point-of-interest.png" alt="poi" />
    </div>
    <div class="column">
        <h1 class="title">POI App</h1>
        <p>Add Points of interest! This is the home page</p>
    </div>
</div>
