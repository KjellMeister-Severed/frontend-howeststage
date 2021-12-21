export async function fetchFromBackend(endpoint, method = "GET", bearer = "") {
    let request = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        }
    }
    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, request)).json();
}

export async function fetchFileFromBackend(endpoint, method = "GET", bearer = "", body = {}) {
    let request = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        },
    }
    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, request)).blob();
}

