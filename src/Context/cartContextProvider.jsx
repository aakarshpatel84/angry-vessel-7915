import { createContext } from "react";

export const CartContext = createContext();

function cartContextProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}
export default cartContextProvider;
