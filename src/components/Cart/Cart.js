import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem.js';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    function cartItemAddHandler(item) {
        cartCtx.addItem({...item, amount: 1});
    }

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) =>
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />)}</ul>;

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
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;