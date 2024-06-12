import StatsCard from "@/components/dashboard/StatsCard";
import Title from "@/components/dashboard/Title";
import { individualStatsData, overallStatsData } from "@/constants/data";
import DepositExpenseBarChart from "@/components/Charts/DepositExpenseBarChart";
import MealsVsMealRateChart from "@/components/Charts/MealsVsMealRateChart";
import BazarExpenseChart from "@/components/Charts/BazarExpenseChart";

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
      <div className="mt-4">
        <Title title={"Members Stats"} />
        <div className="grid grid-cols-4 gap-4">
          {overallStatsData.map((item) => (
            <StatsCard key={item.title} data={item} />
          ))}
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-12">
        <div className="col-span-2">
          <DepositExpenseBarChart />
        </div>
        <BazarExpenseChart />
        <MealsVsMealRateChart />
      </div>
    </div>
  );
};

export default Dashboard;
