import { API } from "../Services/Api";
class Restservice {
    async comingsoon(data) {
        try {
            let response = await API.post("api/v1/coming-soon", data);
            return response;
        } catch (e) { }
    }
}

export let RestService = new Restservice();