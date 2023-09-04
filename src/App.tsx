import Home from "./pages/home/Home"
import Products from "./pages/products/Products";
import Users from "./pages/users/Users"
import Navbar from "./components/navbar/Navbar"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss"

function App() {

  // layout
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>

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
        element: <Home/>
      },
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/products",
        element: <Products/>
      },
     ]
    },
    {
      path:"/login",
      element: <Login />
    }
    
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
