import "./App.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ShopBag from "./components/ShopBag";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/registro" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/carrito" element={<ShopBag />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
