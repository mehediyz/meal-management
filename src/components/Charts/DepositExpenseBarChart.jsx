import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { deposits } from "@/constants/data";

const DepositsData = deposits.map((item) => item.deposit);
const ExpensesData = [300, 900, 1500, 2000, 1700, 1400, 2500, 1800, 3200, 1000];
const xLabels = deposits.map((item) => item.name.split(" ")[0]);

export default function DepositExpenseBarChart() {
  return (
    <BarChart
      //   width={800}
      height={400}
      series={[
        { data: DepositsData, label: "Deposit", id: "Deposit" },
        { data: ExpensesData, label: "Expense", id: "Expense" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
