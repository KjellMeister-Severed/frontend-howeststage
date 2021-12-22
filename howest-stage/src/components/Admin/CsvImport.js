import { Component } from "react";

class CsvImport extends Component {
    render() {
        return (
            <>
                <h1 className="font-vagbold text-xl mt-2">Import company CSV</h1>
                <form>
                    <label for="csv"></label>
                    <input type="file" name="csv" id="csv"/>
                    <input type="submit" value="Upload CSV" className="block rounded bg-magenta mt-3 mb-3 text-white ml-auto mr-auto"/>
                    <p className="text-green text-center">Import succesful.</p>
                </form>
            </>
        )
    }
}

export default CsvImport
