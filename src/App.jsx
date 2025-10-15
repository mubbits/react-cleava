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
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/story" element={<Story />} />
        <Route path="/home-cleaning" element={<HomeCleaning />} />
        <Route path="/moving-cleaning" element={<MovingCleaning />} />
        <Route path="/office-cleaning" element={<OfficeCleaning />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
