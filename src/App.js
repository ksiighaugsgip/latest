import logo from './logo.png';
import './App.css';

import Start from './Start.js'
import Main from './Main.js'
import Cart from './Cart.js'
import Kofa from './Kofa.js'
import About from './About.js'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import { CartContextProvider } from './CartContext.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/kofa",
        element: <Kofa />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

function Root() {
  return (
    <>
    <div className="font-news705">
      <header className="header">
        <div className='logo'>
          <Link to="/">
            <img src={logo} className='logoimg' alt="logo"/>
          </Link>
        </div>
        <div className='company'>
          Koffee
        </div>
        <div className="buttons">
          <Link to="/about">
            <img src='/imgs/about.png' className='btn' alt="mabout"/>
          </Link>
          <Link to="/main">
            <img src='/imgs/main.svg' className='btn' alt="main"/>
          </Link>
          <Link to="/cart">
            <img src='/imgs/cart.svg' className='btn' alt="cart"/>
          </Link>
        </div>
      </header>
      <Outlet/>
      <footer className='footer'>
      <Link to="/">
        <img src={logo} className='logoimg' alt="logo"/>
      </Link>
      </footer>
      </div>
    </>
  );
}



export default App;
