"use strict";

export async function fetchFromBackend(bearer="", method="GET", endpoint, body = {}){
    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        },
        body: JSON.stringify(body)
    })).json();
}

