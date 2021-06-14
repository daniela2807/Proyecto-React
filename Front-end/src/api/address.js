import {API_URL} from '../utils/constants'

export async function getAdressesApi(id){
    try{
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


export async function createAddress(address){
    try{
        const url = `${API_URL}/address`;
        const params = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(address)
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function deleteAdressesApi(id){
    try{
        const url = `${API_URL}/address/${id}`;
        const params = {
            method: "DELETE",
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
