import Profile from "@/pages/Profile/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import HomeLayout from "../layouts/HomeLayout";
import BazarList from "../pages/Dashboard/BazarList/BazarList";
import Dashboard from "../pages/Dashboard/Dashboard";
import Deposits from "../pages/Dashboard/Deposits/Deposits";
import Expense from "../pages/Dashboard/Expense/Expense";
import Members from "../pages/Dashboard/Members/Members";
import MyMeals from "../pages/Dashboard/MyMeals/MyMeals";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my-meals",
        element: <MyMeals />,
      },
      {
        path: "/dashboard/deposits",
        element: <Deposits />,
      },
      {
        path: "/dashboard/expense",
        element: <Expense />,
      },
      {
        path: "/dashboard/bazar-list",
        element: <BazarList />,
      },
      {
        path: "/dashboard/members",
        element: <Members />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);
