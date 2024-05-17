import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/products" element={<Vegetables />} /> */}
        {/* <Route path="/contacts" element={<ContactPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
