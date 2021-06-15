import {API_URL} from '../utils/constants'

export async function getFavorites(id){
    try {
        const url = `${API_URL}/favorite/${id}`
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
        console.log(error);
        return null;
    }
}