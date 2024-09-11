import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const Mainlayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Mainlayout;
