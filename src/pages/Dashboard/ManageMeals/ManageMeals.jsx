import ManageMealCalendar from "@/components/ManageMeals/ManageMealCalendar";
import { ManageMealsTable } from "@/components/ManageMeals/ManageMealsTable";
import Title from "@/components/dashboard/Title";

const ManageMeals = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title title={"Manage Meals"} />
        <ManageMealCalendar />
      </div>
      <ManageMealsTable />
    </div>
  );
};

export default ManageMeals;
