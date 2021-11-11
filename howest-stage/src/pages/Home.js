import howest_full from './../images/howest_full.png';
import index_picture from './../images/index_picture.jpg'
import LargeButton from "../components/LargeButton";
import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";

const Home = () => {
    return (
        <>
            <UniversalHeader className="h-24 flex-initial w-screen fixed" logo={ true }/>
            <main className={"flex flex-col lg:flex-row h-auto flex-auto"}>
                <aside>
                    <img src={index_picture} alt="People meeting" className={"object-cover lg:h-screen"}/>
                </aside>
                <article className={"flex flex-col w-3/4 items-center mx-auto lg:justify-center"}>
                    <figure className={"flex flex-col w-60 items-center"}>
                        <img src={howest_full} alt="HoWest"/>
                        <figcaption>
                            <span className={"font-vagbold text-xl tracking-wide text-magenta"}>Stage Booker </span>Login
                        </figcaption>
                    </figure>
                    <nav className={"flex flex-row items-center m-2 lg:flex-col gap-2 lg:gap-0.5"}>
                        <LargeButton to={"/dashboard/student"} bg={"bg-blue"}>
                            Login as student
                        </LargeButton>
                        <p className={"font-vagbold"}>or</p>
                        <LargeButton to={"/dashboard/company"} bg={"bg-blue"}>
                            Login as company
                        </LargeButton>
                    </nav>
                </article>
            </main>
            <UniversalFooter className={"h-20 w-screen"} />
        </>
    )
}

export default Home
