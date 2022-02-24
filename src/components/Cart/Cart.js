import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onClose}> {/* přijetí funkce hideCartHandler() jako onClose a odeslání do Modal comp pod názvem onClose */}
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                {/* přijetí funkce hideCartHandler() jako onClose a vložení do funkce tlačítka onClick */}
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;