import {Link} from "react-router-dom";
import {Component} from "react";

class MediumButton extends Component {
    render() {
        return (
            <Link to={this.props.to}
                  className={"p-4 rounded text-white "
                      .concat(this.props.bg)
                      .concat(` hover:${this.props.bgHover} `)}>
                {this.props.children}
            </Link>
        )
    }
}

MediumButton.defaultProps = {
    bg: "",
    bgHover: "bg-magenta"
}

export default MediumButton