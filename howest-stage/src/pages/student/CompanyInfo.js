import {Component} from 'react';
import UniversalHeader from '../../components/UniversalHeader';
import MediumButton from '../../components/MediumButton';

class StudentCompanyInfo extends Component {
    render() { 
        return (
            <>
                <UniversalHeader className="h-20 flex-initial fixed w-screen" subheader={"Welcome, " + this.context.accounts[0].name}>
                    <MediumButton to={"/dashboard/student"} className={"justify-self-start"}>Back</MediumButton>
                    <MediumButton className={"border-2 border-white rounded bg-magenta mr-5"} textColor={"text-white"}>Logout (todo)</MediumButton>
                </UniversalHeader>
            </>
        );
    }
}
 
export default StudentCompanyInfo;
