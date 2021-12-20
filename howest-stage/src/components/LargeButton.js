import {Component} from "react";
import UniLink from "./helpers/UniLink";

class LargeButton extends Component {
    render() {
        return (
            <UniLink to={this.props.to} onClick={this.props.onClick}
                className={this.props.className === undefined ? `p-5 rounded text-white ${this.props.bg} ${`hover:${this.props.bgHover}`} ${this.props.className}`: this.props.className}>
                {this.props.children}
            </UniLink>
        )
    }
}

LargeButton.defaultProps = {
    bg: "bg-blue",
    bgHover: "bg-magenta",
}

export default LargeButton
