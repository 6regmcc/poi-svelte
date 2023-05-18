<script>
    import { beforeUpdate } from "svelte";
    import { poiService } from "../services/poi-service";

    beforeUpdate(() => {
        poiService.reload();
    });
</script>

<div class="container">
    <slot />
</div>
