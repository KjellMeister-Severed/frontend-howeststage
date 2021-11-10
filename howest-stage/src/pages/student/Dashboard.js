import MediumButton from "../../components/MediumButton"
import UniversalHeader from "../../components/UniversalHeader"

const StudentDashboard = () => {
    return (
        <>
            <UniversalHeader className="h-24 flex-initial">
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 1</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 2</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 3</MediumButton>
                <MediumButton to={"#"} className={"border-2 border-white rounded"}>Link 4</MediumButton>
            </UniversalHeader>
            <main>
                <h1>Congrats! You made it to the student dashboard.</h1>
            </main>
        </>
    )
}

export default StudentDashboard
