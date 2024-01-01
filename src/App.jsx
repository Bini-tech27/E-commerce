import "./App.css";
import Nav from "./components/Nav";
import ProductDetail from "./components/product/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/user/Register";
import SignIn from "./components/user/SignIn";
import Admin from "./components/Admin/Admin";
import PrivateRoutes from "./components/PrivateRoutes";
import CategoryDisplay from "./components/category/CategoryDisplay";
import Cart from "./components/cart/Cart";
import Products from "./components/Admin/Products";
import UpdateProduct from "./components/Admin/UpdateProduct";
import AddProduct from "./components/Admin/AddProduct";
import User from "./components/Admin/User";
import AddCategory from "./components/Admin/AddCategory";
import Home from "./components/Home";
import CartTable from "./components/cart/CartTable";
import Orders from "./components/Admin/Orders";
import Order from "./components/Order";
import Categories from "./components/Admin/Categories";
import NavAdmin from "./components/Admin/NavAdmin";

function App() {
  const role = localStorage.getItem("user");
  let auth = role ? JSON.parse(role) : null;

  return (
    <div>
      <BrowserRouter>
        
        {!auth || auth.role !== "admin" ? <Nav /> : <NavAdmin />}
        <Routes>
          {auth && auth.role === "admin" ? (
            <>
              <Route path="/" element={<Admin />}></Route>
              <Route path="/dashboard/admin" element={<Admin />}></Route>
              <Route
                path="/dashboard/admin/product"
                element={<Products />}
              ></Route>
              <Route
                path="/dashboard/admin/addProduct"
                element={<AddProduct />}
              ></Route>
              <Route
                path="/dashboard/admin/updateProduct/:id"
                element={<UpdateProduct />}
              ></Route>
              <Route path="/dashboard/admin/user" element={<User />}></Route>
              <Route
                path="/dashboard/admin/orders"
                element={<Orders />}
              ></Route>
              <Route
                path="/dashboard/admin/category"
                element={<Categories />}
              ></Route>
              <Route
                path="/dashboard/admin/addCategory"
                element={<AddCategory />}
              ></Route>
            </>
          ) : (
            <>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/product/category/:id"
                element={<CategoryDisplay />}
              ></Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/product/:id" element={<ProductDetail />}></Route>
              </Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/cart" element={<CartTable />}></Route>
              <Route path="/order" element={<Order />}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

