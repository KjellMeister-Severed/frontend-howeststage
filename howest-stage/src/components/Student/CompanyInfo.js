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
        console.log(company)
        return company.lookingfor.map(item => {
            let res = (<p key={i} className={props.className}>{item}</p>)
            i = i + 1
            return res
        })
    }

    return(
        <article className={"mx-auto w-fit p-4 flex flex-col items-center"}>
            <h2 className={"font-vagbold text-2xl mb-4"}>{company.name}</h2>
            <div className={"flex flex-row gap-4"}>
                <SubInfo heading="Address">
                    <p>{company.street}</p>
                    <p>{company.postalCode} {company.city}</p>
                </SubInfo>
                <SubInfo heading="Contact">
                    <p>{company.email}</p>
                    <p>{company.website}</p>
                </SubInfo>
                <SubInfo heading="Looking for">
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
        <section className={"flex flex-col items-center mb-2"}>
            <h3 className={"font-vag underline text-xl"}>{props.heading}</h3>
            {props.children}
        </section>
    );
}


