import {Component} from "react";

class StudentCompanyList extends Component {
    render() {
        return (
            <section className={"flex-shrink p-2 w-4/6"}>
                <h2 className="font-vagbold text-xl mb-2">Companies open for appointments</h2>
                <span>
                    <input type={"text"} placeholder="Search for a company or a location..." onChange={this.props.onChange}
                           name="CompanyQuery"
                           className={"border-solid border-2 p-1 w-5/6 border-2 rounded border-black"}/>
                </span>
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default StudentCompanyList
