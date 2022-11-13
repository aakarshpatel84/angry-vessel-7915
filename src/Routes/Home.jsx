// import axios from "axios";
// import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Button, Text, Image, Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import "../style.css";
import Cart from "../components/Cart";
import { CartContext } from "../Context/cartContextProvider";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export default function Home() {
  const { Add, setCart } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  // const [data1, setData] = useState;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async (page) => {
    let res = await fetch(
      `http://localhost:2020/homepagedata?_page=${page}&_limit=9`
    );
    let data = await res.json();
    // console.log("data: ", data);
    // data1(data);
    setData(data);
    // console.log("data: ", data);
  };
  useEffect(() => {
    getData(page);
  }, [page]);
  const pageChange = () => {
    setPage((page) => page + 1);
  };

  const pagePrev = () => {
    setPage((page) => page - 1);
  };

  // const [cart, setCart] = useState([]);
  // const Add = (data) => {
  //   // setCart([...cart, data]);
  //   setCart([...cart, data]);
  //   console.log(data);
  //   console.log("cart: ", cart);
  //   // <AddToCart data={cart} />;
  //   addToCart(data);
  // };

  return (
    <>
      <div className="cr">
        <Carousel />
      </div>
      <div className="grid">
        {data.map((el, index) => (
          <div>
            <Image src={el.image} alt="" />
            <Text>{el.title}</Text>
            <Box>
              <Text color="red"> {`Rs ${el.price}`}</Text>
            </Box>
            <Button
              bg="red.400"
              display="block"
              margin="auto"
              w="40"
              onClick={() => Add(el)}
            >
              Add to cart
            </Button>
          </div>
        ))}

        {/* <AddToCart/> */}
      </div>
      <div>
        <Button disabled={page === 1} m="5" color="red.400" onClick={pagePrev}>
          {/* <ArrowLeftIcon /> */}
          Prev
        </Button>
        <Button color="red.400">{page}</Button>
        <Button
          disabled={page === 5}
          m="5"
          color="red.400"
          onClick={pageChange}
        >
          {/* <ArrowRightIcon /> */}
          Next
        </Button>
      </div>
    </>
  );
}
