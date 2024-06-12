import { NavLink } from "react-router-dom";
import { dashboardNavLinks } from "../../constants";
import { LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[250px]">
      <div className="flex flex-col">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `px-6 py-3 ${
              isActive
                ? "bg-primary text-white"
                : "hover:text-primary hover:bg-primary-50"
            }`
          }
          end
        >
          <div className="flex gap-4 items-center">
            {<LayoutDashboard />}
            Dashboard
          </div>
        </NavLink>
        {dashboardNavLinks.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `px-6 py-3 ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:text-primary hover:bg-primary-50"
              }`
            }
          >
            <div className="flex gap-4 items-center">
              {<item.icon />}
              {item.label}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
