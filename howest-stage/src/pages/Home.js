import howest_full from './../images/howest_full.png';
import index_picture from './../images/index_picture.jpg'
import LargeButton from "../components/LargeButton";

const Home = () => {
    return (
        <main className={"flex flex-col lg:flex-row"}>
            <aside>
                <img src={index_picture} alt="People meeting" className={"object-cover lg:h-screen"}/>
            </aside>
            <article className={"flex flex-col w-3/4 items-center mx-auto lg:justify-around"}>
                <figure className={"flex flex-col w-60 items-center"}>
                    <img src={howest_full} alt="HoWest"/>
                    <figcaption>
                        <span className={"font-vagbold text-xl tracking-wide text-magenta"}>Stage Booker </span>Login
                    </figcaption>
                </figure>
                <nav className={"flex flex-row items-center m-2 lg:flex-col gap-2 lg:gap-0.5"}>
                    <LargeButton to={"/student/dashboard"}>
                        Login as student
                    </LargeButton>
                    <p className={"font-vagbold"}>or</p>
                    <LargeButton to={"/company/dashboard"}>
                        Login as company
                    </LargeButton>
                </nav>
            </article>
        </main>
    )
}

export default Home
