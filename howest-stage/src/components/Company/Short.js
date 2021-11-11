import { Component } from 'react'

class CompanyShort extends Component {
    render() { 
        return (
            <section className={ "m-2 p-2 flex flex-col gap-2 border-solid border-b-2 w-max"}>
                <h3 className={"text-lg font-vagbold"}>{ this.props.name }</h3>
                <p>{ this.props.location }</p>
                {this.props.children}
            </section>
        );
    }
}
 
export default CompanyShort;
