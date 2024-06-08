import { dashboardImg } from "@/assets/img";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-primary-50 py-20">
      <div className="container mx-auto flex gap-12 items-center justify-between">
        <div className="space-y-6">
          <h1 className="text-6xl leading-tight">
            Effortlessly Manage <br />
            <span className="text-primary font-semibold">Mess Meals</span>
          </h1>
          <p className="text-grey-600">
            Say goodbye to the traditional hand-written meal management system,
            now do it all digitally, effortlessly.
          </p>
          <Button onClick={() => navigate("/signup")}>Get Started</Button>
        </div>

        <img
          className="w-1/2 shadow-md hover:shadow-lg ease-in-out duration-300 hover:-translate-y-2"
          src={dashboardImg}
          alt="Dashboard Image"
        />
      </div>
    </header>
  );
};

export default Hero;
