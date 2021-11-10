import { Component } from 'react'

class CompanyShort extends Component {
    render() { 
        return (
            <section className={ "m-2 p-2 flex flex-col gap-1 border-white border-solid border-b-2 w-max"}>
                <h3>{ this.props.name }</h3>
                <p>{ this.props.location }</p>
                { this.props.children}
            </section>
        );
    }
}
 
export default CompanyShort;
