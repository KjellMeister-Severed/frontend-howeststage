import CompanyAppointment from "../../components/CompanyAppointment"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"

const CompanyDashboard = () => {
    return (
        <>
            <UniversalHeader className="h-24 flex-initial">
                    <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 1</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 2</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 3</MediumButton>
                    <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 4</MediumButton>
                </UniversalHeader>
            <main>
                <CompanyAppointment
                    className={ "inline-block"}
                    person={"Bo Robbrecht"}
                    time={"16:00"}
                    location={"Online"}
                    study={"Software Engineer"}
                    cv={"https://borobbrecht.be/docs/CV.pdf"}
                    meeting={ "https://meet.jit.si/"} />
            </main>
        </>
        
    )
}

export default CompanyDashboard
