<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { poiService } from "../services/poi-service";
    import {goto} from "$app/navigation";

    let name = "";
    let message = "Create Category";




    async function createPoi() {
        if (name) {
            const category = {
                name: name,
            };
            const success = await poiService.createCategory(category);
            console.log(success)
            goto("pois")
            name = ""

        } else {
            message = "Please enter category name";
        }
    }


</script>

<form on:submit|preventDefault={createPoi}>
    <div class="field">
        <label class="label" for="name">Enter category name</label>
        <input bind:value={name} class="input" id="name" name="name" type="text" />
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-link is-light">Create Category</button>
        </div>
    </div>
    <div class="box">
        {message}
    </div>
</form>
