import {useEffect, useState} from 'react';

export default function CompanyInfo(props){
    let [company, setCompany] = useState('')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_ENDPOINT}:${process.env.REACT_APP_BACK_END_PORT}/api/companies/${props.id}`)
            .then(data => data.json())
            .then(json => {
                json.lookingfor = json.lookingfor.split(/\r?\n/)
                setCompany(json)
            })
    }, [props.id])

    function iterateLF(){
        let i = 0
        return company.lookingfor.map(item => {
            let res = (<p key={i}>{item}</p>)
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
                    {
                        iterateLF()
                    }
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
        <section className={"flex flex-col items-center"}>
            <h3 className={"font-vag underline text-xl"}>{props.heading}</h3>
            {props.children}
        </section>
    );
}
