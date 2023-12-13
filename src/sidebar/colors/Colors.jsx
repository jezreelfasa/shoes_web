import styles from "./Colors.module.css";
import Input from '../../components/Input'

const Colors = ({ handleChange }) => {
    return (
        <>
            <div>
                <h2 className={styles.color_title}>Colors</h2>
                <label className={styles.sidebar_label_container}>
                    <input onChange={handleChange} type="radio" value="" name="test3" />
                    <span className={`${styles.checkmar} ${styles.all}`}></span>
                    All
                </label>


                <Input
                    handleChange={handleChange}
                    value="black"
                    title=""
                    name="test3"
                    color="black"
                />

                <Input
                    handleChange={handleChange}
                    value="blue"
                    title=""
                    name="test3"
                    color="blue"
                />

                <Input
                    handleChange={handleChange}
                    value="red"
                    title=""
                    name="test3"
                    color="red"
                />

                <Input
                    handleChange={handleChange}
                    value="green"
                    title=""
                    name="test3"
                    color="green"
                />
                <label className={styles.sidebar_label_container}>
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="white"
                        name="test3"
                    />
                    <span
                        className={styles.checkmar}
                        style={{ background: "white", border: "3px solid black", }}
                    ></span>
                    White
                </label>
            </div>
        </>
    );
};

export default Colors;
//3: 43: 33
