import {Link} from "react-router-dom";

const LargeButton = (props) => {
    return (
        <Link to={props.to}
              className={"p-5 rounded bg-blue text-white "
                  .concat((props.bg === undefined) ? "bg-blue" :props.bg)
                  .concat((props.bgHover === undefined) ? " hover:bg-magenta " : ` hover:${props.bgHover} `)}>
            {props.children}
        </Link>
    )
}

export default LargeButton