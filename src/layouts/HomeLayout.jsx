import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
