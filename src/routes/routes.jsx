import Profile from "@/pages/Dashboard/Members/Profile/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import HomeLayout from "../layouts/HomeLayout";
import BazarList from "../pages/Dashboard/BazarList/BazarList";
import Dashboard from "../pages/Dashboard/Dashboard";
import Deposits from "../pages/Dashboard/Deposits/Deposits";
import Expense from "../pages/Dashboard/Expense/Expense";
import Members from "../pages/Dashboard/Members/Members";
import ManageMeals from "../pages/Dashboard/ManageMeals/ManageMeals";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Signup from "@/pages/Signup/Signup";
import Login from "@/pages/Login/Login";
import Blog from "@/pages/Blog/Blog";
import BlogLayout from "@/layouts/BlogLayout";
import DynamicBlogPage from "@/pages/Blog/DynamicBlogPage";
import AddMember from "@/components/Members/Add/AddMember";

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
    path: "/blog",
    element: <BlogLayout />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <DynamicBlogPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
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
        path: "/dashboard/manage-meals",
        element: <ManageMeals />,
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
        path: "/dashboard/members/:id",
        element: <Profile />,
      },
      {
        path: "/dashboard/members/add-member",
        element: <AddMember />,
      },
    ],
  },
]);
