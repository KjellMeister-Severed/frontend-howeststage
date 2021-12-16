import { fetchFromBackend } from "../Comms";
import { Component } from "react";

class CompanySignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: "",
            success: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.generateMagicLink = this.generateMagicLink.bind(this)
    }

    handleChange(e) {
        this.setState({ email: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState((state) => ({errorbag: [], successbag: []}), this.generateMagicLink)
    }

    generateMagicLink() {
        fetchFromBackend(`/api/companies/${this.state.email}/generatemagiclink`, "POST")
            .then(response => {
                if (response.error) { 
                    let err = new Error()
                    err.message = "No account associated with this email"
                    throw err
                }
                this.setState((state) => ({ success: "The e-mail has been send. Please follow the instructions inside." }))
            })
            .catch(error => {
                this.setState((state) => ({error: error.message}))
            })
    }

    render() {
        return (
            <section className={"flex flex-col items-center m-2 lg:flex-col gap-2 lg:gap-0.5"}>
                {this.state.success !== "" &&
                    <aside className={"rounded border-2 border-teal border-solid"}>
                        <h3 className={ "bg-teal text-white p-1 font-bold"}>Success!</h3>
                        <p className={"p-1"}>{this.state.success}</p>
                    </aside>
                }
                {this.state.error !== "" &&
                    <aside>
                        <aside className={"rounded border-2 border-magenta border-solid"}>
                            <h3 className={"bg-magenta text-white p-1 font-bold"}>Not successful!</h3>
                            <p className={"p-1"}>{this.state.error}</p>
                        </aside>
                    </aside>
                }
                <p>Just enter you email and we'll send you a sign-in link</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Email: </label>
                    <input
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        value={this.state.email}
                        placeholder={"yourname@youremail.com"}
                        className={"border-solid border-2 p-1"}
                        onChange={this.handleChange}
                    />
                    <input type={"submit"} value={"Submit"} className={"p-2 rounded bg-magenta hover:bg-white hover:text-black text-white ml-2"} />
                </form>
            </section >
        );
    }
}

export default CompanySignIn;
