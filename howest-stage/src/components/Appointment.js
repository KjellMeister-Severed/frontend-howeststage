import { Component } from "react";
import MediumButton from "./MediumButton";

class Appointment extends Component {
    render() { 
        return (
            <section className={ "m-2 p-2 flex flex-col gap-1 border-white border-solid border-b-2 w-max"}>
                <h3 className={ "my-2 text-lg"}>{this.props.company}</h3>
                <p className={ "mb-2" }>{this.props.date
                    .toLocaleDateString("nl-BE")
                    .concat(" at ".concat(this.props.date.toTimeString())
                    )}</p>
                <MediumButton to={this.props.meeting}
                    alt={"Link for meeting with ".concat(this.props.company)}
                    className={"w-fit hover:text-black mb-2"}
                    bg="bg-magenta"
                    bgHover="bg-white">
                    Meeting Link
                </MediumButton>
            </section>
        );
    }
}

export default Appointment;
