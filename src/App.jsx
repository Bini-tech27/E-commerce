import "./App.css";
import Display from "./components/Display";
import Nav from "./components/Nav";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="/product/:id" element={<User />}></Route>
          <Route path="/register" element={<User />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
