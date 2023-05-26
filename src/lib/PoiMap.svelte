<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import {poiService} from "../services/poi-service.js";

    const mapConfig = {
        location: { lat: 52.160858, lng: -7.15242 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = await new LeafletMap("poi-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        const pois = await poiService.getPois();
        console.log(pois)
        map.addLayerGroup('Pois');
        map.showLayerControl();
        pois.forEach((poi) => {
            map.addMarker({ lat: poi.latitude, lng: poi.longitude },poi.name, 'Pois') ;
        });

    })
</script>

<div class="box" id="poi-map" style="height:75vh" />
