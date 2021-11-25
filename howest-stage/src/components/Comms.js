"use strict";

export async function fetchFromBackend(endpoint, method = "GET", body = {}, bearer = "") {
    let request = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        },
    }
    if (body !== {}){
        request.body = body;
    }

    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint)).json();
}

