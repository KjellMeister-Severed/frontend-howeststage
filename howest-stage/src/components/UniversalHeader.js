import howest_knockout from './../images/howest_knockout.png'
import React from "react";

class UniversalHeader extends React.Component {
    render() {
        return (
            <header className={"bg-blue flex flex-row text-white justify-between p-4 ".concat(...this.props.className)}>
                <img src={howest_knockout} alt={"University of West-Flandres"} className={"w-auto h-16"}/>
                <nav className={"flex flex-row gap-2 items-center"}>
                    {this.props.children}
                </nav>
            </header>
        )
    }
}

export default UniversalHeader
