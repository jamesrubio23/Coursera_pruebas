import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './pages/SignUp';  // Importamos el componente SignUp

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer /> {/* Para utilizar Toast Notification */}
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} /> {/* Home */}
        <Route path='/collection' element={<Collection />} /> {/* Collection */}
        <Route path='/about' element={<About />} /> {/* About */}
        <Route path='/contact' element={<Contact />} /> {/* Contact */}
        <Route path='/product/:productId' element={<Product />} /> {/* Producto específico */}
        <Route path='/cart' element={<Cart />} /> {/* Carrito */}
        <Route path='/login' element={<Login />} /> {/* Login */}
        <Route path='/signup' element={<SignUp />} /> {/* Sign Up */}
        <Route path='/place-order' element={<PlaceOrder />} /> {/* Orden */}
        <Route path='/orders' element={<Orders />} /> {/* Pedidos */}

        {/* Ruta protegida para el perfil */}
        <Route 
          path='/profile' 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

