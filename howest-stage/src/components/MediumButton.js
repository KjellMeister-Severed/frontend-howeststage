import {Link} from "react-router-dom";
import {Component} from "react";

class MediumButton extends Component {
    render() {
        if (this.props.to.includes("https://" || "http://")) {
            return (
                <a href={this.props.to}
                    className={"p-3 rounded text-white "
                        .concat(this.props.bg)
                        .concat(` hover:${this.props.bgHover} `)
                        .concat( ...this.props.className )}>
                    {this.props.children}
                </a>
            )
        } else {
            return (
                <Link to={this.props.to}
                    className={"p-4 rounded text-white "
                        .concat(this.props.bg)
                        .concat(` hover:${this.props.bgHover} `)
                        .concat(...this.props.className )}>
                    {this.props.children}
                </Link>
            )
        }
    }
}

MediumButton.defaultProps = {
    bg: "",
    bgHover: "bg-magenta"
}

export default MediumButton
