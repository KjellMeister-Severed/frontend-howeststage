import { Component } from 'react'

class CompanyShort extends Component {
    render() { 
        return (
            <section className={ "mt-2 flex flex-col gap-2 border-solid border-b-2 w-3/4"}>
                <h3 className={"text-lg font-vagbold"}>{ this.props.name }</h3>
                <p>{ this.props.location }</p>
                {this.props.children}
            </section>
        );
    }
}
 
export default CompanyShort;
