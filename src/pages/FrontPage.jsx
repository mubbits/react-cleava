import { useTranslation } from "../../languages";
import About from "../sections/frontPageSections/About";
import CTA from "../sections/frontPageSections/CTA";
import Hero from "../sections/frontPageSections/Hero";
import Services from "../sections/frontPageSections/Services";
import Testimonials from "../sections/frontPageSections/Testimonials";
import Values from "../sections/frontPageSections/Values";
// const ChatButton = () => (
//   <button className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
//     <MessageCircle className="w-6 h-6 text-white" />
//   </button>
// );
export default function FrontPage() {
  const { t } = useTranslation();
  const values = t("homePage.values");
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Values values={values} />
      <Testimonials />
      <CTA />
      {/* <ChatButton /> */}
    </div>
  );
}
