import { Component } from 'react';


class UpdateProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cv: '',
            linkedin: ''
        }
        this.handleSubmit = this.handleSubmit.bind()
        this.handleFile = this.handleFile.bind()
        this.handleURL = this.handleURL.bind()
    }

    handleFile = (event) => { 
        event.preventDefault()
        this.setState((state) => ({ cv: event.target.files[0]}))
    }

    handleURL = (event) => { 
        event.preventDefault()
        this.setState((state) => ({ linkedin: event.target.value}))
    }

    handleSubmit = (event) => { 
        event.preventDefault()
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit} className={"flex flex-col gap-2 items-center ".concat((this.props.className) ? this.props.className : this.props.className)}>
                <label for="cv"> CV:
                    <input type={"file"} accept={".pdf,.doc,.docx,.odt"} id={"cv"} className={"ml-2 w-max"} onChange={this.handleFile}/>
                </label>
                <label for="linkedin" className={"inline w-max"}>LinkedIn:
                    <input onChange={this.handleURL} type={"text"} id={"linkedin"} name={"linkedin"} placeholder={"https://www.linkedin.com/in/..."} className={"ml-2 border-solid border-2 p-1 rounded border-black w-96 min-w-fit"} />
                </label>
                <input type={"submit"} className={"w-fit rounded border text-white bg-magenta hover:bg-white hover:border-black hover:text-black p-2"}/>
            </form>
        );
    }
}
 
export default UpdateProfileForm;
