import StatsCard from "@/components/dashboard/StatsCard";
import { individualStatsData } from "@/constants/data";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between text-grey-600 mb-4">
        <p>Good morning, Mehedi!</p>
        <p className="font-semibold ">7 June, 2024</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {individualStatsData.map((item) => (
          <StatsCard key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
