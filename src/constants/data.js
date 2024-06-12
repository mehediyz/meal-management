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

// Member details
export const members = [
  {
    id: "1",
    name: "Mehedi Hasan",
    photo:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "m@example.com",
    phone: "01799703788",
    bio: "ICT (3rd Year), IU",
    hometown: "Dhaka",
    joinedDate: "12 June, 2024",
  },
  {
    id: "2",
    name: "Sheikh Mehedi",
    photo:
      "https://avatars.githubusercontent.com/u/113818748?s=400&u=f13b090f244a050abe2fe8850870dea7766c0902&v=4",
    email: "m@example.com",
    phone: "01699703788",
    bio: "ICT (3rd Year), IU",
    hometown: "Sylhet",
    joinedDate: "12 June, 2024",
  },

  // ...
];

// Bazar List
export const bazarList = [
  {
    name: ["Mehedi Hasan", "John Doe"],
    photo: [
      "https://avatars.githubusercontent.com/u/113818748?s=400&u=f13b090f244a050abe2fe8850870dea7766c0902&v=4",
      "https://github.com/shadcn.png",
    ],
    date: "16 June, 2024",
    status: "Completed",
    amount: 4000,
  },
  {
    name: ["Mehedi Hasan", "Bob"],
    photo: [
      "https://avatars.githubusercontent.com/u/113818748?s=400&u=f13b090f244a050abe2fe8850870dea7766c0902&v=4",
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    date: "20 June, 2024",
    status: "Pending",
    amount: 0,
  },
];

// Deposits
export const deposits = [
  {
    id: "1",
    name: "Mehedi Hasan",
    photo:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deposit: 4000,
    totalMeals: 50,
  },
  {
    id: "2",
    name: "Sheikh Mehedi",
    photo:
      "https://avatars.githubusercontent.com/u/113818748?s=400&u=f13b090f244a050abe2fe8850870dea7766c0902&v=4",
    deposit: 5000,
    totalMeals: 55,
  },

  // ...
];
