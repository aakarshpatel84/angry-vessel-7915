import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";

function Cart() {
  const { addData, cart, Remove } = useContext(CartContext);
  // console.log("addData: ", addData);
  console.log("cart: ", cart);
  //   console.log("da: ", data);
  const sumOfItem = cart.reduce(function (accum, el) {
    return accum + el.price;
  }, 0);
  console.log("sumOfItem: ", sumOfItem);

  return (
    <div>
      <Text>{"Total  " + sumOfItem}</Text>
      <h1>Cart</h1>
      <div className="grid">
        {cart.map((el, index) => (
          <div>
            <Image src={el.image} alt="" />
            <Text>{el.title}</Text>
            <Text> {`Rs-${el.price}`}</Text>
            <Button
              bg="red.400"
              display="block"
              margin="auto"
              w="fit-content"
              onClick={() => Remove(index)}
            >
              <DeleteIcon />
            </Button>
          </div>
        ))}

        {/* <AddToCart/> */}
      </div>
    </div>
  );
}

export default Cart;
