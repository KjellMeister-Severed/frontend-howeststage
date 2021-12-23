import { Component } from "react";
import { MsalContext } from "@azure/msal-react";
import { fetchFromBackend } from "../Comms";

class AddCompanyForm extends Component {
    static contextType = MsalContext;

    constructor(props) {
        super(props);

        this.state = {
            output: <p className="text-center"></p>,
            name: "",
            email: "",
            phonenumber: "",
            address: "",
            postalcode: "",
            city: "",
            description: "",
            lookingfor: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault()

        let tokenRequest = {
            scopes: ["user.read"]
        };

        // Do API call to create a company
        this.context.instance.acquireTokenSilent(tokenRequest).then(response => {
            const requestBody = {
                name: this.state.name,
                email: this.state.email,
                phonenumber: this.state.phonenumber,
                address: this.state.address,
                postalcode: this.state.postalcode,
                city: this.state.city,
                website: this.state.website,
                description: this.state.description,
                lookingfor: this.state.lookingfor
            };

            fetchFromBackend("/api/companies", "POST", response.accessToken, JSON.stringify(requestBody), 
            "application/json").then(response => {
                if(response.error) {
                    return this.setState({
                        output: <p className="text-red text-center">{response.error}</p>
                    });
                }

                this.setState({
                    output: <p className="text-green text-center">Company created.</p>
                });

            }).catch(() => {
                this.setState({
                    output: <p className="text-red text-center">Something went wrong.</p>
                });
            });
        });
    }

    render() {
        return (
            <>
                <h1 className="font-vagbold text-xl mt-2">Add company</h1>
                <form className="flex flex-col w-3/4">
                    <label htmlFor="name">Company name</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3" required/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3" required/>

                    <label htmlFor="phonenumber">Phone number</label>
                    <input type="text" name="phonenumber" id="phonenumber" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3" required/>

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3" required/>

                    <label htmlFor="postalcode">Postal code</label>
                    <input type="text" name="postalcode" id="postalcode" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3" required/>

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3" required/>

                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" id="website" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3" required/>        

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3 h-44" required/>

                    <label htmlFor="lookingfor">Looking for</label>
                    <textarea name="lookingfor" id="lookingfor" onChange={this.handleChange} className="border-solid 
                    border-2 mb-3 h-44" required/>

                    <input type="submit" value="Create company" className="block rounded bg-magenta mt-3 mb-3 text-white ml-auto mr-auto"
                    onClick={this.handleSubmit}/>
                    {this.state.output}
                </form>
            </>
        )
    }
}

export default AddCompanyForm
