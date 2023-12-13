import styles from './Price.module.css'
import Input from '../../components/Input'

function Price({ handleChange }) {
    return (
        <>

            <div className={styles.ml}>
                <h2 className={styles.price_title}>
                    Price</h2>

                <label className={styles.sidebar_label_container}>
                    <input onChange={handleChange} type="radio" value="" name="test2" />
                    <span className={styles.checkmar}></span>All
                </label>

                <Input
                    handleChange={handleChange}
                    value={50}
                    title="$0 - 50"
                    name="test2"
                />
                <Input
                    handleChange={handleChange}
                    value={100}
                    title="$50 - 100"
                    name="test2"
                />
                <Input
                    handleChange={handleChange}
                    value={150}
                    title="$100 - 150"
                    name="test2"
                />
                <Input
                    handleChange={handleChange}
                    value={200}
                    title="Over $150"
                    name="test2"
                />
            </div>

        </>
    )
}

export default Price
/*Make this switch between when clicked, copy from category.jsx
<label className={styles.sidebar_label_container}>
                        <input type="radio" name='test' />
                        <span className={styles.checkmar}></span>All
                    </label> */