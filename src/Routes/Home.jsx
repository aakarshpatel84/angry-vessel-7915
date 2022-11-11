// import axios from "axios";
// import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { Button, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import "../style.css";
export default function Home() {
  // const [data1, setData] = useState;
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch("http://localhost:8080/homepagedata");
    let data = await res.json();
    console.log("data: ", data);
    // data1(data);
    setData(data);
    console.log("data: ", data);
  };
  getData();

  const [cart, setCart] = useState([]);
  const Add = (data) => {
    setCart([...cart, data]);
  };

  return (
    <>
      <div className="cr">
        <Blog />
      </div>
      <div className="grid">
        {data.map((el) => (
          <div>
            <Image src={el.image} alt="" />
            <Text>{el.title}</Text>
            <Text> {`Rs-${el.price}`}</Text>
            <Button bg="red.400" onClick={() => Add(el)}>
              Add to cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
