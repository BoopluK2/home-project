import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './index.css'

import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";



function App() {

  const Layout = () => {
    return (
      <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
        <Outlet/ >
      <Footer />
    </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products",
          element: <PropertyDetails />
        },
      
      ]
    },
   
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
