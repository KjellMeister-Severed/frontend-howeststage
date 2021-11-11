import {Component} from "react";
import StudentAppointment from "./Appointment";

class StudentAppointments extends Component {
    constructor(props) {
        super(props);
    }

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