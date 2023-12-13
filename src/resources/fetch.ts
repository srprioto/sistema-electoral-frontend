const API_URL = process.env.REACT_APP_API_URL;
const headers = {
    "Content-Type": "application/json"
}

async function get(endpoint:string) {

    let data;

    try {
        const response = await fetch(API_URL + endpoint, { 
            method: "GET", headers
        })
        data = await response.json();
    } catch (error) {
        console.log(error);
        document.location.href = "/#/404";
    }

    return data;

}


async function post(endpoint:string, data:any) {
    let post;
    try {
        const response = await fetch(API_URL + endpoint, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers
        })
        post = await response.json();
    } catch (error) {
        console.log(error);
        document.location.href = "/#/404";
    }
    return post
}


async function put(endpoint:string, data:any) {

    let put;

    try {

        const response = await fetch(API_URL + endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers
        })
        put = await response.json()

    } catch (error) {
        console.log(error);
        document.location.href = "/#/404";
    }

    return put

}


async function destroy(endpoint:string) {

    let data;

    try {
        const response = await fetch(API_URL + endpoint,{ 
            method: "DELETE"
        })
        const res = await response.json();
        data = res.data;
        
    } catch (error) {
        console.log(error);
        document.location.href = "/#/404";
    }

    return data;

}



export {
    get,
    post, 
    put, 
    destroy,
    API_URL
}
