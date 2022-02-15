import React from 'react';

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trashIcon from "../../assets/icons/trash.svg";
// redux
import { useDispatch } from 'react-redux';
import {deacreseItem,increaseItem,removeItem} from "../../redux/cart/cartAction"
// Style
import styles from "./Cart.module.css";

const Cart = (props) => {

    const dispatch = useDispatch()
    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container} >
            <img className={styles.productImage} src={image} alt="pic"/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch(deacreseItem(props.data))} >-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch(increaseItem(props.data))} >+</button>
            </div>
        </div>
    );
};

export default Cart;