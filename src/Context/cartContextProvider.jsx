import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const Add = (data) => {
    const newData = [...cart, data];
    setCart(newData);

    localStorage.setItem("cart", JSON.stringify(newData));
  };
  const Remove = (index) => {
    const newData = [...cart];
    newData.splice(index, 1);
    setCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
  };
  console.log("cart: ", cart);

  return (
    <>
      <CartContext.Provider value={{ Add, Remove, setCart, cart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
export default CartContextProvider;
