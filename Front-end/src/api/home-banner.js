import {API_URL} from "../utils/constants"

export async function getBannerApi(){
    try {
        const url = `${API_URL}/sliders`
        const params = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("error en la api",error)
        return null
    }
}