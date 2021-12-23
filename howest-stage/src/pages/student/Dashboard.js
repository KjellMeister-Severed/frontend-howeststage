import StudentAppointment from "../../components/Student/Appointment"
import CompanyShort from "../../components/Company/Short"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"
import {Component} from "react";
import StudentAppointments from "../../components/Student/Appointments";
import StudentCompanyList from "../../components/Student/Companies";
import {fetchFromBackend, cancelAppointment} from "../../components/Comms";
import { MsalContext } from "@azure/msal-react";

class StudentDashboard extends Component {
    static contextType = MsalContext;

    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            allcompanies: [],
            companies: [],
        };

        this.tokenRequest = {
            scopes: ["user.read"]
        };

        this.deleteAppointment = this.deleteAppointment.bind(this)
    };

    componentDidMount() {
        this.context.instance.setActiveAccount(this.context.accounts[0])

        this.context.instance.acquireTokenSilent(this.tokenRequest).then(response => {
                fetchFromBackend("/api/user/", "GET", response.accessToken).then(data => {this.setState(() => ({
                    isAdmin: data.roles.includes("Administrator")
                }))
            })
        })

        this.context.instance.acquireTokenSilent(this.tokenRequest).then(response => {
            fetchFromBackend("/api/user/"+this.context.accounts[0].username+"/appointments", "GET", response.accessToken).then(data => {this.setState(() => ({
                appointments: data
            }))
            })
        })
        this.context.instance.acquireTokenSilent(this.tokenRequest).then(response => {
            fetchFromBackend("/api/companies", "GET", response.accessToken ).then(data => this.setState(() => ({
                allcompanies: data,
                companies: data
            })));
        })
    }

    deleteAppointment(appointmentId) {
        if(window.confirm("Are you sure you want to cancel this appointment?")) {
            this.context.instance.acquireTokenSilent(this.tokenRequest).then(response => {
                cancelAppointment(response.accessToken,this.context.instance.getActiveAccount().username, appointmentId, () => {
                    this.setState({
                        appointments: this.state.appointments.filter(appointment => appointment.id !== appointmentId)
                    })
                })
            })
        }
    }

    handleSearchFilter = (event) => {
        let filteredList = this.state.allcompanies.filter(company => company.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState((state) => ({
            companies: filteredList,
        }))
    }

    deleteCompany(id) {
        if(window.confirm("Are you sure you want to delete this company?")) {
            this.context.instance.acquireTokenSilent(this.tokenRequest).then(response => {
                fetchFromBackend(`/api/companies/${id}`, "DELETE", response.accessToken).then(() => {
                    alert("Company deleted.");
                    
                    this.setState((state) => ({
                        allcompanies: state.allcompanies.filter(company => company.id !== id),
                        companies: state.companies.filter(company => company.id !== id)
                    }));
                }).catch(() => {
                    alert("Something went wrong.");
                });
            });
        }
    }

    render() {
        const { companies, appointments, isAdmin } = this.state;
        return (
            <>
                <UniversalHeader className="h-20 flex-initial fixed w-screen" subheader={"Welcome, " + this.context.accounts[0].name}>
                    {isAdmin && <MediumButton
                        className={"p-2 justify-self-start hover:text-black"}
                        bg={"bg-magenta"}
                        bgHover={"bg-white"}
                        textColor={"text-white"}
                        to={"/dashboard/admin/addcompany"}>
                        Add company
                    </MediumButton>} 
                    <MediumButton
                        className={"justify-self-start hover:text-black"}
                        bg={"bg-magenta"}
                        bgHover={"bg-white"}
                        textColor={"text-white"}
                        to={"/dashboard/student/profile"}>
                        Profile
                    </MediumButton>
                    <MediumButton
                        className={"p-2 bg-gray-400 rounded bg-magenta mr-5"}
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
                                    cancelFunc={() => this.deleteAppointment(appointment.bookingsId)}
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
                                        {isAdmin &&
                                        <MediumButton
                                        to={`/company/${company.id}/info`}
                                        bg={"bg-gray"}
                                        bgHover={"bg-primary"}
                                        className={"p-2 font-bold font-vag w-fit text-white m-2 mb-0 ml-0"}>
                                        Edit
                                        </MediumButton>
                                        }
                                        {isAdmin &&
                                        <MediumButton
                                            onClick={() => this.deleteCompany(company.id)}
                                            bg={"bg-red"}
                                            bgHover={"bg-primary"}
                                            className={"p-2 font-bold font-vag w-fit text-white m-2 mb-0 ml-0"}>
                                            Delete
                                        </MediumButton>
                                        }
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
