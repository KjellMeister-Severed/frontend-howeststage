import {Component} from "react";

class StudentAppointments extends Component {
    render() {
        return (
                <section className={"bg-black text-white w-1/5 flex-shrink-0 p-2"}>
                    <h2 className="font-vagbold text-xl ">Upcoming meetings</h2>
                    {this.props.children}
                </section>
        )
    }
}

export default StudentAppointments