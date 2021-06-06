import {API_URL} from '../utils/constants'

export async function registerApi(formData){
    try{

        const url = `${API_URL}/users`;
        const params = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error)
    }
}

export async function loginApi(formData){
    try{
        const url = `${API_URL}/users/auth`;
        const params = {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData),
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function getMeApi(token){ //aqui se recibiria el token 
    try {
        const url = `${API_URL}/`; //Aqui Dany iria la ruta del end point por ejemplo como te decia el "user/me" y ya en el servidor no se que onda :C
        const params = {            //pero te dejo este esqueleto por si te sirve
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, params);
        const result= await response.json();
        return result;
    } catch (error) {
        console.log("no tengo el token"+error);
        return null;
    }
}