import { UtensilsCrossed } from "lucide-react";
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link
            to={"/"}
            className="text-xl flex items-center gap-2 text-primary font-semibold"
          >
            <UtensilsCrossed /> Meals
          </Link>
          <div className="flex gap-6 items-center">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-primary" : "hover:text-primary"
                } font-semibold`
              }
              to={"/"}
            >
              Home
            </NavLink>

            <a className="hover:text-primary font-semibold" href={"/#features"}>
              Features
            </a>
            <a className="hover:text-primary font-semibold" href={"/#contact"}>
              Contact
            </a>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-primary" : "hover:text-primary"
                } font-semibold`
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </div>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
