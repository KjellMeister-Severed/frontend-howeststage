import { Component } from 'react';
import { Link } from "react-router-dom";

/**
 * UniLink is a component that allows you to pass any reference to a new page/url and automatically handles the rest.
 */
class UniLink extends Component {
    render() {
        if (this.props.to === undefined) {
            return (
                <button className={this.props.className} onClick={ this.props.onClick}>
                    {this.props.children}
                </button>
            )
        }
        if (this.props.to.includes("http://") || this.props.to.includes("https://")) {
            return (
                <a href={this.props.to} className={this.props.className} onClick={this.props.onClick} target="_blank">
                    {this.props.children}
                </a>
            )
        }
        return (
            <Link to={this.props.to} className={this.props.className} onClick={this.props.onClick}>
                {this.props.children}
            </Link>
        )
    }
}
 
export default UniLink
