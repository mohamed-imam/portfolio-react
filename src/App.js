import Navbar from "./pages/navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Shop from "./pages/shop";
import Product from "./pages/shop/Product";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Shop />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
