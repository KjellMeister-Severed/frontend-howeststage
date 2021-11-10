import {Link} from "react-router-dom";
import {Component} from "react";

class LargeButton extends Component {
    render() {
        return (
            <Link to={this.props.to}
                  className={"p-5 rounded text-white "
                      .concat(this.props.bg)
                      .concat(` hover:${this.props.bgHover} `)}>
                {this.props.children}
            </Link>
        )
    }
}

LargeButton.defaultProps = {
    bg: "bg-blue",
    bgHover: "bg-magenta",
}

export default LargeButton