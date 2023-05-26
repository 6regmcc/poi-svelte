import {writable} from "svelte/store";

export const user = writable({
    email: "",
    token: "",
    id: ""
});


export const latestPoi = writable(null);

export const testStore = writable(null)