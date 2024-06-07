import { NavLink } from "react-router-dom";
import { dashboardNavLinks } from "../../constants";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[250px]">
      <div className="flex flex-col">
        {dashboardNavLinks.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `px-4 py-3 ${
                isActive
                  ? "bg-brand-primary text-invert"
                  : "hover:text-brand-primary"
              }`
            }
            end
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
