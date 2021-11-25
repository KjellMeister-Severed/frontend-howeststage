import {Component} from "react";

class StudentCompanyList extends Component {
    render() {
        return (
            <section className={"flex-shrink p-2 w-3/4"}>
                <h2 className="font-vagbold text-xl mb-2">Companies open for appointments</h2>
                <span>
                    <p className={"inline mr-2"}>Search:</p>
                    <input type={"text"} placeholder="Search a company..." onChange={this.props.onChange}
                           name="CompanyQuery"
                           className={"border-solid border-2 p-1"}/>
                </span>
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default StudentCompanyList
