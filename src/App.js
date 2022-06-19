import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ShopBag from "./components/ShopBag";
import Footer from "./components/Footer";

import BookState from "./context/books/BookState";

function App() {
  return (
    <div className="App">
      <BookState>
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
          <Footer />
        </Router>
      </BookState>
    </div>
  );
}

export default App;
