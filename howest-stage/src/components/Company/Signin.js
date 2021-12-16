function CompanySignIn() {
    return ( 
        <section className={"flex flex-col items-center m-2 lg:flex-col gap-2 lg:gap-0.5"}>
            <h3 className={"font-bold"}>Welcome back</h3>
            <p>Just enter you email and we'll send you a sign-in link</p>
            <form>
                <label for={"email"}>Email: </label>
                <input type={"email"} name={"email"} placeholder={"yourname@youremail.com"} className={"border-solid border-2 p-1"} />
                <input type={"submit"} value={"Submit"} className={"p-2 rounded bg-magenta hover:bg-white hover:text-black text-white ml-2"}/>
            </form>
        </section>
    );
}

export default CompanySignIn;
