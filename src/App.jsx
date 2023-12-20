import "./App.css";
import Display from "./components/Display";
import Nav from "./components/Nav";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Admin from "./components/Admin";
import PrivateRoutes from "./components/PrivateRoutes";
import Category from "./components/Category";
import CategoryDisplay from "./components/CategoryDisplay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="/product/category/:id" element={<CategoryDisplay />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
