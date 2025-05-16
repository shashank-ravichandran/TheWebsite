import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
}

export default App;
