import { featuresData } from "@/constants/data";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="container mx-auto py-32">
      <h1 className="text-center text-5xl">Features</h1>
      <div className="grid grid-cols-4 gap-4 pt-12">
        {featuresData.map((item) => (
          <FeatureCard key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
