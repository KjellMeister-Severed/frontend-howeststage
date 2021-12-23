import { Component } from "react/cjs/react.production.min"
import { fetchFromBackend } from "../../components/Comms"
import CompanyAppointment from "../../components/Company/Appointment"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"
import { getCookie, setCookie } from "../../services/cookies";

class CompanyDashboard extends Component {

    constructor(props) {
        super(props);
        this.companyToken = getCookie("companyToken");
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
        ).catch(() => {
            this.logout();
        })
    }

    cancelAppointment(userId, appointmentId) {
        if(window.confirm("Are you sure you want to cancel this appointment?")) {
            fetchFromBackend(`/api/user/${userId}/appointments/${appointmentId}`, "DELETE", 
            this.companyToken)
            .then(res => {
                if(res.result) {
                    this.setState(state => ({
                        appointments: state.appointments.filter(appointment => appointment.bookingsId !== appointmentId)
                    }));
                }
            });
        }
    }

    render() {
        const { appointments } = this.state;

        return (
            <>
                <UniversalHeader className="h-24 flex-initial" subheader={ "My Appointments"}>
                    <MediumButton className={"border-2 border-white rounded"} textColor={"text-white"}
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
                            meeting={"https://meet.jit.si/" + appointment.id + "/" + appointment.company.name.replace(' ', '')} 
                            cancelFunction={() => this.cancelAppointment(appointment.customer.id, appointment.bookingsId)}/>
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
