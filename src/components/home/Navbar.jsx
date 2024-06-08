import { UtensilsCrossed } from "lucide-react";
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { homeNavLinks } from "@/constants";

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
            {homeNavLinks.map((item) => (
              <NavLink
                className="hover:text-primary font-semibold"
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Button onClick={() => navigate("/dashboard")}>Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
