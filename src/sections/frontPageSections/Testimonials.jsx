import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import google from "../../assets/images/google.svg";
import { useTranslation } from "../../../languages";

export default function Testimonials() {
  const { t } = useTranslation();
  const reviews = t("homePage.testimonials.reviews", { returnObjects: true });

  const [index, setIndex] = useState(0);
  const visibleCount = 4; // how many reviews to show at once on desktop

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // Calculate visible reviews (simple circular carousel)
  const visibleReviews = reviews
    .slice(index, index + visibleCount)
    .concat(
      reviews.slice(0, Math.max(0, index + visibleCount - reviews.length))
    );

  return (
    <section className="min-h-screen bg-white py-20 sm:py-24">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center px-4 mb-12">
        <p className="uppercase text-[#023666] text-sm sm:text-base mb-2 tracking-wider">
          {t("homePage.testimonials.topText")}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-gray-800 mb-4 leading-tight">
          {t("homePage.testimonials.title")}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mb-6">
          {t("homePage.testimonials.quote")}
        </p>
        <a
          href="https://wa.me/+358451878083"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-b-[#023666] text-[#023666] text-sm sm:text-base font-medium hover:opacity-80 transition"
        >
          {t("homePage.testimonials.button")}
        </a>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 sm:px-8 md:px-12">
        {/* Left Summary */}
        <div className="flex flex-col justify-center text-center w-full md:w-1/4 bg-white">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            {t("homePage.testimonials.summaryTitle")}
          </h3>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400 text-2xl sm:text-3xl"
              />
            ))}
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            {t("homePage.testimonials.basedOn")}{" "}
            <span className="font-semibold">
              {t("homePage.testimonials.reviewsCount")}
            </span>
          </p>
          <div className="flex justify-center mt-3">
            <img src={google} alt="Google" className="h-8 sm:h-10 w-auto" />
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-transform duration-500">
            {visibleReviews.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#023666] text-white flex items-center justify-center font-semibold text-lg">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.date}</p>
                  </div>
                  <img
                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                    className="ml-auto size-5 sm:size-6"
                    alt="Google icon"
                  />
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(r.rating)].map((_, j) => (
                    <FaStar
                      key={j}
                      className="text-yellow-400 text-lg sm:text-xl"
                    />
                  ))}
                  <img
                    src="https://cdn.trustindex.io/assets/icon/ti-verified.svg"
                    className="ml-1 size-4"
                    alt="Verified"
                  />
                </div>

                <p className="text-gray-700 text-sm sm:text-base line-clamp-5">
                  {r.review}
                </p>
                <button className="text-xs sm:text-sm text-gray-500 mt-2 hover:text-gray-700 transition">
                  {t("homePage.testimonials.readMore")}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <IoIosArrowBack className="text-lg sm:text-xl" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <IoIosArrowForward className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
