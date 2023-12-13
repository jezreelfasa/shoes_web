

import React, { useState } from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Star from "./Star";
import styles from "../products/Products.module.css";

function Card({ img, title, reviews, newPrice, prevPrice, star, addToCart }) {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
    };

    const renderStars = () => {
        const starsArray = Array(5).fill(0);

        return starsArray.map((_, index) => (
            <Star
                key={index}
                selected={index < selectedStars}
                onSelect={() => handleStarClick(index)}
                style={{ color: "gold" }}
            />
        ));
    };

    const renderReviews = () => {
        return `${reviews} ${selectedStars} ${selectedStars > 1 ? "stars" : "star"}`;
    };

    return (
        <section className={styles.card}>
            <img src={img} alt={title} />
            <div className={styles.card_details}>
                <h3 className={styles.card_title}>{title}</h3>
                <section className={styles.card_reviews}>
                    {renderStars()}
                    <span className={styles.total_reviews}>{renderReviews()}</span>
                </section>
                <section className={styles.card_price}></section>
                <div className={styles.price}>
                    <del>{prevPrice}</del> {newPrice}
                </div>
                <div className={styles.bag} onClick={addToCart}>
                    <BsFillBagHeartFill className={styles.bag_icon} />
                </div>
            </div>
        </section>
    );
}

export default Card;
