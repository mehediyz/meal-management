import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="p-4 flex-1 bg-dark">
          <Outlet />
        </div>
      </div>
      DashboardFooter
    </>
  );
};

export default DashboardLayout;
