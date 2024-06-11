import {
  Facebook,
  Github,
  Linkedin,
  UtensilsCrossed,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center gap-4">
          <Link
            to={"/"}
            className="text-xl flex items-center gap-2 text-white font-semibold"
          >
            <UtensilsCrossed /> Meals
          </Link>
          <span className="text-white">|</span>
          <span className="text-grey-50">
            © 2024 Meals —
            <a href="https://www.linkedin.com/in/mehediyz/" target="_blank">
              @Mehedi Hasan
            </a>
          </span>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <span className="text-grey-50">
              <Link to="/tos">Terms of Service</Link>
            </span>
            <span className="text-white">|</span>
            <div className="flex items-center gap-2 text-white">
              <a href="https://www.github.com/mehediyz" target="_blank">
                <Github />
              </a>
              <a href="https://www.facebook.com/mehediyyzz/" target="_blank">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/in/mehediyz/" target="_blank">
                <Linkedin />
              </a>
              <a href="https://youtube.com/@mehediyz" target="_blank">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
