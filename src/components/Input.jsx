import styles from "../sidebar/category/Category.module.css"

function Input({ handleChange, value, title, name, color }) {
    return (
        <label className={styles.sidebar_label_container}>
            <input onChange={handleChange} type="radio" value={value} name={name} />
            <span className={styles.checkmar} style={{ backgroundColor: color }}></span>
            {title}{color}
        </label>
    )
}

export default Input