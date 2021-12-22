import StudentAppointment from "../../components/Student/Appointment"
import CompanyShort from "../../components/Company/Short"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"
import {Component} from "react";
import StudentAppointments from "../../components/Student/Appointments";
import StudentCompanyList from "../../components/Student/Companies";
import {fetchFromBackend} from "../../components/Comms";
import { MsalContext } from "@azure/msal-react";

class StudentDashboard extends Component {
    static contextType = MsalContext;

    constructor(props) {
        super(props);
        this.state = {
            allcompanies: [],
            companies: [],
        };
    };

    componentDidMount() {
        this.context.instance.setActiveAccount(this.context.accounts[0])
        let tokenRequest = {
            scopes: ["user.read"]
        };
        this.context.instance.acquireTokenSilent(tokenRequest).then(response => {
            fetchFromBackend("/api/user/"+this.context.accounts[0].username+"/appointments", "GET", response.accessToken).then(data => {this.setState(() => ({
                appointments: data
            }))
            console.log(data)})
        })
        this.context.instance.acquireTokenSilent(tokenRequest).then(response => {
            fetchFromBackend("/api/companies", "GET", response.accessToken ).then(data => this.setState(() => ({
                allcompanies: data,
                companies: data
            })));
        })
    }

    handleSearchFilter = (event) => {
        let filteredList = this.state.allcompanies.filter(company => company.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState((state) => ({
            companies: filteredList,
        }))
    }

    render() {
        const { companies, appointments } = this.state;
        return (
            <>
                <UniversalHeader className="h-20 flex-initial fixed w-screen" subheader={"Welcome, " + this.context.accounts[0].name}>
                    <MediumButton
                        className={"justify-self-start hover:text-black"}
                        bg={"bg-magenta"}
                        bgHover={"bg-white"}
                        textColor={"text-white"}
                        to={"/dashboard/student/profile"}>
                        Add company
                    </MediumButton> 
                    <MediumButton
                        className={"justify-self-start hover:text-black"}
                        bg={"bg-magenta"}
                        bgHover={"bg-white"}
                        textColor={"text-white"}
                        to={"/dashboard/student/profile"}>
                        Profile
                    </MediumButton>
                    <MediumButton
                        className={"border-2 border-white rounded bg-magenta mr-5"}
                        onClick={() => this.context.instance.logoutRedirect()}
                        textColor={"text-white"}>
                        Logout
                    </MediumButton>
                </UniversalHeader>
                <main className="flex flex-row pt-20 gap-2 mt-18">
                    <StudentAppointments >
                        {
                            appointments !== undefined ?
                            appointments.map(appointment =>
                                <StudentAppointment
                                    key={appointment.id}
                                    company={appointment.company.name}
                                    date={new Date(appointment.startTime)}
                                    meeting={"https://meet.jit.si/" + appointment.id + "/" + appointment.company.name.replace(' ', '')}
                                />) : <p className={"top-2"}>loading appointments...</p>
                        }

                    </StudentAppointments>
                    <StudentCompanyList onChange={this.handleSearchFilter}>
                    {
                        companies.map(company =>
                            <CompanyShort
                                key={company.id}
                                name={company.name}
                                location={company.city}>
                                <p className={"font-vag truncate ..."}>{company.description}</p>
                                <div className={"flex mt-3 mb-4 justify-between items-center"}>
                                    <div>
                                        <MediumButton
                                            to={`/company/${company.id}/info`}
                                            bg={"bg-magenta"}
                                            bgHover={"bg-primary"}
                                            className={"p-2 font-bold font-vag w-fit text-white m-2 mb-0 ml-0"}>
                                            More information
                                        </MediumButton>
                                        <MediumButton
                                            to={company.bookingsUrl}
                                            bgHover={"bg-none"}
                                            className={"p-2 text-teal font-vag w-fit mb-2 mr-2 mt-2 ml-0 pl-0 pb-0 font-bold h-fit hover:underline"}>
                                            Book a meeting...
                                        </MediumButton>
                                    </div>
                                    <div>
                                        <MediumButton
                                            to={`/company/${company.id}/info`}
                                            bg={"bg-gray"}
                                            bgHover={"bg-primary"}
                                            className={"p-2 font-bold font-vag w-fit text-white m-2 mb-0 ml-0"}>
                                            Edit
                                        </MediumButton>
                                        <MediumButton
                                            to={`/company/${company.id}/info`}
                                            bg={"bg-red"}
                                            bgHover={"bg-primary"}
                                            className={"p-2 font-bold font-vag w-fit text-white m-2 mb-0 ml-0"}>
                                            Delete
                                        </MediumButton>
                                    </div>
                                </div>
                            </CompanyShort>
                        )
                    }
                    </StudentCompanyList>
                </main>
            </>
        )
    }
}

export default StudentDashboard
