import { fetchFromBackend } from "../Comms";
import { Component } from "react";

class CompanySignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            errorbag: []
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
        this.setState((state) => state.errorbag, this.generateMagicLink)
        
        
    }

    generateMagicLink() { 
        fetchFromBackend("/api/companies", "GET").then(data => {
            const results = data.filter(company => company.email === this.state.email)
            if (results.length === 0) {
                this.setState((state) => {
                    state.errorbag.push("No account was found with the given email")
                })
            }
        })
    }

    render() {
        return (
            <section className={"flex flex-col items-center m-2 lg:flex-col gap-2 lg:gap-0.5"}>
                <aside>
                    {this.state.errorbag.length > 0 &&
                        <ul>
                            {this.state.errorbag.map(error => <li className="list-disc">{error}</li>)}
                        </ul>
                    }
                </aside>
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
