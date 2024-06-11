import {
  LayoutDashboard,
  LogIn,
  Receipt,
  ShoppingBasket,
  SquareKanban,
  User,
  Users,
  Utensils,
  Wallet,
} from "lucide-react";

export const individualStatsData = [
  {
    title: "My Meal Today",
    value: "1 - 1 - 0",
    icon: Users,
  },
  {
    title: "My Total Meals",
    value: "100",
    icon: Utensils,
  },
  {
    title: "Deposit",
    value: "1000 Tk",
    icon: Wallet,
  },
  {
    title: "Meal Rate",
    value: "40 Tk",
    icon: Receipt,
  },
];

export const overallStatsData = [
  {
    title: "Meals Today",
    value: "10 - 15 - 11",
    icon: Users,
  },
  {
    title: "Total Meals",
    value: "200",
    icon: Utensils,
  },
  {
    title: "Deposit",
    value: "10000 Tk",
    icon: Wallet,
  },
  {
    title: "Balance",
    value: "4000 Tk",
    icon: Receipt,
  },
];

// Features
export const featuresData = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Overview of Meals",
  },
  {
    icon: User,
    title: "Member Profile",
    description: "Profile for mess members",
  },
  {
    icon: Users,
    title: "Manage Members",
    description: "Add, edit, delete mess members",
  },
  {
    icon: Utensils,
    title: "Manage Meals",
    description: "Update meals",
  },
  {
    icon: Wallet,
    title: "Deposits",
    description: "Manage deposits",
  },
  {
    icon: Receipt,
    title: "Expenses",
    description: "Record every expenses",
  },
  {
    icon: ShoppingBasket,
    title: "Bazar List",
    description: "Record of Bazar List",
  },
  {
    icon: SquareKanban,
    title: "Summary",
    description: "Final report of the month",
  },
];

//
export const getStartedData = [
  {
    icon: LogIn,
    step: 1,
    title: "Sign Up",
    description: "Create your free account",
  },
  {
    icon: Users,
    step: 2,
    title: "Add Members",
    description: "Add your mess members",
  },
  {
    icon: Utensils,
    step: 3,
    title: "Start Managing!",
    description: "Explore all the features",
  },
];
