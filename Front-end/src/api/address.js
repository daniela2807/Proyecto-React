import {API_URL} from '../utils/constants'

export async function getAdressesApi(user){
    try{
        const id = user.id
        const url = `${API_URL}/address/user/${id}`;
        const params = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}