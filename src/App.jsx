import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Main from "./pages/Main";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" index element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="solutions" element={<Solutions />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="categories" element={<Categories />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
