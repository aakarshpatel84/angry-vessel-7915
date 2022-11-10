import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

export default function AllRouter() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/About" element={<About />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}
