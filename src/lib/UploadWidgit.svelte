<script>
    import { onMount} from "svelte";
    import {page} from "$app/stores";
    import {poiService} from "../services/poi-service.js";

    let widget
    let imageURL = ""
    let slug = $page.params.slug
    import selectedCategory from "$lib/EditPoi.svelte"

    onMount(()=>{
        if('cloudinary' in window){
            widget = window.cloudinary.createUploadWidget({
                cloudName: "dg9uvnst5",
                uploadPreset: "ufe2udxt"
            }, (error, result)=>{
                if(result.event === "success"){
                    imageURL = result.info.secure_url
                    console.log(imageURL)
                    let poi = {
                        id: slug,
                        imageURL: imageURL
                    }
                    poiService.addImage(poi)

                }
            })

        }
        console.log("this is " + widget)
    })

    function handleClick(){
        if(widget) {
            widget.open()
        }
    }
</script>

<button on:click|preventDefault={handleClick}>Upload</button>