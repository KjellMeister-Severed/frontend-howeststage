import { Component } from "react";
import UniLink from "./helpers/UniLink";

class MediumButton extends Component {
    render() {
        return (
            <UniLink to={this.props.to}
                className={`rounded ${this.props.textColor} ${this.props.bg} ${(this.props.bgHover !== "") ? "hover:".concat(this.props.bgHover) : ""} ${this.props.className}`}
                onClick={this.props.onClick}>
                {this.props.children}
            </UniLink>
        )
    }
}

MediumButton.defaultProps = {
    bg: "",
    bgHover: "bg-magenta",
    textColor: "text-black"
}

export default MediumButton
