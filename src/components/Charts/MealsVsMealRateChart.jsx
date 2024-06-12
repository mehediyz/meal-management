import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const mealRate = [41.25, 38.1, 36.5, 34.45, 33.0, 34.5, 35.4];

const meals = [12, 15, 20, 25, 22, 25, 20];

const xLabels = [1, 5, 11, 16, 21, 26, 30];

export default function MealsVsMealRateChart() {
  return (
    <LineChart
      //   width={500}
      height={300}
      series={[
        { data: meals, label: "Meals" },
        { data: mealRate, label: "Meal Rate" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels, label: "Date" }]}
    />
  );
}
