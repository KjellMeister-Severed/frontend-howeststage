import { Component } from 'react';
import MediumButton from './MediumButton';


class CompanyAppointment extends Component {
    render() {
        return (
            <details className={"border border-solid"}>
                <summary className={"flex flex-row justify-between items-center border-b border-solid p-2 font-vag"}>
                    <p>Appointment with {this.props.person} at {this.props.time}</p>
                    <MediumButton bg="bg-blue" className={ "hover:text-white"}>View details</MediumButton>
                </summary>
                <div className={ "flex flex-row justify-between items-center p-1 bg-teal text-white"}>
                    <div className={"flex p-2 flex-row gap-4"}>
                        <AppointmentDetail title={"Time"} info={this.props.time} />
                        <AppointmentDetail title={"Location"} info={this.props.location} />
                        <AppointmentDetail title={"Study"} info={this.props.study} />
                    </div>
                    <div className={"p-2 flex flex-col items-end font-vag gap-2"}>
                        <MediumButton to={this.props.cv} alt="Link to CV" bg={"bg-white"} textColor={ "text-black hover:text-white"}>View CV</MediumButton>
                        <MediumButton to={this.props.meeting} alt="Link to meeting link" bg={ "bg-white"} textColor={ "text-black hover:text-white"}>Go to meeting</MediumButton>
                        <MediumButton bg={"bg-white"} textColor={"text-black hover:text-white"}>Cancel Appointment</MediumButton>
                    </div>
                </div>
            </details>
        );
    }
}

class AppointmentDetail extends Component {
    render() {
        return (
            <section>
                <h3 className={ "font-vagbold" }>{this.props.title}</h3>
                <p className={ "font-vag" }>{this.props.info}</p>
            </section>
        );
    }
}

export default CompanyAppointment
