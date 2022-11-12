import './App.css';
// import CaptionCarousel from './components/CaptionCarousel';
import Navbar from './components/Navbar';
import AllRouter from './Routes/AllRouter';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useContext, useEffect } from 'react';
import { CartContext } from "./Context/cartContextProvider";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjemavRYzfuSBTOidyEFmvxXxjHEKbKN4",
  authDomain: "books-wagon.firebaseapp.com",
  projectId: "books-wagon",
  storageBucket: "books-wagon.appspot.com",
  messagingSenderId: "246137323301",
  appId: "1:246137323301:web:da690a70f60e6c636ce4cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const cartData = localStorage.getItem('cart');
console.log(cartData);

function App() {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart(JSON.parse(cartData));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AllRouter />
      {/* <AddToCart /> */}
      {/* <CaptionCarousel /> */}


    </div >
  );
}

export default App;
