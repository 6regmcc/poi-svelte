<script>
    import { user } from "../stores.js";
    export let title = "";
    export let subTitle = "";
</script>

<div class="box has-text-centered columns m-2">
    <div class="column">
        <img src="/poi_marker.png" width="60" alt="new_poi" />
    </div>
    <div class="column">
        <div class="title is-5">{title}</div>
        <div class="subtitle is-5">{subTitle}</div>
    </div>
    <div class="column">

        {#if $user.email}
            <p>Logged in user</p>
            <div class="is-size-7">{$user.email}</div>
        {:else}
            <div class="is-size-7">POI-Svelte</div>
        {/if}
    </div>
</div>
