import styles from './Sidebar.module.css'
import Category from './category/Category'
import Price from './Price/Price'
import Colors from './colors/Colors'
function Sidebar({ handleChange }) {

    return (
        <>
            <section className={styles.sidebar}>
                <div className={styles.logo_container}>
                    <h1>🛒</h1>
                </div>

                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChanges={handleChange} />
            </section>
        </>
    )
}

export default Sidebar