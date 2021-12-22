import { Component } from "react";
import { MsalContext } from "@azure/msal-react";

class CsvImport extends Component {
    static contextType = MsalContext;

    constructor(props) {
        super(props);

        this.state = {
            output: <p className="text-center"></p>,
            csv: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.files[0]
        });
    }

    handleSubmit(e){
        e.preventDefault()

        let tokenRequest = {
            scopes: ["user.read"]
        };
        
        console.log(this.state);

        if(this.state.csv === "" || this.state.csv == null) {
            this.setState({
                output: <p className="text-red text-center">You have to upload a CSV file.</p>
            });
            return;
        }

        const file = this.state.csv;
        if(file.type.includes("csv")) {
            this.setState({
                output: <p className="text-red text-center">The file you are trying to upload needs to be a CSV file.</p>
            });
        }

        // Upload the CSV file to our back-end
        this.context.instance.acquireTokenSilent(tokenRequest).then(response => { 
        });
    }

    render() {
        return (
            <>
                <h1 className="font-vagbold text-xl mt-2">Import company CSV</h1>
                <form>
                    <label htmlFor="csv"></label>
                    <input type="file" name="csv" id="csv" onChange={this.handleChange} accept=".csv" required/>
                    <input type="submit" value="Upload CSV" onClick={this.handleSubmit} className="block rounded bg-magenta mt-3 mb-3 text-white ml-auto mr-auto"/>
                    {this.state.output}
                </form>
            </>
        )
    }
}

export default CsvImport
