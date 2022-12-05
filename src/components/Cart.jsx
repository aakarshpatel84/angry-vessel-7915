import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/cartContextProvider";

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
      <Text bg="red.200">{"Total Price " + sumOfItem}</Text>
      <h1>{/* <ImCart /> */}</h1>
      <div className="grid">
        {cart.map((el, index) => (
          <Box display="none">
            <Image src={el.image} alt="" />
            <Text>{el.title}</Text>
            <Text> {`Rs-${el.price}`}</Text>
            <Button
              bg="none"
              _hover="none"
              border="none"
              display="block"
              margin="auto"
              w="fit-content"
              onClick={() => Remove(index)}
            >
              <DeleteIcon border="none" />
            </Button>
          </Box>
        ))}

        {/* <AddToCart/> */}
      </div>
    </div>
  );
}

export default Cart;
