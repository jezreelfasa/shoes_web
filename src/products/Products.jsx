import styles from './Products.module.css';

function Products({ result }) {
    return (
        <>
            <section className={styles.card_container}> {result}</section>
        </>
    )
}

export default Products