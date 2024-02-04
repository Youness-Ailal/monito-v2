import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WishList from "./pages/WishList";
import Pets from "./pages/Pets";
import Pet from "./pages/Pet";
import { ScrollToTop } from "./utils/helpers";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="pets" element={<Pets />} />
        <Route path="pets/:id" element={<Pet />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
