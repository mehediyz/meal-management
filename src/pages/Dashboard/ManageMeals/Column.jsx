import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import EditMealDialog from "./EditMealDialog";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              className="w-full object-cover"
              src={row.original.photo}
            />
            <AvatarFallback>{row?.getValue("name")[0]}</AvatarFallback>
          </Avatar>
          {row.getValue("name")}
        </div>
      );
    },
  },
  {
    accessorKey: "breakfast",
    header: "Breakfast",
  },
  {
    accessorKey: "lunch",
    header: "Lunch",
  },
  {
    accessorKey: "dinner",
    header: "Dinner",
  },
  {
    accessorKey: "updated",
    header: "Updated",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    header: () => {
      return <p className="text-center">Action</p>;
    },
    cell: ({ row }) => {
      const details = row.original;

      return (
        <div className="text-center">
          <EditMealDialog />
        </div>
      );
    },
  },
];
