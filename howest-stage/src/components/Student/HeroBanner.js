function HeroBanner(props) {
    return ( 
        <div className={"flex flex-row justify-center gap-10 flex-wrap"}>
            <img src="https://via.placeholder.com/300" alt={props.name} className={"h-72 w-auto"} />
            <aside className="flex flex-col w-max justify-around">
                <h2 className={"text-xl font-vagbold"}>{props.name}</h2>
                { props.children }
            </aside>
        </div>
    );
}

export default HeroBanner;
