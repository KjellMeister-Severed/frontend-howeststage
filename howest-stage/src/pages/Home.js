import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import howest_full from './../images/howest_full.png';
import index_picture from './../images/index_picture.jpg'
import LargeButton from "../components/LargeButton";
import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import StudentDashboard from "./student/Dashboard";
import { useState } from "react";
import CompanySignIn from "../components/Company/Signin";


const Home = () => {
    const { instance } = useMsal();
    const [companySignIn, setCompanySignIn] = useState(false)

    return (
        <>
            <UnauthenticatedTemplate>
                <main className={"flex flex-col md:flex-row h-auto flex-auto"}>
                    <aside>
                        <img src={index_picture} alt="People meeting" className={"object-cover h-1/3 md:h-screen"} />
                    </aside>
                    <article className={"flex flex-col w-full items-center md:mx-auto md:justify-center"}>
                        <h3 className={"text-xl text-magenta font-vag text-center mt-8"}>Howest Booking</h3>
                        <h1 className={"text-4xl font-vagbold text-center"}>Welcome Back!</h1>
                        <h2 className={"text-lg font-vag text-center mb-8"}>login</h2>
                        {
                            (companySignIn)
                                ? <CompanySignIn />
                                : <RoleSelection />
                        }
                    </article>
                </main>
                <UniversalFooter className={"h-12 w-screen"} />
            </UnauthenticatedTemplate>

            <AuthenticatedTemplate>
                <StudentDashboard />
            </AuthenticatedTemplate>
        </>
    )

    function RoleSelection() {
        return (
            <nav className={"w-3/4 flex flex-col items-center"}>
                <LargeButton className={"bg-teal rounded font-bold text-white p-2 text-center w-full mb-2 md:w-1/3 md:mx-auto"} onClick={() => instance.loginRedirect()}>
                    Login as student
                </LargeButton>
                <p className={"font-vagbold"}>or</p>
                <LargeButton className={"bg-black rounded font-bold text-white p-2 w-full text-center mt-2 md:w-1/3 md:mx-auto"} onClick={() => setCompanySignIn(true)}>
                    Login as company
                </LargeButton>
            </nav>
        )
    }
}

export default Home
