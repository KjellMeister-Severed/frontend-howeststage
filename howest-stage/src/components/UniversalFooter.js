import React from 'react';

class UniversalFooter extends React.Component {
    constructor(props) {
        super(props);
        this.contributors = [
            {
                linkedInURL: "https://www.linkedin.com/in/kjell-maekelberg/",
                name: "Kjell Maekelberg"
            },
            {
                linkedInURL: "https://www.linkedin.com/in/borobbrecht/",
                name: "Bo Robbrecht"
            },
            {
                linkedInURL: "https://www.linkedin.com/in/adelina-giurea-05b352221/",
                name: "Adelina Giurea"
            },
            {
                linkedInURL: "https://www.linkedin.com/in/kjell-maekelberg/",
                name: "Adriaan De Saeger"
            }
        ]

        this.state = {
            count: 0,
            contributor: this.contributors[0]
        }
    };

    componentDidMount() {
        this.timerID = setInterval(() => {
                if (this.state.count < this.contributors.length - 1) {
                    this.setState((state,props) => ({
                        count: state.count + 1
                    }))
                } else {
                    this.setState((state,props) => ({
                        count: 0
                    }));
                }
                this.setState( (state,props) => ({
                    contributor: this.contributors[this.state.count]
                }));
            }, 1500
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    setContributor(count) {
        this.setState((state) => ({
            contributor: state.contributors[count]
        }));
    }

    render() {
        return (
            <footer
                className={`${this.props.className} flex bottom-0 justify-between items-center fixed bg-primary p-4`}>
                <ul className={"flex w-3/5"}>
                    <li className={"mr-2"}><a className={"hover:text-magenta text-white"} href={this.state.contributor.linkedInURL}>{this.state.contributor.name}</a></li>
                </ul>
                <a href="#" className={"text-white font-bold underline"}>Legal Stuff</a>
            </footer>
        )
    }
}

export default UniversalFooter