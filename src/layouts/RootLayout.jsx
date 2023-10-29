import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className=" max-w-5xl  mx-auto px-5">
      <Header />
      <main className="bg-blue-50 min-h-screen p-5 mt-3 rounded-md">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
