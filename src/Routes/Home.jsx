// import axios from "axios";
// import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { Button, Text, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import "../style.css";
import Cart from "../components/Cart";
import { CartContext } from "../Context/cartContextProvider";

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
        <Blog />
      </div>
      <div className="grid">
        {data.map((el, index) => (
          <div>
            <Image src={el.image} alt="" />
            <Text>{el.title}</Text>
            <Text> {`Rs-${el.price}`}</Text>
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
        <Button m="10" color="red.400" onClick={pagePrev}>
          Prev
        </Button>
        <Button m="" color="red.400" onClick={pageChange}>
          Next
        </Button>
      </div>
    </>
  );
}
