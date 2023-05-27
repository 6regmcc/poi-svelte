<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { poiService } from "../services/poi-service";
    import { page } from '$app/stores';
    import { goto } from "$app/navigation";


    let slug = $page.params.slug
    import UploadWidgit from "./UploadWidgit.svelte";

    let poi
    onMount(async () => {
        categoryList = await poiService.getCategories();
        poi = await poiService.getPoiById(slug);
        name = poi.name;
        description = poi.description;
        latitude = poi.latitude;
        longitude = poi.longitude;
        selectedCategory = poi.category_id;
    });
    let name;
    let description = ""
    let latitude
    let longitude
    let selectedPoi = {}

    let categoryList = [];
    let selectedCategory = "";

    let message = "Create POI";


    async function edit_poi() {
        if (selectedCategory && name && description && latitude && longitude) {
            const poi = {
                name: name,
                description: description,
                latitude: latitude,
                longitude: longitude,
                category: selectedCategory,
                id: slug

            };
            const success = await poiService.edit_poi(poi);
            if (!success) {
                message = "Failed to edit POI not completed - some error occurred";
                return;
            }
            message = `Poi edit saved`;
            goto("/pois");
        } else {
            message = "Please entered required field";
        }
    }


</script>

<form on:submit|preventDefault={edit_poi}>
    <div class="field">
        <label class="label" for="name">Enter POI name</label>
        <input bind:value={name} class="input" id="name" name="name" type="text"  />
    </div>
    <div class="field">
        <label class="label" for="latitude">Enter latitude</label>
        <input bind:value={latitude} class="input" id="latitude" name="latitude" type="number" step="any"/>
    </div>
    <div class="field">
        <label class="label" for="longitude">Enter longitude</label>
        <input bind:value={longitude} class="input" id="longitude" name="longitude" type="number" step="any"/>
    </div>
    <div class="field">
        <label class="label" for="description">Enter description</label>
        <input bind:value={description} class="input" id="description" name="description" type="text" />
    </div>

    <div class="field">
        <div class="select">
            <select style="text-transform:capitalize" bind:value={selectedCategory}>
                {#each categoryList as category}
                    <option value={category._id}>{category.name}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-link is-light">Update POI</button>
        </div>
    </div>
    <UploadWidgit />
    <div class="box">
        {message}
    </div>
</form>
