import { Component } from "react";
import MediumButton from "../../components/MediumButton";
import UniversalHeader from "../../components/UniversalHeader";
import { MsalContext } from "@azure/msal-react";
import CsvImport from "../../components/Admin/CsvImport";
import AddCompanyForm from "../../components/Admin/AddCompanyForm";

class AddCompany extends Component {
    static contextType = MsalContext;

    componentDidMount() {
        this.context.instance.setActiveAccount(this.context.accounts[0])
    }

    render() {
        return (
            <>
                <UniversalHeader className="h-20 flex-initial fixed w-screen" subheader={"Welcome, " + this.context.accounts[0].name}>
                    <MediumButton
                        className={"border-2 border-white rounded bg-magenta mr-5"}
                        onClick={() => this.context.instance.logoutRedirect()}
                        textColor={"text-white"}>
                        Logout
                    </MediumButton>
                </UniversalHeader>
                <main className="flex flex-col items-center pt-20 gap-2 mt-18 ml-3">
                    <MediumButton
                        to={"/dashboard/company"}
                        className={"border-2 border-white rounded bg-magenta ml-3 mt-3 self-start"}
                        textColor={"text-white"}>
                        Back
                    </MediumButton>
                    <div className="w-1/2 bg-yellow-light flex flex-col items-center my-5 py-3">
                        <CsvImport/>
                        <hr className="w-3/4 border-1 border-black my-2"/>
                        <AddCompanyForm/>
                    </div>
                </main>
            </>
        )
    }
}


export default AddCompany;
