import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import ServiceDropdown from "../dropdown/ServiceDropdown";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "../../../languages";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContact = () => {
    navigate("/contact-us");
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white fixed  w-full top-0 left-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} className="h-auto w-20" alt="Cleava logo" />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-md font-medium">
          <Link
            to="/"
            className="text-black hover:border-b-2 hover:border-b-[#002350]"
          >
            {t("navbar.home")}
          </Link>
          <ServiceDropdown />
          <Link
            to="/story"
            className="text-black hover:border-b-2 hover:border-b-[#002350]"
          >
            {t("navbar.story")}
          </Link>
          <Link
            to="/blogs"
            className="text-black hover:border-b-2 hover:border-b-[#002350]"
          >
            {t("navbar.blog")}
          </Link>
          <LanguageSwitcher />
          <a
            className="bg-[#002350] rounded-full text-white px-6 py-2 hover:bg-[#001a3a]"
            href="https://wa.me/+358451878083"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navbar.contact")}
          </a>
        </div>

        <button
          className="md:hidden text-[#002350] focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#f2f2f2] shadow-inner border-t border-gray-200">
          <div className="flex flex-col items-start px-6 py-4 space-y-4 text-md font-medium">
            <Link
              to="/"
              className="w-full text-black hover:text-[#002350]"
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.home")}
            </Link>
            <ServiceDropdown mobile />
            <Link
              to="/story"
              className="w-full text-black hover:text-[#002350]"
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.story")}
            </Link>
            <Link
              to="/blogs"
              className="w-full text-black hover:text-[#002350]"
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.blog")}
            </Link>
            <LanguageSwitcher />
            <a
              className="bg-[#002350] w-full rounded-full text-white px-6 py-2 hover:bg-[#001a3a]"
              href="https://wa.me/+358451878083"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.contact")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
