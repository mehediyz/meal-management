import { getStartedData } from "@/constants/data";
import GetStartedCard from "./GetStartedCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="bg-primary text-white p-12 rounded-md flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold">Start your Journey!</h1>
          <p className="py-2 text-grey-50">It's easier than you think</p>
          <Button
            variant="secondary"
            className="my-2"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {getStartedData.map((item) => (
            <GetStartedCard key={item.title} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
