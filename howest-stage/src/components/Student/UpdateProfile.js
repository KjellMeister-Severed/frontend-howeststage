import { Component } from 'react';
import { uploadFile } from '../Comms';


class UpdateProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cv: '',
            linkedin: '',
            successbag: [],
            errorbag: []
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
        if (this.state.cv !== '' && this.state.cv !== undefined) {
            uploadFile("/api/user/cv", { key: 'cv', data: this.state.cv})
                .then((response) => {
                    this.setState((state) => ({ successbag: [...this.state.successbag, 'CV uploaded successfully'] }))
                })
                .catch((response) => console.log(response))
        }
        if (this.state.linkedin !== '' && this.state.linkedin !== undefined) {
            console.log(this.state.linkedin)
        }
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit} className={"flex flex-col gap-2 items-center ".concat((this.props.className) ? this.props.className : this.props.className)}>
                <label for="cv"> CV:
                    <input type={"file"} accept={".pdf"} id={"cv"} className={"ml-2 w-max"} onChange={this.handleFile} />
                    <span className={"italic"}>*PDF only</span>
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
