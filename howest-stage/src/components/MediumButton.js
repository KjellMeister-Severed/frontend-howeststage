import { Link } from "react-router-dom";
import { Component } from "react";

class MediumButton extends Component {
    render() {
        if (this.props.to === undefined) {
            return (
                <button className={`p-2 rounded ${this.props.textColor} ${this.props.bg} ${(this.props.bgHover !== "") ? "hover:".concat(this.props.bgHover) : ""} ${this.props.className}`}>
                    {this.props.children}
                </button>
            )
        }
        if (this.props.to.includes("http://") || this.props.to.includes("https://")) {
            return (
                <a href={this.props.to} className={`p-2 rounded ${this.props.textColor} ${this.props.bg} ${(this.props.bgHover !== "") ? "hover:".concat(this.props.bgHover) : ""} ${this.props.className}`}>
                    {this.props.children}
                </a>
            )
        }
        return (
            <Link to={this.props.to} className={`p-2 rounded ${this.props.textColor} ${this.props.bg} ${(this.props.bgHover !== "") ? "hover:".concat(this.props.bgHover) : ""} ${this.props.className}`}>
                {this.props.children}
            </Link>
        )
    }
}

MediumButton.defaultProps = {
    bg: "",
    bgHover: "bg-magenta",
    textColor: "text-black"
}

export default MediumButton
