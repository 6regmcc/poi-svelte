
<script>
    import Header from '$lib/Header.svelte';

    import MainNavigator from '$lib/MainNavigator.svelte';
    import EditPoi from '$lib/EditPoi.svelte'

    export let data;
    import { onMount } from "svelte";
    import { poiService} from "../../../services/poi-service.js";
    import {page} from "$app/stores";
    let slug = $page.params.slug
    let imageArray = []
    let poi
    onMount(async () => {

        poi = await poiService.getPoiById(slug);
        imageArray = poi.imageURL


    });
    function deleteImage(currentImage){

        const success = poiService.removeImage(slug, currentImage);
        if (success === 200){
            poi =  poiService.getPoiById(slug);
            imageArray = poi.imageURL
            imageArray = imageArray
        }
    }

</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns is-vcentered">
    <div class="column has-text-centered">
        {#if imageArray}
            {#each imageArray as image}
                <img alt="Poi image" src={image} width="300" />
                <button on:click={() => deleteImage({image})}>Delete Image</button>
            {/each}
        {/if}
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Pois</h1>
        <EditPoi />



    </div>
</div>
