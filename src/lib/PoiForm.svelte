<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { poiService } from "../services/poi-service";
    import {goto} from "$app/navigation";
    import { tick } from 'svelte';


    let name = 0;
    let description = ""
    let latitude = 0
    let longitude = 1


    let categoryList = [];
    let selectedCategory = "";

    let message = "Create POI";

    onMount(async () => {
        categoryList = await poiService.getCategories();
    });


    async function createPoi() {
        if (selectedCategory && name && description && latitude && longitude) {
            const poi = {
                name: name,
                description: description,
                latitude: latitude,
                longitude: longitude,
                category_id: selectedCategory,

            };
            const success = await poiService.create(poi);
            if (!success) {
                message = "Failed to create POI not completed - some error occurred";
                return;
            }

            message = `Poi created`;
        } else {
            message = "Please select amount, method and candidate";
        }
    }


</script>

<form on:submit|preventDefault={createPoi}>
    <div class="field">
        <label class="label" for="name">Enter POI name</label>
        <input bind:value={name} class="input" id="name" name="name" type="text" />
    </div>
    <div class="field">
        <label class="label" for="latitude">Enter latitude</label>
        <input bind:value={latitude} class="input" id="latitude" name="latitude" type="number" />
    </div>
    <div class="field">
        <label class="label" for="longitude">Enter longitude</label>
        <input bind:value={longitude} class="input" id="longitude" name="longitude" type="number" />
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
            <button class="button is-link is-light">Create POI</button>
        </div>
    </div>
    <div class="box">
        {message}
    </div>
</form>
