import { Component } from "react/cjs/react.production.min"
import { fetchFromBackend } from "../../components/Comms"
import CompanyAppointment from "../../components/Company/Appointment"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"
import { getCookie, setCookie } from "../../services/cookies";

class CompanyDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
        };
    };

    componentDidMount() {
        const token = getCookie("companyToken");
        fetchFromBackend("/api/companies/appointments", "GET", token).then(data => 
            {
                this.setState(() => ({
                    appointments: data
                }));
            }
        )
    }

    render() {
        const { appointments } = this.state;

        return (
            <>
                <UniversalHeader className="h-24 flex-initial" subheader={ "My Appointments"}>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 1</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 2</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 3</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}
                    onClick={this.logout}>Logout</MediumButton>
                </UniversalHeader>
                <main className={"mx-2 mt-2"}>
                    {
                        appointments.map(appointment => 
                            <CompanyAppointment
                            key={appointment.id}
                            bookingsId={appointment.bookingsId}
                            className={"inline-block"}
                            person={appointment.customer.name}
                            personId={appointment.customer.id}
                            time={appointment.startTime}
                            location={"Online"}
                            meeting={"https://meet.jit.si/" + appointment.id + "/" + appointment.company.name.replace(' ', '')} />
                        )
                    }
                </main>
            </>
        )
    }

    logout() {
        setCookie("companyToken", "", 0);
        window.location.href = "/";
    }
}

export default CompanyDashboard
