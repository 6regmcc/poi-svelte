<script>
    import { onMount } from "svelte";
    import { poiService } from "../services/poi-service.js";
    import {testStore} from "../stores.js";


    let poiList = [];
    onMount(async () => {
        poiList = await poiService.getPois();


    });



</script>

<table class="table is-fullwidth">

    <thead>
    <th>Name</th>
    <th>Description</th>
    <th>Category</th>
    <th>Edit</th>
    <th>Delete</th>

    </thead>
    <tbody>
    {#each poiList as poi}
        <tr>
            <td>
                {poi.name}
            </td>
            <td>
                {poi.description}
            </td>
            <td>
                {poi.categoryText}
            </td>
            <td>
                <a href="/editPoi/{poi._id}">Edit</a>
            </td>


        </tr>
    {/each}
    </tbody>
</table>
