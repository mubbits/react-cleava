import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import ServiceDropdown from "../dropdown/ServiceDropdown";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "../../../languages";
const Navbar = () => {
  const { t } = useTranslation();
  const handleContact = () => {
    window.open(
      "https://share-eu1.hsforms.com/1MiJZ4Ra2QaG6-egWolPdzA2e0xr3?__hstc=253726550.3acd6dad8646f957a81a34364f4f3516.1760348459763.1760348459763.1760353918422.2&__hssc=253726550.12.1760353918422&__hsfp=2111929243"
    );
  };
  return (
    <header className="bg-[#f2f2f2] fixed w-full top-0 left-0 z-100">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-serif">
          <img src={logo} className="h-12 w-full" alt="Cleava logo" />
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-center space-x-8 text-md font-medium">
          <Link
            to="."
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
          <button
            className="bg-[#002350] rounded-full text-white px-6 py-2"
            onClick={handleContact}
          >
            {t("navbar.contact")}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
