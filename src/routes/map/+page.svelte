<script>
    import { beforeUpdate } from "svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import PoiMap from "$lib/PoiMap.svelte";
    import { poiService } from "../../services/poi-service";


</script>

<Header>
    <MainNavigator />
</Header>

<PoiMap />
