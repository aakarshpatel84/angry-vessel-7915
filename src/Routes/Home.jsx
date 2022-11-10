// import axios from "axios";
// import { useEffect, useState } from "react";

import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import "../style.css";

export default function Home() {
  // const [data1, setData] = useState;
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch("http://localhost:2020/homepagedata");
    let data = await res.json();
    console.log("data: ", data);
    // data1(data);
    setData(data);
  };
  getData();

  return (
    <div className="grid">
      {data.map((el) => (
        <div>
          <img src={el.image} alt="" />
          <p>{el.title}</p>
          <p> {el.price}</p>
        </div>
      ))}
    </div>
  );
}
