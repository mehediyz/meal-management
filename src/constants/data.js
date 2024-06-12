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
    photo: "https://avatars.githubusercontent.com/u/113818748?v=4",
    email: "mehedi@example.com",
    phone: "01723432411",
    bio: "ICT (3rd Year), IU",
    hometown: "Dhaka",
    joinedDate: "12 June, 2024",
  },
  {
    id: "2",
    name: "Ayesha Siddiqua",
    photo:
      "https://images.pexels.com/photos/5477855/pexels-photo-5477855.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "ayesha@example.com",
    phone: "01823432312",
    bio: "Computer Science (2nd Year), DU",
    hometown: "Chittagong",
    joinedDate: "10 March, 2023",
  },
  {
    id: "3",
    name: "Rahul Chatterjee",
    photo:
      "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "rahul@example.com",
    phone: "01923432413",
    bio: "Mechanical Engineering (4th Year), RUET",
    hometown: "Rajshahi",
    joinedDate: "5 May, 2022",
  },
  {
    id: "4",
    name: "Fatima Begum",
    photo:
      "https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "fatima@example.com",
    phone: "01723432414",
    bio: "Electrical Engineering (3rd Year), BUET",
    hometown: "Sylhet",
    joinedDate: "25 July, 2021",
  },
  {
    id: "5",
    name: "Shakib Khan",
    photo:
      "https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "shakib@example.com",
    phone: "01523432415",
    bio: "Civil Engineering (2nd Year), CUET",
    hometown: "Khulna",
    joinedDate: "18 August, 2020",
  },
  {
    id: "6",
    name: "Nusrat Jahan",
    photo:
      "https://images.pexels.com/photos/5852981/pexels-photo-5852981.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "nusrat@example.com",
    phone: "01623432416",
    bio: "Business Administration (4th Year), IBA",
    hometown: "Barishal",
    joinedDate: "12 November, 2019",
  },
  {
    id: "7",
    name: "Tanvir Ahmed",
    photo:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "tanvir@example.com",
    phone: "01323432417",
    bio: "Law (1st Year), DU",
    hometown: "Comilla",
    joinedDate: "23 January, 2018",
  },
  {
    id: "8",
    name: "Mitu Rahman",
    photo:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "mitu@example.com",
    phone: "01423432418",
    bio: "Architecture (2nd Year), BUET",
    hometown: "Rangpur",
    joinedDate: "30 September, 2017",
  },
  {
    id: "9",
    name: "Fahim Islam",
    photo:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "fahim@example.com",
    phone: "01923432419",
    bio: "Economics (3rd Year), NSU",
    hometown: "Mymensingh",
    joinedDate: "14 April, 2016",
  },
  {
    id: "10",
    name: "Samira Akter",
    photo:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "samira@example.com",
    phone: "01823432420",
    bio: "Pharmacy (4th Year), AIUB",
    hometown: "Gazipur",
    joinedDate: "6 December, 2015",
  },

  // ...
];

// Bazar List
export const bazarList = [
  {
    name: ["Mehedi Hasan", "Shakib Khan"],
    photo: [
      "https://avatars.githubusercontent.com/u/113818748?v=4",
      "https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    date: "1 June, 2024",
    status: "Completed",
    amount: 4000,
  },
  {
    name: ["Ayesha Siddiqua", "Nusrat Jahan"],
    photo: [
      "https://images.pexels.com/photos/5477855/pexels-photo-5477855.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5852981/pexels-photo-5852981.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    date: "5 June, 2024",
    status: "Completed",
    amount: 5000,
  },
  {
    name: ["Tanvir Ahmed", "Rahul Chatterjee"],
    photo: [
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    date: "10 June, 2024",
    status: "Pending",
    amount: 0,
  },
];

// Deposits
export const deposits = [
  {
    id: "1",
    name: "Mehedi Hasan",
    photo: "https://avatars.githubusercontent.com/u/113818748?v=4",
    deposit: 5000,
    totalMeals: 55,
  },
  {
    id: "2",
    name: "Ayesha Siddiqua",
    photo:
      "https://images.pexels.com/photos/5477855/pexels-photo-5477855.jpeg?auto=compress&cs=tinysrgb&w=600",
    deposit: 2000,
    totalMeals: 15,
  },
  {
    id: "3",
    name: "Rahul Chatterjee",
    photo:
      "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&w=600",
    deposit: 5000,
    totalMeals: 50,
  },
  {
    id: "4",
    name: "Fatima Begum",
    photo:
      "https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&w=600",
    deposit: 1000,
    totalMeals: 5,
  },
  {
    id: "5",
    name: "Shakib Khan",
    photo:
      "https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=600",
    deposit: 5000,
    totalMeals: 55,
  },
  {
    id: "6",
    name: "Nusrat Jahan",
    photo:
      "https://images.pexels.com/photos/5852981/pexels-photo-5852981.jpeg?auto=compress&cs=tinysrgb&w=600",
    deposit: 5000,
    totalMeals: 55,
  },

  // ...
];

// Expenses
export const expenses = [
  {
    id: "1",
    name: "Rice",
    amount: 2600,
    date: "10 June, 2024",
    status: "Pending",
  },
  {
    id: "2",
    name: "Internet",
    amount: 1200,
    date: "10 June, 2024",
    status: "Paid",
  },
  {
    id: "3",
    name: "Gas",
    amount: 1200,
    date: "19 June, 2024",
    status: "Pending",
  },

  // ...
];

// Meals today
export const membersMealToday = [
  {
    id: "1",
    name: "Mehedi Hasan",
    photo: "https://avatars.githubusercontent.com/u/113818748?v=4",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
    phone: "01799703788",
  },
  {
    id: "2",
    name: "Ayesha Siddiqua",
    photo:
      "https://images.pexels.com/photos/5477855/pexels-photo-5477855.jpeg?auto=compress&cs=tinysrgb&w=600",

    phone: "01823432312",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "3",
    name: "Rahul Chatterjee",
    photo:
      "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&w=600",

    phone: "01923432413",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "4",
    name: "Fatima Begum",
    photo:
      "https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&w=600",

    phone: "01723432414",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "5",
    name: "Shakib Khan",
    photo:
      "https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=600",

    phone: "01523432415",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "6",
    name: "Nusrat Jahan",
    photo:
      "https://images.pexels.com/photos/5852981/pexels-photo-5852981.jpeg?auto=compress&cs=tinysrgb&w=600",

    phone: "01623432416",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "7",
    name: "Tanvir Ahmed",
    photo:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",

    phone: "01323432417",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "8",
    name: "Mitu Rahman",
    photo:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",

    phone: "01423432418",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "9",
    name: "Fahim Islam",
    photo:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    phone: "01923432419",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
  {
    id: "10",
    name: "Samira Akter",
    photo:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    phone: "01823432420",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
  },
];
