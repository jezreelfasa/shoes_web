import styles from './Category.module.css'
import Input from '../../components/Input'

function category({ handleChange }) {
    return (
        <>
            <div>
                <h2 className={styles.sidebar_title}>Category</h2>

                <div>
                    <label className={styles.sidebar_label_container}>
                        <input onChange={handleChange} type="radio" value="" name="test" />
                        <span className={styles.checkmar}></span>All
                    </label>

                    <Input
                        handleChange={handleChange}
                        value="sneakers"
                        title="Sneakers"
                        name="test"
                    />
                    <Input
                        handleChange={handleChange}
                        value="sandals"
                        title="Sandals"
                        name="test"
                    />
                    <Input
                        handleChange={handleChange}
                        value="heels"
                        title="Heels"
                        name="test"
                    />
                    <Input
                        handleChange={handleChange}
                        value="flats"
                        title="Flats"
                        name="test"
                    />
                </div>
            </div>
        </>
    )
}

export default category