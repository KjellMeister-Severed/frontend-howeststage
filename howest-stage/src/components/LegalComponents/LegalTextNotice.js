import styles from './legal.module.css'

const LegalTextNotice = (props) => {
    return (
        <article className={`w-3/4 mt-3 ${(props.className === "legalArticle") ? styles.legalArticle : ""}`}>
            <h3 className={"font-vag font-bold text-magenta text-xl space-y-6"}>{props.title}</h3>
            {props.children}
        </article>
    )
}

export default LegalTextNotice