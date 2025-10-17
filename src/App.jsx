import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/globals/Footer";
import Navbar from "./components/globals/Navbar";
import Blogs from "./pages/Blogs";
import FrontPage from "./pages/FrontPage";
import HomeCleaning from "./pages/HomeCleaning";
import Story from "./pages/Story";
import MovingCleaning from "./pages/MovingCleaning";
import OfficeCleaning from "./pages/OfficeCleaning";
import Contactus from "./pages/Contactus";
import BlogsDetail from "./pages/BlogsDetail";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <>
      <a
        href="https://wa.me/+358451878083"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 text-green-700 font-bold z-100 shadow-lg rounded-full hover:scale-105 transition-transform cursor-pointer p-2 bg-white"
      >
        <FaWhatsapp size={40} />
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/story" element={<Story />} />
        <Route path="/home-cleaning" element={<HomeCleaning />} />
        <Route path="/moving-cleaning" element={<MovingCleaning />} />
        <Route path="/office-cleaning" element={<OfficeCleaning />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/blog/:id" element={<BlogsDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
