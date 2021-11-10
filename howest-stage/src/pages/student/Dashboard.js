import Appointment from "../../components/Appointment"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"

const StudentDashboard = () => {
    return (
        <>
            <UniversalHeader className="h-24 flex-initial" subheader="My Appointments">
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 1</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 2</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 3</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 4</MediumButton>
            </UniversalHeader>
            <main className="flex flex-row gap-2">
                <article className={ "bg-black text-white w-1/3 flex-shrink-0 m-2"  }>
                    <h2 className="font-vagbold text-xl ">Upcoming meetings</h2>
                    <Appointment
                        company={ "Google" }
                        date={ new Date() }
                        meeting={"https://meet.jit.si/"} />
                    <Appointment
                        company={"Google"}
                        date={new Date()}
                        meeting={"https://meet.jit.si/"} />
                    <Appointment
                        company={"Google"}
                        date={new Date()}
                        meeting={"https://meet.jit.si/"} />
                    <Appointment
                        company={"Google"}
                        date={new Date()}
                        meeting={"https://meet.jit.si/"} />
                    <Appointment
                        company={"Google"}
                        date={new Date()}
                        meeting={"https://meet.jit.si/"} />
                </article>
                <article className={"flex-shrink p-2"}>
                    <h2 className="font-vagbold text-xl mb-2">Companies open for appointments</h2>
                    <div>
                        <label for="companyQuery">
                            <p className={ "inline mr-2"}>Search:</p>
                            <input type={"text"} placeholder="Search a company..." name="CompanyQuery" />
                        </label>
                    </div>
                    <div>
                        
                    </div>
                </article>
            </main>
        </>
    )
}

export default StudentDashboard
