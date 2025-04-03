import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Cameraproductsdetails from "./pages/Cameraproductdetails";
import Viewproducts from "./pages/Viewproducts";
import Products from "./pages/Products";
import Details from "./components/Extra";
import MyCarousel from "./pages/Other";
import FluidTabs from "./Practice/Lucidtab";

function App() {
  return (
    <BrowserRouter
    //  basename="/trinai_temp"
    >
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" index element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="solutions" element={<Solutions />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route path="viewproducts" element={<Viewproducts />} />
          <Route path="cemaradetails" element={<Cameraproductsdetails />} />
          <Route path="products" element={<Products />}></Route>
          <Route path="extra" element={<Details />}></Route>
          <Route path="carousel" element={<MyCarousel />} />
          <Route path="fluid" element={<FluidTabs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
