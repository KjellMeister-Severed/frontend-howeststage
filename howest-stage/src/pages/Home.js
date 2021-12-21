import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useNavigate } from 'react-router-dom';
import howest_full from './../images/howest_full.png';
import index_picture from './../images/index_picture.jpg'
import LargeButton from "../components/LargeButton";
import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import StudentDashboard from "./student/Dashboard";
import { useState, useEffect } from "react";
import CompanySignIn from "../components/Company/Signin";

const Home = () => {
    const { instance } = useMsal();
    const [companySignIn, setCompanySignIn] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const companyToken = urlParams.get('companyToken');

        if(companyToken != null) {
            setCookie("companyToken", companyToken, 7);
        }

        if(getCookie("companyToken")) {
            navigate("/dashboard/company");
        }
    });

    return (
        <>
            <UnauthenticatedTemplate>
                <UniversalHeader className="h-24 flex-initial w-screen fixed" logo={true} />
                <main className={"flex flex-col lg:flex-row h-auto flex-auto"}>
                    <aside>
                        <img src={index_picture} alt="People meeting" className={"object-cover lg:h-screen"} />
                    </aside>
                    <article className={"flex flex-col w-3/4 items-center mx-auto lg:justify-center"}>
                        <figure className={"flex flex-col w-60 items-center"}>
                            <img src={howest_full} alt="HoWest" />
                            <figcaption>
                                <span className={"font-vagbold text-xl tracking-wide text-magenta"}>Stage Booker </span>Login
                            </figcaption>
                        </figure>
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
            <nav className={"flex flex-row items-center m-2 lg:flex-col gap-2 lg:gap-0.5"}>
                <LargeButton onClick={() => instance.loginRedirect()} bg={"bg-blue"}>
                    Login as student
                </LargeButton>
                <p className={"font-vagbold"}>or</p>
                <LargeButton bg={"bg-blue"} onClick={() => setCompanySignIn(true)}>
                    Login as company
                </LargeButton>
            </nav>
        )
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export default Home
