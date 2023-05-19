<script>
    import { onMount } from "svelte";
    import { poiService } from "../services/poi-service.js";

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

    </thead>
    <tbody>
    {#each poiList as poi}
        <tr>
            <td>
                {poi.name}
            </td>
            <td>
                {poi.test}
            </td>
            <td>
                {poi.categoryText},
            </td>

        </tr>
    {/each}
    </tbody>
</table>
