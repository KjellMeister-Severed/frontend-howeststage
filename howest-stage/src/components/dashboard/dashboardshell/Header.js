const Header = () => {
    return (
        <nav>
            <h1>Howest Stage Platform</h1>
            <div className={ "profile" }>
                <div style={"info"}>
                    <p>Kjell Maekelberg</p>
                    <a href="#">logout</a>
                </div>
                <img src="./" alt="Student Profile Image" className={"studentImage"}/>
            </div>
        </nav>
    )
}

export default Header