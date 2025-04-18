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
import FileUpload from "./pages/image";
import Dashboard from "./admin/Home";
import Login from "./admin/Login";
import AMain from "./admin/Main";
import Users from "./admin/Users";
import Stock from "./admin/Stock";
import AProducts from "./admin/Products";
import Acameras from "./admin/Acameras";
import Nvr from "./admin/Nvr";
import Poe from "./admin/Poe";
import Server from "./admin/Server";

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
          <Route path="image" element={<FileUpload />}></Route>
        </Route>
        <Route path="dashboard/home" element={<Dashboard />}>
          <Route path="" element={<AMain />}></Route>
          <Route path="users" element={<Users />} />
          <Route path="stock" element={<Stock />} />
          <Route path="products" element={<AProducts />} />
          <Route path="cameras" element={<Acameras />} />
          <Route path="nvr" element={<Nvr />} />
          <Route path="poe" element={<Poe />} />{" "}
          <Route path="server" element={<Server />} />
        </Route>
        <Route path="dashboard/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
