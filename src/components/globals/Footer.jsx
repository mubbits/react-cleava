import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useTranslation } from "../../../languages";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-12 py-16 border-b border-b-gray-100">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-[#0a477c]">
          <div>
            <h3 className="font-semibold text-2xl mb-4">
              {t("homePage.footer")?.contactTitle}
            </h3>
            <p className="text-md text-lg">{t("homePage.footer")?.phone}</p>
            <p className="text-md text-lg">{t("homePage.footer")?.email}</p>
            <p className="text-md text-lg">{t("homePage.footer")?.address}</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl mb-4">
              {t("homePage.footer")?.companyTitle}
            </h3>
            <p className="text-lg">{t("homePage.footer")?.businessId}</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl mb-4">
              {t("homePage.footer")?.workingHoursTitle}
            </h3>
            <p className="text-lg">{t("homePage.footer")?.weekdays}</p>
            <p className="text-lg">{t("homePage.footer")?.weekends}</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl mb-4">
              {t("homePage.footer")?.servicesTitle}
            </h3>
            <p className="text-lg">{t("homePage.footer")?.homeCleaning}</p>
            <p className="text-lg">{t("homePage.footer")?.officeCleaning}</p>
            <p className="text-lg">{t("homePage.footer")?.moveCleaning}</p>
          </div>
        </div>
        <div className="flex space-x-4 mb-8">
          <a
            href="https://www.facebook.com/share/17CDTxnHJu/?mibextid=wwXIfr"
            target="_blank"
            className="w-8 h-8 bg-white text-black rounded flex items-center justify-center hover:bg-gray-800"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/cleava.helsinki?igsh=MW96cXg4NzFucGpybg==&utm_source=ig_contact_invite"
            target="_blank"
            className="w-8 h-8 bg-white text-black rounded flex items-center justify-center hover:bg-gray-800"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
