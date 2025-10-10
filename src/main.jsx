import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  RouterProvider,
} from "react-router-dom";
import Router from './routes/Router.jsx';
import { CartProvider } from './contexts/cart/cartContext.jsx';
import { FiltersProvider } from './contexts/filters/filtersContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FiltersProvider>
    <CartProvider>
      
        <RouterProvider router={Router} />
      
    </CartProvider>
    </FiltersProvider>
  </StrictMode>,
)
