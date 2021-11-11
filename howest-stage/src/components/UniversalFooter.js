const UniversalFooter = (props) => {
    return (
        <footer className={`${props.className} flex bottom-0 justify-between items-center fixed bg-primary p-4`}>
            <ul className={"flex w-3/5"}>
                <li className={"mr-2"}><a className={"hover:text-magenta text-white"} href="https://www.linkedin.com/in/kjell-maekelberg/">Adelina Giurea</a></li>
                <li className={"mr-2"}><a className={"hover:text-magenta text-white"} href="https://www.linkedin.com/in/borobbrecht/">Adriaan De Saeger</a></li>
                <li className={"mr-2"}><a className={"hover:text-magenta text-white"} href="https://www.linkedin.com/in/adelina-giurea-05b352221/">Bo Robbrecht</a></li>
                <li className={"mr-2"}><a className={"hover:text-magenta text-white"} href="#">Kjell Maekelberg</a></li>
            </ul>
            <a href="#" className={"text-white font-bold underline"}>Legal Stuff</a>
        </footer>
    )
}

export default UniversalFooter
