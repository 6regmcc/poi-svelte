// @ts-nocheck
import axios from "axios";
import { user } from "../stores"
import {latestPoi} from "../stores";

export const poiService = {
    baseUrl: "https://poi-api.onrender.com",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                console.log(response.data)
                user.set({
                    email: email,
                    token: response.data.token,
                    id: response.data.id
                });
                localStorage.donation = JSON.stringify({ email: email, token: response.data.token });
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("donation");
    },

    async signup(firstName, lastName, email, password) {
    try {
    const userDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
    };
    await axios.post(this.baseUrl + "/api/users", userDetails);
    return true;
        } catch (error) {
    return false;
        }
    },
    reload() {
        const poiCredentials = localStorage.donation;
        if (poiCredentials) {
            const savedUser = JSON.parse(poiCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },
    async create(poi) {

        try {
            const response = await axios.post(this.baseUrl + "/api/categories/" + poi.category_id + "/poi", poi);
            latestPoi.set(poi)
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },

    async edit_poi(poi) {

        try {
            const response = await axios.patch(this.baseUrl + "/api/categories/" + poi.category + "/poi/" + poi.id, poi);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },
    async addImage(poi){
        try {
            const response = await axios.patch(this.baseUrl + "/api/poi/" + poi.id + "/image", poi)
            return response.status == 200
        } catch(error) {
            console.log(error)
        }
    },
    async edit_user(user, slug) {
        try {
            const response = await axios.patch(this.baseUrl + "/api/users/" + slug, user)
            return response.status == 200;
        } catch (error) {
            return false;
        }

    },
    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getCategorieById(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories/" + id);
            return response.data;
        } catch (error) {
            return [];
        }
    },



    async getPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois");
            let pois = response.data
            pois.map(async (poi, index) => {
                let category = await poiService.getCategorieById(poi.category)
                poi.categoryText = category.name
                //poi.test = "test"
            })
            return pois;
        } catch (error) {
            return [];
        }
    },
    async getPoiById(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/poi/" + id)
            return response.data
        } catch (error) {
            return 'error happened'
        }
    },
    async createCategory(category){
        //console.log("the category is " + JSON.stringify(category))
        try {
            const response = await axios.post(this.baseUrl + "/api/categories", category)
            return response.status == 200;
        } catch (error){
            console.log('there was an error creating category')
        }
    },
    async getUserByEmail(email){
        try {
            const response = await axios.get(this.baseUrl + "/api/users/email?email=" + email)
            return response.data
        } catch (error){
            console.log('there was an error getting user by email')
        }

    },

    async removeImage(id, currentImage) {

        const payload = {
            imageToDelete: currentImage.image
        }
        try {
            const response = await axios.patch(this.baseUrl + "/api/poi/" + id +  "/removeImage", payload)
            console.log(response.status)
            return response.status

        } catch(error){
            console.log(error)
        }


    }


};
