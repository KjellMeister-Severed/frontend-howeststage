import { useEffect, useState } from 'react';
import { fetchFromBackend } from "../Comms";

export default function CompanyInfo(props){
    let [company, setCompany] = useState('')

    
    useEffect(() => {
        fetchFromBackend(`/api/companies/${props.id}`)
            .then(json => {
                json.lookingfor = json.lookingfor.split(/\r?\n/)
                setCompany(json)
            })
    }, [props.id])

    function IterateLF(props) {
        let i = 0
        return company.lookingfor.map(item => {
            let res = (<p key={i} className={props.className}>{item}</p>)
            i = i + 1
            return res
        })
    }

    return(
        <article className={"mx-auto w-fit p-4 flex flex-col items-center"}>
            <div className={"w-full h-40 bg-gradient-to-tr from-white to-teal flex justify-center items-center"}>
                <h2 className={"font-vagbold text-6xl mb-4 text-white"}>{company.name}</h2>
            </div>
            <div className={"flex flex-col md:flex-row w-full gap-4"}>
                <SubInfo heading="Address" bg={"bg-primary"} textColor={"text-white"}>
                    <p>{company.street}</p>
                    <p>{company.postalCode} {company.city}</p>
                </SubInfo>
                <SubInfo heading="Contact" bg={"bg-teal"} textColor={"text-white"}>
                    <p>{company.email}</p>
                    <p>{company.website}</p>
                </SubInfo>
                <SubInfo heading="Looking for" bg={"bg-yellow"} textColor={"text-black"}>
                    {company !== '' ? <IterateLF/> : <p>Loading...</p> }
                </SubInfo>
            </div>
            <div>
                {company.description}
            </div>
        </article>
    )
}


function SubInfo(props) {
    return (
        <section className={"flex flex-col w-full items-center mb-2 mt-4"}>
            <h3 className={"font-vagbold py-2 text-xl w-full text-center " + props.bg + " " + props.textColor}>{props.heading}</h3>
            <div className={props.bg + "-light w-full overflow-y-scroll p-2 h-40  " + props.textcolor}>
                {props.children}
            </div>
        </section>
    );
}


