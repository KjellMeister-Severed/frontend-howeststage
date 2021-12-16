import { Component } from "react";
import MediumButton from "../MediumButton";

class StudentAppointment extends Component {
    render() {
        return (
            <section className={ "m-2 p-2 flex flex-col gap-1 border-white border-solid border-b-2"}>
                <h3 className={ "my-2 text-lg"}>{this.props.company}</h3>
                <p>{this.props.date
                    .toLocaleDateString("nl-BE")
                    .concat(" at ".concat(this.props.date.getHours()<10?'0':'' , this.props.date.getHours(), ":" , this.props.date.getMinutes()<10?'0':'', this.props.date.getMinutes())
                    )}</p>
                <MediumButton to={this.props.meeting}
                    alt={"Link for meeting with ".concat(this.props.company)}
                    className={"w-fit hover:text-black my-1"}
                    bg="bg-magenta"
                    bgHover="bg-white"
                    textColor={"text-white"}>
                    Meeting Link
                </MediumButton>
            </section>
        );
    }
}

export default StudentAppointment;
