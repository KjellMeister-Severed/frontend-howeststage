import UniversalHeader from '../../components/UniversalHeader';
import MediumButton from '../../components/MediumButton';
import UniversalFooter from '../../components/UniversalFooter';
import { useParams } from 'react-router';
import CompanyInfo from '../../components/Student/CompanyInfo';



export default function StudentCompanyInfo() {
    const { id } = useParams()

    return (
        <>
            <UniversalHeader className="h-20 flex-initial fixed w-screen" logo={true}>
                <MediumButton
                    to={"/dashboard/student"}
                    className={"justify-self-start hover:text-black p-2"}
                    bg={"bg-magenta"}
                    bgHover={"bg-white"}
                    textColor={"text-white"}>
                    Back
                </MediumButton>
                <MediumButton className={"rounded bg-magenta mr-5 p-2"} textColor={"text-white"}>Logout (todo)</MediumButton>
            </UniversalHeader>
            <main className={"pt-20" }>
                <CompanyInfo id={id}/>
            </main>
            <UniversalFooter className={"h-20 w-screen"} />
        </>
    );
}

