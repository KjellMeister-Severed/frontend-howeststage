export async function fetchFromBackend(endpoint, method = "GET", bearer = "", body=null, contentType=null) {
    let request = {
        method: method,
        headers: {
            'Authorization': `Bearer ${bearer}`
        }
    }

    if(body) {
        request.body = body;
    }

    if(contentType) {
        request.headers["Content-Type"] = contentType;
    }

    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, request)).json();
}

/**
The `fileObject` parameter will require a object with 2 key-value pairs
- `key`: Value that is used to construct the key of the FormData Object
- `data`: The actual file data
*/
export async function uploadFile(endpoint, file, bearer = "", method = "POST") { 
    const fileData = new FormData()
    fileData.append(file.key, file.data)
    let request = {
        method: method,
        body: fileData,
        headers: {
            'Authorization': `Bearer ${bearer}`
        }
    }

    return (await fetch(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}${endpoint}`, request))
}

export async function bodyRequest(endpoint, body, bearer = "", method = "POST") {
    let request = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        },
        body: JSON.stringify(body)
    }

    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, request))
}

export async function fetchFileFromBackend(endpoint, method = "GET", bearer = "", body = {}) {
    let request = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        }
    }
    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, request)).blob();
}
