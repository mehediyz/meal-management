import {
  CreditCard,
  LifeBuoy,
  LogOut,
  Plus,
  User,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-background border-b">
        <div className="flex justify-between items-center h-16 pl-12 pr-4">
          <Link
            to={"/dashboard"}
            className="text-xl flex items-center gap-2 text-primary font-semibold"
          >
            <UtensilsCrossed /> Meals
          </Link>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-4 items-center cursor-pointer py-2 px-6 hover:bg-primary-50">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/113818748?v=4" />
                    <AvatarFallback>MH</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-grey-600 font-semibold">
                      Mehedi Hasan
                    </h2>
                    <p className="text-grey-600 text-sm">Manager</p>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => navigate("members/1")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => navigate("members")}>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Members</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() => navigate("members/add-member")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Member</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardNavbar;
