import styles from "../Recommended/Recommended.module.css"

function Button({ onClickHandler, value, title }) {
    return <button onClick={onClickHandler} value={value} className={styles.btns}>{title}</button>
}

export default Button
//We have created this componments, so we re use it in the recommended