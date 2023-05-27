<script>

    import { user } from "../stores"
    import {onMount} from "svelte";
    import {poiService} from "../services/poi-service.js";
    let loggedInUserId = $user
    let slug
    onMount(async () => {
        let user = await poiService.getUserByEmail(loggedInUserId.email);
        slug = user._id

    });
</script>


<div class="box has-text-centered columns m-7">

    <a href="/edituser/{slug}" class="column">
        User Admin
    </a>
    <a href="/pois" class="column">
        Pois
    </a>

    <a href="/logout" class="column">
        <i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)" />
    </a>
    <a href="/map" class="column">
        <i class="fas fa-map-marked-alt fa-3x" style="color:rgb(102, 153, 255)" />
    </a>


</div>