import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/order" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
