import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "../../../languages";
export default function ServiceDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dropdownRef = useRef(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-gray-800 font-medium hover:text-[#002350] transition"
      >
        {t("menuTitle")}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
          <Link
            to="/home-cleaning"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#002350] transition"
          >
            {t("homeCleaningText")}
          </Link>
          <Link
            to="/moving-cleaning"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#002350] transition"
          >
            {t("movingCleaningText")}
          </Link>
          <Link
            to="/office-cleaning"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#002350] transition"
          >
            {t("officeCleaningText")}
          </Link>
        </div>
      )}
    </div>
  );
}
