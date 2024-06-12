import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const meals = [3300, 3500, 4000, 4200, 3800, 3900, 4100];

const xLabels = [1, 5, 11, 16, 21, 26, 30];

export default function BazarExpenseChart() {
  return (
    <LineChart
      //   width={500}
      height={300}
      series={[{ data: meals, label: "Bazar Expense" }]}
      xAxis={[{ scaleType: "point", data: xLabels, label: "Date" }]}
    />
  );
}
