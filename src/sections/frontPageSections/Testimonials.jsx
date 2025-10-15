import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import google from "../../assets/images/google.svg";
import { useTranslation } from "../../../languages";
export default function Testimonials() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const next = () =>
    setIndex(
      (prev) =>
        (prev + 1) %
        t("homePage.testimonials.reviews", { returnObjects: true }).length
    );
  const prev = () =>
    setIndex(
      (prev) =>
        (prev -
          1 +
          t("homePage.testimonials.reviews", { returnObjects: true }).length) %
        t("homePage.testimonials.reviews", { returnObjects: true }).length
    );
  const reviews = t("homePage.testimonials.reviews", { returnObjects: true });
  return (
    <div className="h-screen pt-24">
      <div className="flex flex-col items-center">
        <p className="text-center uppercase mb-2 text-[#023666]">
          {t("homePage.testimonials.topText")}
        </p>
        <h2 className="text-5xl font-serif italic text-center text-gray-800 mb-4">
          {t("homePage.testimonials.title")}
        </h2>
        <p className="text-center font-medium mb-8 ">
          {t("homePage.testimonials.quote")}
        </p>
        <button className="border-b-2 border-b-[#023666]">
          {t("homePage.testimonials.button")}
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 p-6 md:p-12 bg-white">
        {/* Left Summary */}
        <div className="flex flex-col justify-center text-center w-full md:w-1/4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t("homePage.testimonials.summaryTitle")}
          </h3>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-3xl" />
            ))}
          </div>
          <p className="text-gray-600">
            {t("homePage.testimonials.basedOn")}{" "}
            <span className="font-bold">
              {t("homePage.testimonials.reviewsCount")}
            </span>
          </p>
          <div className="flex justify-center mt-2">
            <img src={google} className="h-10 w-auto text-[#4285F4]" />
          </div>
        </div>
        {/* Reviews Grid */}
        <div className="relative w-full md:w-3/4 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white py-5 px-2 border border-gray-100"
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold text-lg">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-md">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.date}</p>
                  </div>
                  <img
                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                    className="ml-auto text-[#4285F4] size-6"
                  />
                </div>
                <div className="flex gap-2 items-center text-yellow-400 mb-2">
                  <div className="flex">
                    {[...Array(r.rating)].map((_, i) => (
                      <FaStar size={20} key={i} />
                    ))}
                  </div>
                  <span className="text-blue-500">
                    <img
                      src="https://cdn.trustindex.io/assets/icon/ti-verified.svg"
                      className="size-4"
                    />
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{r.review}</p>
                <button className="text-sm text-gray-500 mt-2">
                  {t("homePage.testimonials.readMore")}
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
          >
            <IoIosArrowBack className="text-xl" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
          >
            <IoIosArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
