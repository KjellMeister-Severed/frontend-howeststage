import CompanyAppointment from "../../components/Company/Appointment"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"

const CompanyDashboard = () => {
    return (
        <>
            <UniversalHeader className="h-24 flex-initial" subheader={ "My Appointments"}>
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 1</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 2</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 3</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 4</MediumButton>
            </UniversalHeader>
            <main className={"mx-2 mt-2"}>
                <CompanyAppointment
                    className={"inline-block"}
                    person={"Bo Robbrecht"}
                    time={"16:00"}
                    location={"Online"}
                    study={"Software Engineer"}
                    cv={"https://borobbrecht.be/docs/CV.pdf"}
                    meeting={"https://meet.jit.si/"} />
            </main>
        </>

    )
}

export default CompanyDashboard
