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
            linkedin: '',
            errorbag: []
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
                <main className="pt-24 gap-2 mt-18 mx-5 font-vag">
                    <div className={"flex flex-row justify-center gap-10 flex-wrap"}>
                        <img src="https://via.placeholder.com/300" alt={this.state.name} className={"h-72 w-auto"}/>
                        <aside className="flex flex-col w-max justify-around">
                            <h2 className={"text-xl font-vagbold"}>{this.state.name}</h2>
                            <p><span className={"underline"}>Email:</span> {this.state.email}</p>
                            <p><span className={"underline"}>Linkedin:</span> {
                                (this.state.linkedin)
                                    ? <MediumButton
                                        to={this.state.linkedin}
                                        className={"hover:text-black hover:border-black border border-solid"}
                                        bg={"bg-teal"}
                                        bgHover={"bg-white"}
                                        textColor={"text-white"}>Available</MediumButton>
                                    : <span className={"text-red-600"}>Not yet set!</span>
                            }</p>
                            <p><span className={"underline mr-3"}>CV:</span> {
                                (this.state.cv)
                                    ? <MediumButton
                                        to={this.state.cv}
                                        className={"hover:text-black hover:border-black border border-solid"}
                                        bg={"bg-teal"}
                                        bgHover={"bg-white"}
                                        textColor={"text-white"}>Available</MediumButton>
                                    : <span className={"text-red-600"}>Not yet uploaded!</span>
                            }</p>
                        </aside>
                    </div>
                </main>
            </>
        )
    }
}
