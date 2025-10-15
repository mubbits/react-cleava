import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/action";
export default function LanguageSwitcher() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => dispatch(setLanguage("fi"))}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          language === "fi" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        FI
      </button>
      <button
        onClick={() => dispatch(setLanguage("en"))}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          language === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
    </div>
  );
}
