import { Component } from 'react'

class CompanyShort extends Component {
    render() { 
        return (
            <section className={ "mt-2 flex flex-col border-solid border-b-2 mb-0 w-5/6"}>
                <h3 className={"text-xl font-vagbold"}>{ this.props.name }</h3>
                <p className={"text-magenta font-vag font-bold"}>{ this.props.location }</p>
                {this.props.children}
            </section>
        );
    }
}
 
export default CompanyShort;
