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


export async function addFavorites(id,product){
    try {
        console.log(id)
        console.log(product)
        const url = `${API_URL}/favorite/add/${id}`
        const params = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"product":product})
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteFavorites(id,product){
    try {
        console.log(id)
        console.log(product)
        const url = `${API_URL}/favorite/${id}`
        const params = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"product":product})
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}