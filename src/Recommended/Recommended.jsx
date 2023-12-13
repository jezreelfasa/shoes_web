import styles from './Recommended.module.css';
import Button from '../components/Button';
function Recommended({ handleClick }) {
    return (
        <>
            <div>
                <h2 className={styles.recommended_title}>Recommended</h2>
                <div className={styles.recommended_flex}>
                    <Button onClickHandler={handleClick} value="" title="All products" />
                    <Button onClickHandler={handleClick} value="Nike" title="Nike" />
                    <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
                    <Button onClickHandler={handleClick} value="Puma" title="Puma" />
                    <Button onClickHandler={handleClick} value="Vans" title="Vans" />

                </div>

            </div>
        </>
    )
}

export default Recommended