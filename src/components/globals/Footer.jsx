import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useTranslation } from "../../../languages";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-[#0a477c]">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 py-12 md:py-16 border-b border-gray-100">
        {/* === Main Footer Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4">
              {t("homePage.footer")?.contactTitle}
            </h3>
            <p className="text-sm md:text-lg">{t("homePage.footer")?.phone}</p>
            <p className="text-sm md:text-lg">{t("homePage.footer")?.email}</p>
            <p className="text-sm md:text-lg">
              {t("homePage.footer")?.address}
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4">
              {t("homePage.footer")?.companyTitle}
            </h3>
            <p className="text-sm md:text-lg">
              {t("homePage.footer")?.businessId}
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4">
              {t("homePage.footer")?.workingHoursTitle}
            </h3>
            <p className="text-sm md:text-lg">
              {t("homePage.footer")?.weekdays}
            </p>
            <p className="text-sm md:text-lg">
              {t("homePage.footer")?.weekends}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4">
              {t("homePage.footer")?.servicesTitle}
            </h3>
            <p className="text-sm md:text-lg">
              {t("homePage.footer")?.homeCleaning}
            </p>
            <p className="text-sm md:text-lg">
              {t("homePage.footer")?.officeCleaning}
            </p>
            <p className="text-sm md:text-lg">
              {t("homePage.footer")?.moveCleaning}
            </p>
          </div>
        </div>

        {/* === Social Media Icons === */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <a
            href="https://www.facebook.com/share/17CDTxnHJu/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-white text-[#0a477c] rounded-full flex items-center justify-center shadow-sm hover:bg-gray-800 hover:text-white transition-all duration-200"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/cleava.helsinki?igsh=MW96cXg4NzFucGpybg==&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-white text-[#0a477c] rounded-full flex items-center justify-center shadow-sm hover:bg-gray-800 hover:text-white transition-all duration-200"
          >
            <Instagram className="w-5 h-5" />
          </a>
          {/* Optional: Add LinkedIn / YouTube */}
          {/* <a href="#" className="..."><Linkedin /></a> */}
          {/* <a href="#" className="..."><Youtube /></a> */}
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="text-center py-4 text-xs md:text-sm text-[#0a477c]/70">
        © {new Date().getFullYear()} Cleava Helsinki. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
