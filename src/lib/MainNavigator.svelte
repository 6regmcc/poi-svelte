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


<div class="box has-text-centered columns m-2">
    <a href="/categories" class="column is-4">
        categories
    </a>
    <a href="/edituser/{slug}" class="column is-4">
        User Admin
    </a>
    <a href="/pois" class="column is-4">
        Pois
    </a>
    <a href="/report" class="column is-4">
        <i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)" />
    </a>
    <a href="/logout" class="column is04">
        <i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)" />
    </a>

</div>