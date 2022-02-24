import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onClose}> {/* přijetí funkce hideCartHandler() jako onClose a odeslání do Modal comp pod názvem onClose */}
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.92</span>
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