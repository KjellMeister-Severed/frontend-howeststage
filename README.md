# HoWest Stage Booker

Howest Stagebooker is a React-based application that allows HoWest Personal & students to sign on using their Microsoft account and book meetings with companies that they are interested where they could potentially get an internship.

> :exclamation: You are currently in the front-end section of the project. Note that you'll also need access to the [back-end](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/back-end) if you want complete functionality

## Installation
## Requirements
- [Node.JS LTS](https://nodejs.org/en/download/) & NPM
- [Docker (Desktop)](https://www.docker.com/get-started)

### Development
1. Clone the following projects to your local machine using `git clone`:
   - **[React App](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/react-app):** [https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/react-app](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/react-app)
   - **[Express Backend](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/back-end)**: https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/back-end
2. Follow the [Back-end setup guide](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/back-end/-/blob/master/README.md#Installation) on how to configure the Express back-end
3. In your CLI of choice, navigate to the `./react-app/howest-stage` directory and run the following command:
   ```bash
   $ npm run start
   ```

:white_check_mark: **Done!** Normally, you should be completely set up in order to start developing. Navigate to [localhost:3000](http://localhost:3000) in order to keep trace of your process.

### Production
> :bulb: If needed, the **Create React App** team provides a handy [deployment guide](https://facebook.github.io/create-react-app/docs/deployment) that we suggest keeping nearby.

> :exclamation: Still W.I.P. We'll first need to know which platform IT uses. But we're guessing that they might use [App Services](https://azure.microsoft.com/en-us/services/app-service/) on Azure, seeing as they do use a lot of Azure services.
> 
## Available scripts
> :bulb: NPM is used throughout this project, but you can use `yarn` if that suits you more. Just replace `npm run` with `yarn`.

> :exclamation: Make sure that you're in **`./howest-stage`**, otherwise this won't work

- `npm run start`: This command starts a local development server using [localhost:3000](http://localhost:3000).
- `npm run build`: This will generate a production-ready build to the `./build` directory.
- `npm run test`: This will run the tests created within the project.

# Miscellaneous
## `.env` configuration

> :bulb: A `.env.example` is available! Just copy it and start developing

|Key|Explanation|Value|
|---|---|---|
|REACT_APP_AZURE_CLIENT_ID|The client ID with the App Registration. <br/> *You can find this at `App Registration/Overview` within the Azure Portal.|097ee797-4aa1-4794-a28e-1fdb3c1d0dez|
|REACT_APP_AZURE_TENANT_ID|The tenant ID with the App Registration. <br/> *You can find this at `App Registration/Overview` within the Azure Portal.|223ba385-a78b-4bc2-825b-1c45a7d97afa|
||||
|REACT_APP_BACKEND_URL|The HTTP(S) address where the back-end can be reached on|http://localhost|
|REACT_APP_BACKEND_PORT||3001|
