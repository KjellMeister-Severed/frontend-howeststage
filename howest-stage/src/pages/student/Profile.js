import { MsalContext } from "@azure/msal-react";
import { Component } from "react";
import UniversalHeader from "../../components/UniversalHeader";
import MediumButton from "../../components/MediumButton";
import { fetchFromBackend } from "../../components/Comms";

export default class StudentProfile extends Component {
    static contextType = MsalContext

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            cv: '',
            linkedin: ''
        }
    }

    componentDidMount() { 
        this.context.instance.setActiveAccount(this.context.accounts[0])
        let tokenRequest = {
            scopes: ["user.read"]
        };
        this.context.instance.acquireTokenSilent(tokenRequest).then(response => { 
            this.setState((state) => ({
                name: response.account.name,
                email: response.account.username
            }))
            fetchFromBackend("/api/user/", "GET", response.accessToken)
                .then(data => { 
                    this.setState((state) => ({
                        cv: data.cv_path,
                        linkedin: data.linkedin_path
                    }))
                })
        }).catch(data => console.log(data))
    }

    render() {
        return (
            <>
                <UniversalHeader className="h-20 flex-initial fixed w-screen" logo={true}>
                    <MediumButton
                        to={"/dashboard/student"}
                        className={"justify-self-start hover:text-black"}
                        bg={"bg-magenta"}
                        bgHover={"bg-white"}
                        textColor={"text-white"}>
                        Back
                    </MediumButton>
                    <MediumButton className={"border-2 border-white rounded bg-magenta mr-5"} onClick={() => this.context.instance.logoutRedirect()} textColor={"text-white"}>Logout</MediumButton>
                </UniversalHeader>
                <main className="flex flex-row pt-24 gap-2 mt-18 mx-5">
                    <figure>
                        <img src="https://via.placeholder.com/300" alt={this.state.name}/>
                    </figure>
                    <h2 className={"text-xl font-vagbold"}>{this.state.name}</h2>
                </main>
            </>
        )
    }
}
