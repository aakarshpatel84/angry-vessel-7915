import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  // const [addData, setAddData] = useState([]);

  // const addToCart = (data) => {
  //   setAddData(data);
  // };
  const [cart, setCart] = useState([]);
  const Add = (data) => {
    // setCart([...cart, data]);
    const newData = [...cart, data];
    setCart(newData);
    // console.log(data);
    // <AddToCart data={cart} />;
    // addToCart(data);
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
