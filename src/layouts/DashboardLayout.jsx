import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import Sidebar from "../components/dashboard/Sidebar";
import Footer from "@/components/home/Footer";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="p-4 flex-1 bg-primary-50">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
