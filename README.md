# HoWest Stage Booker

Howest Stagebooker is a React-based application that allows HoWest Personal & students to sign on using their Microsoft account and book meetings with companies that they are interested where they could potentially get an internship.

> :exclamation: You are currently in the front-end section of the project. Note that you'll also need access to the [back-end](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/back-end) if you want complete functionality

## Available scripts
> :bulb: NPM is used througout this project, but you can use `yarn` if that suits you more. Just replace `npm run` with `yarn`.

> :exclamation: Make sure that you're in **`./howest-stage`**, otherwise this won't work

- `npm run start`: This command starts a local development server using [localhost:3000](http://localhost:3000).
- `npm run build`: This will generate a production-ready build to the `./build` directory.
- `npm run test`: This will run the tests created within the project.

# Installation
## Production
> :bulb: If needed, the **Create React App** team provides a handy [deployment guide](https://facebook.github.io/create-react-app/docs/deployment) that we suggest keeping nearby.

> :exclamation: Still W.I.P. We'll first need to know which platform IT uses. But we're guessing that they might use [App Services](https://azure.microsoft.com/en-us/services/app-service/) on Azure, seeing as they do use a lot of Azure services.

## Development
### Local-based development
1. Clone the following projects to your local machine using `git clone`:
   - **[React App](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/react-app):** [https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/react-app](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/react-app)
   - **[Express Backend](https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/back-end)**: https://git.ti.howest.be/TI/2021-2022/s5/project-iv/projects/group-13/back-end
2. Follow the [Back-end setup guide]() on how to configure the Express back-end
3. In your CLI of choice, navigate to the `./howest-stage` directory and run the following command: `npm run start`

:white_check_mark: **Done!** Normally, you should be completely set up in order to start developing. Navigate to [localhost:3000](http://localhost:3000) in order to keep tracj of your process.

### Docker-based deployment

> :exclamation: This will be added on a later date. Currently, the back-end doesn't interact nicely with the database, but the front-end can be completely containerized, if needed.

