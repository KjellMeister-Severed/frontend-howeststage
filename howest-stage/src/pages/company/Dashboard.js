import { Component } from "react/cjs/react.production.min"
import { fetchFromBackend } from "../../components/Comms"
import CompanyAppointment from "../../components/Company/Appointment"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"

class CompanyDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
        };
    };

    componentDidMount() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOjE0MCwiaWF0IjoxNjM5NjU4MDY5LCJleHAiOjE2Mzk3NDQ0Njl9.lafq0br9UO7qbafOtY_96ImZxNmRV0cNTU61qrwyOoA";
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
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 4</MediumButton>
                </UniversalHeader>
                <main className={"mx-2 mt-2"}>
                    {
                        appointments.map(appointment => 
                            <CompanyAppointment
                            key={appointment.id}
                            className={"inline-block"}
                            person={appointment.customer.name}
                            time={appointment.startTime}
                            location={"Online"}
                            cv={"https://borobbrecht.be/docs/CV.pdf"}
                            meeting={"https://meet.jit.si/"} />
                        )
                    }
                </main>
            </>
        )
    }
}

export default CompanyDashboard
