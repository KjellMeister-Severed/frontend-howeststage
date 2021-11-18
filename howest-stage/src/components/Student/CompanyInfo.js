import { Component } from 'react';

class CompanyInfo extends Component {
    render() {
        return (
            <article className={"mx-auto w-fit p-4 flex flex-col items-center"}>
                <h2 className={"font-vagbold text-2xl mb-4"}>{this.props.name}</h2>
                <div className={"flex flex-row gap-4"}>
                    <SubInfo heading="Address">
                        <p>{this.props.street}</p>
                        <p>{this.props.postalCode} {this.props.city}</p>
                    </SubInfo>
                    <SubInfo heading="Contact">
                        <p>{this.props.email}</p>
                        <p>{this.props.website}</p>
                    </SubInfo>
                    <SubInfo heading="Looking for">
                        <p>{this.props.lookingFor.replace("\n", " ")}</p>
                    </SubInfo>
                </div>
                <div>
                    {this.props.description}
                </div>
            </article>
        );
    }
}

class SubInfo extends Component {
    render() {
        return (
            <section className={"flex flex-col items-center"}>
                <h3 className={"font-vag underline text-xl"}>{this.props.heading}</h3>
                {this.props.children}
            </section>
        );
    }
}

export default CompanyInfo;
