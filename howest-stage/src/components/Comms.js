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

/**
The `fileObject` parameter will require a object with 2 key-value pairs
- `key`: Value that is used to construct the key of the FormData Object
- `data`: The actual file data
*/
export async function uploadFile(endpoint, fileObject, bearer = "", method = "POST") { 
    const fileData = new FormData()
    fileData.append(fileObject.key, fileObject.data)
    let request = {
        method: method,
        body: fileData,
        headers: {
            'Authorization': `Bearer ${bearer}`
        }
    }

    return (await fetch(process.env.REACT_APP_BACKEND_URL + ":" + process.env.REACT_APP_BACKEND_PORT + endpoint, request))
}

