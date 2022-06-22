import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Catalog from "./components/Catalog/Catalog";
import Signup from "./components/UserComponents/Signup";
import Login from "./components/UserComponents/Login";
import Profile from "./components/UserComponents/Profile";
import ShopBag from "./components/UserComponents/ShopBag";
import BookDetail from "./components/Catalog/BookDetail";
import Footer from "./components/Home/Footer";

import BookState from "./context/books/BookState";
import UserState from "./context/users/UserState";

function App() {
  return (
    <div className="App">
      <UserState>
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
              <Route path="/detalle/:_id" element={<BookDetail />} />
            </Routes>
            <Footer />
          </Router>
        </BookState>
      </UserState>
    </div>
  );
}

export default App;
