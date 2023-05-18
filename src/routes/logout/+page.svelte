<script>
    import { goto } from "$app/navigation";
    import { poiService } from "../../services/poi-service";

    poiService.logout();
    goto("/");
</script>
