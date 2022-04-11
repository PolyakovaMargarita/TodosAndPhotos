import styles from "./Heading.module.css"

const Heading = ({tag, text}) => {
    const Tag = tag || "h1";

    return (
        <Tag className={styles.wrapper}>
            {text}
        </Tag>
    )
}

export default Heading;