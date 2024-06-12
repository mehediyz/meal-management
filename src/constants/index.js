import {
  LayoutDashboard,
  Receipt,
  ShoppingBasket,
  User,
  Users,
  Utensils,
  Wallet,
} from "lucide-react";

export const dashboardNavLinks = [
  // { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/manage-meals", label: "Manage Meals", icon: Utensils },
  { href: "/dashboard/deposits", label: "Deposits", icon: Wallet },
  { href: "/dashboard/expense", label: "Expense", icon: Receipt },
  { href: "/dashboard/bazar-list", label: "Bazar List", icon: ShoppingBasket },
  { href: "/dashboard/members", label: "Members", icon: Users },
  // { href: "/dashboard/profile", label: "My Profile", icon: User },
];
