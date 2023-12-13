
import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import styles from "./Nav.module.css";

function Nav({ query, handleInputChange, shoppingCart }) {
    return (
        <nav>
            <div className={styles.nav_container}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    className={styles.search_input}
                    placeholder="Enter your search shoes."
                />
            </div>
            <div className={styles.profile_container}>
                <a href="#">
                    <FiHeart className={styles.nav_icons} />
                </a>

                <a href="#" className={styles.cart_icon_container}>
                    <AiOutlineShoppingCart className={styles.nav_icons} />
                    {shoppingCart.length > 0 && (
                        <div className={styles.cart_count}>{shoppingCart.length}</div>
                    )}
                </a>
                <a href="#">
                    <AiOutlineUserAdd className={styles.nav_icons} />
                </a>
            </div>
        </nav>
    );
}
export default Nav;

