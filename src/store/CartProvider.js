import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { //základní stav -> při vytvoření 
    items: [],
    totalAmount: 0
}

function cartReducer(state, action) {
    if (action.typeIdentif === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item); //vezme se původní stav "state", vytvoří se nové pole a přidá nová položka action.item (concat)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}

function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCartHandler(item) { //zde je vložen objekt item, vkládáme v MealItem.js funkcí addToCartHandler
        dispatchCartAction({ typeIdentif: 'ADD_ITEM', item: item }); //aktualizují se data s identifikátorem akce
    }

    function removeItemFromCartHandler(id) {
        dispatchCartAction({ typeIdentif: 'REMOVE_ITEM', id: id }); //aktualizují se data s identifikátorem akce
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;