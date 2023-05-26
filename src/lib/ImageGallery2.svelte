<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
    import {page} from "$app/stores";
    export let galleryID;
    let slug = $page.params.slug
    let poi
    import {poiService} from "../services/poi-service.js";
    let images = [
        {
            largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
            thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            width: 1875,
            height: 2500,
        }
    ]

    onMount(async () => {
        try {
            poi = await poiService.getPoiById(slug)
        } catch(error) {
            console.log(error)
        }

        let imageArr = poi.imageURL
        imageArr.forEach(e => {
            images.push({

                largeURL: e,
                thumbnailURL: e,
                width: 1875,
                height: 2500,
            })

        })
        console.log(images)

        let lightbox = new PhotoSwipeLightbox({

            gallery: '#' + galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),


        });

        lightbox.init();




    })
</script>

<div class="pswp-gallery" id={galleryID}>
    {#each images as image}
        <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                target="_blank"
                rel="noreferrer"
        >
            <img src={image.thumbnailURL} alt="" />
        </a>
    {/each}
</div>
