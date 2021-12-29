import UniversalHeader from "../../components/UniversalHeader";
import MediumButton from "../../components/MediumButton";
import {useParams} from "react-router";
import {useState} from "react";

const EditCompany = () => {
    //todo: make the default values to values that are already in backend.
    const { id } = useParams()
    const [name, setName] = useState("set this to name already in backend...");
    const [address, setAddress] = useState("set this to address already in backend...");
    const [city, setCity] = useState("set this to city already in backend...");
    const [website, setWebsite] = useState("set this to website already in backend...");
    const [description, setDescription] = useState("set this to description already in backend...");
    const [lookingFor, setLookingFor] = useState("set this to lookingfor already in backend...");

    function handleSubmit(e){
        e.preventDefault()
        console.log("a state item: " + name)
    }
    return (
        <>
            <UniversalHeader className={""} subheader={"Edit my company"}>
                <MediumButton
                    className={"p-2 justify-self-start hover:text-black"}
                    bg={"bg-magenta"}
                    bgHover={"bg-white"}
                    textColor={"text-white"}
                    to={"/dashboard/company"}>
                    Back
                </MediumButton>
                <MediumButton
                    className={"p-2 bg-gray-400 rounded bg-magenta mr-5"}
                    onClick={() => this.context.instance.logoutRedirect()}
                    textColor={"text-white"}>
                    Logout
                </MediumButton>
            </UniversalHeader>
            <main className={"mx-auto"}>
                <section className={"w-3/4 mx-auto my-8"}>
                    <h1 className={"bg-teal text-white p-4 text-2xl font-bold font-vagbold"}>ID 5: Title todo: make this actual company name from context</h1>
                    <div className={"bg-teal-light w-full p-4"}>
                        <div className={"flex flex-col w-full"}>
                            <label htmlFor={"companyname"}>Your Company Name:</label>
                            <input type="text" id={"companyname"} value={name} onChange={e => setName(e.target.value)} className={"border border-primary rounded p-1 focus:outline-none"}/>
                        </div>
                        <div className={"flex flex-col w-full mt-4"}>
                            <label htmlFor={"address"}>Street Name & Number:</label>
                            <input type="text" id={"address"} value={address} onChange={e => setAddress(e.target.value)} className={"border border-primary rounded p-1 focus:outline-none"}/>
                        </div>
                        <div className={"flex flex-col w-full mt-4"}>
                            <label htmlFor={"city"}>City in which your company is located:</label>
                            <input type="text" id={"city"} value={city} onChange={e => setCity(e.target.value)} className={"border border-primary rounded p-1 focus:outline-none"}/>
                        </div>
                        <div className={"flex flex-col w-full mt-4"}>
                            <label htmlFor={"site"}>Website URL:</label>
                            <input type="text" id={"site"} value={website} onChange={e => setWebsite(e.target.value)} className={"border border-primary rounded p-1 focus:outline-none"}/>
                        </div>
                        <div className={"flex flex-col w-full mt-4"}>
                            <label htmlFor={"site"}>A description for your company:</label>
                            <textarea id={"site"} value={description} onChange={e => setDescription(e.target.value)} className={"border h-20 border-primary rounded p-1 focus:outline-none"}/>
                        </div>
                        <div className={"flex flex-col w-full mt-4"}>
                            <label htmlFor={"site"}>Describe what you are looking for:</label>
                            <textarea id={"site"} value={lookingFor} onChange={e => setLookingFor(e.target.value)} className={"border h-20 border-primary rounded p-1 focus:outline-none"}/>
                        </div>
                        <button onClick={handleSubmit} className={"w-full bg-magenta text-white font-bold mt-4 rounded p-2"}>
                            Submit
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default EditCompany