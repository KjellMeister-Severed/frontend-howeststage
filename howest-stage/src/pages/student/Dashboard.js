import Appointment from "../../components/Appointment"
import CompanyShort from "../../components/Company/Short"
import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"

const StudentDashboard = () => {
    return (
        <>
            <UniversalHeader className="h-24 flex-initial">
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 1</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 2</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 3</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"} textColor={"text-white"}>Link 4</MediumButton>
            </UniversalHeader>
            <main className="flex flex-row gap-2">
                <article className={ "bg-black text-white w-1/3 flex-shrink-0 p-2"  }>
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
                            <input type={"text"} placeholder="Search a company..." name="CompanyQuery" className={ "border-solid border-2 p-1"} />
                        </label>
                    </div>
                    <div>
                        <CompanyShort
                            name={"Deloitte"}
                            location={ "Brussels" }>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                        <CompanyShort
                            name={"Deloitte"}
                            location={"Brussels"}>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                        <CompanyShort
                            name={"Deloitte"}
                            location={"Brussels"}>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                        <CompanyShort
                            name={"Deloitte"}
                            location={"Brussels"}>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                        <CompanyShort
                            name={"Deloitte"}
                            location={"Brussels"}>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                        <CompanyShort
                            name={"Deloitte"}
                            location={"Brussels"}>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                        <CompanyShort
                            name={"Deloitte"}
                            location={"Brussels"}>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                        <CompanyShort
                            name={"Deloitte"}
                            location={"Brussels"}>
                            <p>Welcome to Deloite. Lorem Ipsum.....</p>
                        </CompanyShort>
                    </div>
                </article>
            </main>
        </>
    )
}

export default StudentDashboard
