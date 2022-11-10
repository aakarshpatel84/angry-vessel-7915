import './App.css';
// import CaptionCarousel from './components/CaptionCarousel';
import Navbar from './components/Navbar';
import AllRouter from './Routes/AllRouter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter />
      {/* <CaptionCarousel /> */}

    </div >
  );
}

export default App;
