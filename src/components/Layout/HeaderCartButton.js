import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

function HeaderCartButton(props) {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0); //vrátí počet položek v košíku
    const btnClasses = `${classes.button} ${ buttonIsHighlighted ? classes.bump : ''}`; //pokud je buttonIsHighlighted == true přidá se třída animace

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {setButtonIsHighlighted(false)}, 300);

        return () => {
            clearTimeout(timer); //pokud je effect znovu spuštěn nejdříve se "vyčistí" timeout
        };
    }, [cartCtx.items]); //effect se spustí jen pokud se nějakým způsobem změní cartCtx.items

    return (
        // funkce showCartHandler() pod názvem onClick je přijata a vložena do skutečného onClick
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;