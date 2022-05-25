import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Products from './Pages/Products/products';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/login' element={<Login />} />
          <Route path ='/signup' element={<Signup />} />
          <Route path ='/products' element={<Products />} />
          <Route path ='/productdetails' element={<ProductDetail />} />
          <Route path ='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
