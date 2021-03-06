import { MsalContext } from "@azure/msal-react";
import { Component } from "react";
import UniversalHeader from "../../components/UniversalHeader";
import MediumButton from "../../components/MediumButton";
import { fetchFileFromBackend, fetchFromBackend } from "../../components/Comms";
import HeroBanner from "../../components/Student/HeroBanner";
import UpdateProfileForm from "../../components/Student/UpdateProfile";

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
                    this.setState((state) => ({ linkedin: data.linkedin_url }))
                    fetchFileFromBackend(`/api/user/cv`, "GET", response.accessToken)
                        .then((cvUrl) => this.setState({cv: URL.createObjectURL(cvUrl)}))
                })
        }).catch(data => this.setState((state) => ({
            errorbag: [...this.state.errorbag, {
                key: this.state.errorbag + 1,
                value: 'Something went wrong with fetching your profile. Please go back to the homepage and try again.'
        }]})))
    }

    render() {
        return (
            <>
                <UniversalHeader className="h-20 flex-initial fixed w-screen" logo={true}>
                    <MediumButton
                        to={"/dashboard/student"}
                        className={"justify-self-start hover:text-black p-2"}
                        bg={"bg-magenta"}
                        bgHover={"bg-white"}
                        textColor={"text-white"}>
                        Back
                    </MediumButton>
                    <MediumButton className={"border-2 border-white rounded bg-magenta mr-5 p-2"} onClick={() => this.context.instance.logoutRedirect()} textColor={"text-white"}>Logout</MediumButton>
                </UniversalHeader>
                <main className="pt-24 gap-2 mt-18 mx-5 font-vag">
                    {this.state.errorbag.length > 0 &&
                        <div className={"rounded border-2 border-magenta border-solid w-fit mx-auto ".concat((this.props.className) ? this.props.className : this.props.className)}>
                            <h3 className={"bg-magenta text-white p-1 font-bold"}>Something went wrong</h3>
                            <div className={"pl-4"}>
                                <ul>
                                    {this.state.errorbag.map((err) => (<li className={"list-disc m-2"} key={err.key}>{err.value}</li>))}
                                </ul>
                            </div>
                        </div>
                    }
                    {this.state.errorbag.length === 0 && (
                        <>
                            <HeroBanner name={this.state.name}>
                                <p><span className={"underline"}>Email:</span> {this.state.email}</p>
                                <DisplayEntry
                                    title="CV"
                                    entry={`${this.state.cv}`}
                                    missingText="Not yet uploaded" />
                                <DisplayEntry
                                    title="LinkedIn"
                                    entry={this.state.linkedin}
                                    missingText="Not yet set" />
                            </HeroBanner>
                            <UpdateProfileForm className={"mt-5"} />
                        </>
                    )
                    }
                </main>
            </>
        )
    }
}

function DisplayEntry(props) {
    return (
        <p><span className={"underline"}>{props.title}:</span> {
            (props.entry)
                ? <MediumButton
                    to={props.entry}
                    className={"hover:text-black hover:border-black border border-solid ml-3 p-2"}
                    bg={"bg-teal"}
                    bgHover={"bg-white"}
                    textColor={"text-white"}>Available!</MediumButton>
                : <span className={"text-red-600"}>{props.missingText}</span>
        }</p>
    );
}
