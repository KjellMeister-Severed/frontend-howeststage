import { Component } from 'react';


class CompanyAppointment extends Component {
    render() { 
        return (
            <details className={"border border-solid"}>
                <summary className={"flex flex-row justify-between border-b border-solid p-2"}>
                    <p>Appointment with {this.props.person} at {this.props.time}</p>
                    <p>View details</p>
                </summary>
                <div className={ "flex p-2"}>
                    <AppointmentDetail title={"Time"} info={this.props.time} />
                    <AppointmentDetail title={"Location"} info={this.props.location} />
                    <AppointmentDetail title={"Study"} info={this.props.study} />
                </div>
                <div className={"p-2"}>
                    <a href={this.props.cv } alt="Link to CV">View CV</a>
                    <a href={this.props.meeting} alt="Link to meeting link">Go to meeting</a>
                    <button>Cancel Appointment</button>
                </div>
            </details>
        );
    }
}

class AppointmentDetail extends Component {
    render() {
        return (
            <section>
                <h3>{this.props.title}</h3>
                <p>{ this.props.info}</p>
            </section>
        );
    }
}
 
export default CompanyAppointment
