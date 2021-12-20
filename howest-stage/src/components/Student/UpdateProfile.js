import { Component } from 'react';


class UpdateProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind()
    }

    handleSubmit = (event) => { 

    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label for="cv"> CV:
                    <input type={"file"} id={"cv"}/>
                </label>
                <label for="linkedin">LinkedIn:
                    <input type={"text"} id={"linkedin"} name={"linkedin"} placeholder={"https://www.linkedin.com/in/..."} />
                </label>
                <input type={"submit"}/>
            </form>
        );
    }
}
 
export default UpdateProfileForm;
