import { Component } from 'react';
import { fetchFromBackend, fetchFileFromBackend } from "../Comms"
import { getCookie } from "../../services/cookies";
import moment from 'moment';
import MediumButton from '../MediumButton';

class CompanyAppointment extends Component {
    constructor(props) {
        super(props);
        this.companyToken = getCookie("companyToken");
        this.state = { open: false, formattedTime: formatTime(props.time), hasCV: false };
        this.changeDetailsVisibility = this.changeDetailsVisibility.bind(this)
    }

    componentDidMount() {
        fetchFromBackend(`/api/user/${this.props.personId}`, 
        "GET", this.companyToken)
        .then(user => {
            const hasCV = user.cv_path != null;
            const linkedin_url = user.linkedin_url;
            this.setState(() => ({
                hasCV: hasCV,
                linkedIn: linkedin_url
            }));
        });
    }    

    changeDetailsVisibility(){
        console.log("Activated!")
        this.setState((state) =>({
            open: !state.open
        }))
    }

    render() {
        const { formattedTime, hasCV, linkedIn } = this.state;
        return (
            <details className={"border border-solid"} open={ (this.state.open) ? "open" : ""}>
                <summary className={"flex flex-row justify-between items-center border-b border-solid p-2 font-vag"}>
                    <p>Appointment with {this.props.person} at {formattedTime}</p>
                    <MediumButton bg="bg-blue" className={"hover:text-white"} textColor={ "text-white" } onClick={this.changeDetailsVisibility}>View details</MediumButton>
                </summary>
                <div className={ "flex flex-row justify-between items-center p-1 bg-teal text-white"}>
                    <div className={"flex p-2 flex-row gap-4"}>
                        <AppointmentDetail title={"Time"} info={formattedTime} />
                        <AppointmentDetail title={"Location"} info={this.props.location} />
                    </div>
                    <div className={"p-2 flex flex-col items-end font-vag gap-2"}>
                        {hasCV &&
                            <MediumButton to={this.props.cv} alt="Link to CV" bg={"bg-white"} textColor={ "text-black hover:text-white"} onClick={() => this.downloadCV(this.props.personId, this.props.person)}>View CV</MediumButton>
                        }
                        {linkedIn &&
                            <MediumButton to={this.props.cv} alt="LinkedIn" bg={"bg-white"} textColor={ "text-black hover:text-white"} onClick={() => window.open(linkedIn)}>View LinkedIn</MediumButton>
                        }
                        <MediumButton to={this.props.meeting} alt="Link to meeting link" bg={ "bg-white"} textColor={ "text-black hover:text-white"}>Go to meeting</MediumButton>
                        <MediumButton bg={"bg-white"} textColor={"text-black hover:text-white"} onClick={this.props.cancelFunction}>Cancel Appointment</MediumButton>
                    </div>
                </div>
            </details>
        );
    }

    downloadCV(userId, userName) {
        fetchFileFromBackend(`/api/user/${userId}/cv`, 
        "GET", this.companyToken)
        .then(blob => {
            const cvURL = window.URL.createObjectURL(blob);
            const tempLink = document.createElement('a');
            tempLink.href = cvURL;
            tempLink.setAttribute('download', `${userName} CV.pdf`);
            tempLink.click();
        });
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

function formatTime(timestamp) {
    const appointmentTime = moment(timestamp);
    if(moment().day() === appointmentTime.day()) {
        return appointmentTime.format("HH:mm");
    }
    return appointmentTime.format("YYYY-MM-DD HH:mm");
}

export default CompanyAppointment
