import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //aktualizace dat v komponentě

  function showCartHandler() {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {/* podmínka pokud je cartIsShown == true tak <Cart /> */}
      {cartIsShown && <Cart onClose={hideCartHandler} />} {/* relativní pozice modálního okna => bude přesunuto (skrze Portal) do divu #overlays
      pointer pro funkci - poslání hideCartHandler() do další comp */}
      <Header onShowCart={showCartHandler} /> {/* pointer pro funkci - pozor bez závorek, jinak by funkce proběhla */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
