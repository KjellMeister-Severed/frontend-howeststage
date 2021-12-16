export async function fetchFromBackend(endpoint, method = "GET", bearer = "", body = {}) {
    let request = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        },
    }
    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, request)).json();
}

