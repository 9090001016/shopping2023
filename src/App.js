import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './screens/Navbar';
import ProductScreen1 from './screens/ProductScreen1';
import ProductScreen2 from './screens/ProductScreen2';

function App() {
  return (
    <BrowserRouter>
            <Navbar />

      <Routes>
        <Route path="/productdetails" element={<ProductScreen />}></Route>
        <Route path="/productdetails1" element={<ProductScreen1 />}></Route>
        <Route path="/productdetails2" element={<ProductScreen2 />}></Route>
        <Route path="/" element={<HomeScreen />} exact></Route>
      </Routes>
      <footer className="row_center text_color">All right reserved</footer>
    </BrowserRouter>

  );
}

export default App;
