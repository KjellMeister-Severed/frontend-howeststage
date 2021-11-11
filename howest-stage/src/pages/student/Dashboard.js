import StudentAppointment from "../../components/Student/Appointment"
import CompanyShort from "../../components/Company/Short"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"
import {Component} from "react";
import StudentAppointments from "../../components/Student/Appointments";

class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
        };
    };

    handleSearchFilter(){

    }

    componentDidMount() {
        fetch('http://localhost:3001/api/companies')
            .then(response => response.json())
            .then(data => this.setState(() => ({
                companies: data,
            })));
    }

    render() {
        const { companies } = this.state;

        return (
            <>
                <UniversalHeader className="h-20 flex-initial fixed w-screen" subheader={"My Appointments"}>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link
                        1</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link
                        2</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link
                        3</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link
                        4</MediumButton>
                </UniversalHeader>
                <main className="flex flex-row pt-20 gap-2 mt-18">
                    <StudentAppointments >
                        <StudentAppointment
                        company={"Google"}
                        date={new Date()}
                        meeting={"https://meet.jit.si/"}/>
                        <StudentAppointment
                            company={"Google"}
                            date={new Date()}
                            meeting={"https://meet.jit.si/"}/>
                        <StudentAppointment
                            company={"Google"}
                            date={new Date()}
                            meeting={"https://meet.jit.si/"}/>
                        <StudentAppointment
                            company={"Google"}
                            date={new Date()}
                            meeting={"https://meet.jit.si/"}/>
                        <StudentAppointment
                            company={"Google"}
                            date={new Date()}
                            meeting={"https://meet.jit.si/"}/>
                    </StudentAppointments>
                    <section className={"flex-shrink p-2 w-3/4"}>
                        <h2 className="font-vagbold text-xl mb-2">Companies open for appointments</h2>
                        <span>
                            <p className={"inline mr-2"}>Search:</p>
                            <input type={"text"} placeholder="Search a company..." name="CompanyQuery"
                                   className={"border-solid border-2 p-1"}/>
                        </span>
                        <div>
                            {
                                companies.map(company =>
                                    <CompanyShort
                                    key={company.id}
                                    name={company.name}
                                    location={company.city}>
                                        <p className={"truncate ..."}>{company.description}</p>
                                    </CompanyShort>
                                )
                            }
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default StudentDashboard
