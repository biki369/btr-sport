import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Layout from './layout/Layout'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
    
  },
]);

function App() {

  return (
    <div className="app">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
