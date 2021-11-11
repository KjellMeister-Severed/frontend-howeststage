import * as msal from "@azure/msal-browser";

const msalConfig = {
    auth : {
        clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`, 
        redirectUri: '/'
    }
}

const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance }