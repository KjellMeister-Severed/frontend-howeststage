import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import howest_full from './../images/howest_full.png';
import index_picture from './../images/index_picture.jpg'
import LargeButton from "../components/LargeButton";
import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import StudentDashboard from "./student/Dashboard";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/dashboard/company')
    }

    return (
        <>
            <UnauthenticatedTemplate>
                <main className={"flex flex-col md:flex-row h-auto flex-auto"}>
                    <aside>
                        <img src={index_picture} alt="People meeting" className={"object-cover h-1/3 md:h-screen"}/>
                    </aside>
                    <article className={"flex flex-col w-full items-center md:mx-auto md:justify-center"}>
                        <div className={"mb-8 mt-4 w-full"}>
                            <h3 className={"text-xl text-magenta font-vag text-center"}>Howest Booking</h3>
                            <h1 className={"text-4xl font-vagbold text-center"}>Welcome Back!</h1>
                            <h2 className={"text-lg font-vag text-center"}>login</h2>
                        </div>
                        <nav className={"w-3/4 flex flex-col items-center"}>
                            <LargeButton onClick={() => instance.loginRedirect()} className={"bg-teal rounded font-bold text-white p-2 text-center w-full mb-2 md:w-1/3 md:mx-auto"}>
                                As a student
                            </LargeButton>
                            <p className={"font-vag text-center text-gray-400"}>or</p>
                            <LargeButton onClick={redirect} className={"bg-black rounded font-bold text-white p-2 w-full text-center mt-2 md:w-1/3 md:mx-auto"}>
                                As a company
                            </LargeButton>
                        </nav>
                    </article>
                </main>
                <UniversalFooter className={"h-12 w-screen"} />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
                <StudentDashboard/>
            </AuthenticatedTemplate>
        </>
    )
}

export default Home
