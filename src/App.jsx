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
import Order from "./components/Admin/Order";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
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
          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/dashboard/admin" element={<Admin />}></Route>
          <Route path="/dashboard/admin/product" element={<Products />}></Route>
          <Route
            path="/dashboard/admin/addProduct"
            element={<AddProduct />}
          ></Route>
          <Route
            path="/dashboard/admin/updateProduct/:id"
            element={<UpdateProduct />}
          ></Route>
          <Route path="/dashboard/admin/user" element={<User />}></Route>
          <Route path="/dashboard/admin/orders" element={<Order />}></Route>

          <Route
            path="/dashboard/admin/category"
            element={<AddCategory />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
