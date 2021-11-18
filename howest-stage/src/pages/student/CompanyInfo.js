import UniversalHeader from '../../components/UniversalHeader';
import MediumButton from '../../components/MediumButton';
import UniversalFooter from '../../components/UniversalFooter';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CompanyInfo from '../../components/Student/CompanyInfo';



export default function StudentCompanyInfo() {
    const { id } = useParams()
    let [company, setCompany] = useState('')
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_ENDPOINT}:${process.env.REACT_APP_BACK_END_PORT}/api/companies/${id}`)
            .then(data => data.json())
            .then(json => setCompany(json))
    }, [id])

    return (
        <>
            <UniversalHeader className="h-20 flex-initial fixed w-screen" logo={true}>
                <MediumButton
                    to={"/dashboard/student"}
                    className={"justify-self-start hover:text-black"}
                    bg={"bg-magenta"}
                    bgHover={"bg-white"}
                    textColor={"text-white"}>
                    Back
                </MediumButton>
                <MediumButton className={"border-2 border-white rounded bg-magenta mr-5"} textColor={"text-white"}>Logout (todo)</MediumButton>
            </UniversalHeader>
            <main className={"pt-20" }>
                { console.log(company)}
                <CompanyInfo
                    name={company.name}
                    street={company.address}
                    postalCode={company.postalcode}
                    city={company.city}
                    email={company.email}
                    website={company.website}
                    lookingFor={company.lookingfor}
                >
                    { company.description}
                </CompanyInfo>
                
            </main>
            <UniversalFooter className={"h-20 w-screen"} />
        </>
    );
}

