import { Users } from "lucide-react";

const FeatureCard = ({ data }) => {
  return (
    <div className="bg-white p-6 hover:shadow-md ease-in-out duration-300 hover:-translate-y-1 rounded-md border">
      <div className="flex items-center flex-col gap-2">
        <data.icon className="text-primary" size={"48px"} />
        <h1 className="text-xl text-center">{data.title}</h1>
        <p className="text-grey-500 text-sm text-center">{data.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
