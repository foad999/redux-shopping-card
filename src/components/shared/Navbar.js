import React from 'react';
import { Link } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
    const product = useSelector(state => state.cartState)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shopicon"/></Link>
                    <span>{product.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;