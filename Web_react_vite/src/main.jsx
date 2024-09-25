import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'


//Asi obtenemos el support de react-router-dom para todos los archivos! 
//Asi cuando ponemos '/' en Login ira al login page?

//Aqui añadimos los archivos principales que main es el archivo que se va a ejecutar
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
)
