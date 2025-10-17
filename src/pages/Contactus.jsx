import React, { useEffect } from "react";
import { useTranslation } from "../../languages";

const Contactus = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Contact Us - CLEAVA";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-24">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-serif tracking-wide">CLEAVA</h1>
        </div>

        <p className="text-sm text-gray-700 mb-6">
          {t("contactPage.subtitle")}
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("contactPage.fields.firstName")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("contactPage.fields.lastName")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("contactPage.fields.email")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("contactPage.fields.phone")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("contactPage.fields.selectService")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <select className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400">
              <option value="">{t("contactPage.options.choose")}</option>
              <option value="option1">
                {t("contactPage.options.consultation")}
              </option>
              <option value="option2">
                {t("contactPage.options.support")}
              </option>
              <option value="option3">{t("contactPage.options.other")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("contactPage.fields.message")}
            </label>
            <textarea
              rows="3"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            ></textarea>
          </div>

          <div className="text-xs text-gray-600 leading-relaxed space-y-2">
            <p>{t("contactPage.privacyText1")}</p>
            <p>{t("contactPage.privacyText2")}</p>
          </div>

          <div className="space-y-2 text-sm">
            <label className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
              <span>{t("contactPage.checkboxes.communication")}</span>
            </label>
            <label className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" required />
              <span>{t("contactPage.checkboxes.dataConsent")}</span>
              <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex justify-center mt-4">
            <div className="bg-gray-100 border border-gray-300 rounded-md w-64 h-16 flex items-center justify-center text-gray-500 text-sm">
              {t("contactPage.recaptcha")}
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
            >
              {t("contactPage.submitButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
