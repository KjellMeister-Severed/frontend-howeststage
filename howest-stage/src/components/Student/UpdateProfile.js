import { Component } from 'react';
import { bodyRequest, uploadFile } from '../Comms';
import { MsalContext } from "@azure/msal-react";

class UpdateProfileForm extends Component {
    static contextType = MsalContext

    constructor(props) {
        super(props);
        this.state = {
            cv: '',
            linkedin: '',
            successbag: [],
            errorbag: []
        }
        this.handleSubmit = this.handleSubmit.bind()
        this.handleFile = this.handleFile.bind()
        this.handleURL = this.handleURL.bind()
    }

    handleFile = (event) => {
        event.preventDefault()
        this.setState((state) => ({ cv: event.target.files[0] }))
    }

    handleURL = (event) => {
        event.preventDefault()
        this.setState((state) => ({ linkedin: event.target.value }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.context.instance.setActiveAccount(this.context.accounts[0])
        let tokenRequest = {
            scopes: ["user.read"]
        };
        this.context.instance.acquireTokenSilent(tokenRequest).then(response => { 
            if (this.state.cv !== '' && this.state.cv !== undefined) {
                uploadFile("/api/user/cv", { key: 'cv', data: this.state.cv }, response.accessToken)
                    .then((response) => { this.setState((state) => ({ successbag: [...this.state.successbag, { key: (this.state.successbag.length + 1), value: 'CV uploaded successfully' }] })) })
                    .catch((response) => { this.setState((state) => ({ errorbag: [...this.state.errorbag, { key: (this.state.errorbag.length + 1), value: response.statusText }] })) })
            }
            if (this.state.linkedin !== '' && this.state.linkedin !== undefined) {
                bodyRequest("/api/user/", { "linkedin_url": this.state.linkedin }, response.accessToken, "PATCH")
                    .then((response) => this.setState((state) => ({ successbag: [...this.state.successbag, { key: (this.state.successbag.length + 1), value: 'LinkedIn successfully updated' }] })))
                    .catch((response) => this.setState((state) => ({ errorbag: [...this.state.errorbag, { key: (this.state.errorbag.length + 1), value: response.statusText }] })))
            }
        }).catch((err) => this.setState((state) => ({ errorbag: [...this.state.errorbag, {key: (this.state.errorbag.length + 1), value: "MS authentication failed. Please reload the page."}]})))
    }

    render() {
        return (
            <>
                {this.state.successbag.length > 0 && (
                    <div className={"rounded border-2 border-teal border-solid w-fit mx-auto ".concat((this.props.className) ? this.props.className : this.props.className)}>
                        <h3 className={"bg-teal text-white p-1 font-bold"}>Success!</h3>
                        <div className={"pl-4"}>
                            <ul>
                                {this.state.successbag.map((success) => (<li className={"list-disc m-2"} key={success.key}>{success.value}</li>))}
                            </ul>
                        </div>
                    </div>
                )
                }
                {
                    this.state.errorbag.length > 0 && (
                        <div className={"rounded border-2 border-magenta border-solid w-fit mx-auto ".concat((this.props.className) ? this.props.className : this.props.className)}>
                            <h3 className={"bg-magenta text-white p-1 font-bold"}>Something went wrong</h3>
                            <div className={"pl-4"}>
                                <ul>
                                    {this.state.errorbag.map((err) => (<li className={"list-disc m-2"} key={err.key}>{err.value}</li>))}
                                </ul>
                            </div>
                        </div>
                    )
                }
                <form onSubmit={this.handleSubmit} className={"flex flex-col gap-2 items-center ".concat((this.props.className) ? this.props.className : this.props.className)}>
                    <label for="cv"> CV:
                        <input type={"file"} accept={".pdf"} id={"cv"} className={"ml-2 w-max"} onChange={this.handleFile} />
                        <span className={"italic"}>*PDF only</span>
                    </label>
                    <label for="linkedin" className={"inline w-max"}>LinkedIn:
                        <input onChange={this.handleURL} type={"text"} id={"linkedin"} name={"linkedin"} placeholder={"https://www.linkedin.com/in/..."} className={"ml-2 border-solid border-2 p-1 rounded border-black w-96 min-w-fit"} />
                    </label>
                    <input type={"submit"} className={"w-fit rounded border text-white bg-magenta hover:bg-white hover:border-black hover:text-black p-2"} />
                </form>
            </>
        );
    }
}

export default UpdateProfileForm;
