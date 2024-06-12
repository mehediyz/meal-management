import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import ExpenseEdit from "./ExpenseEdit";
import ExpenseDelete from "./ExpenseDelete";
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
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className={`${row.original.status == "Paid" && "text-green-500"}`}>
          {row.original.status}
        </div>
      );
    },
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
          <ExpenseEdit />
          <ExpenseDelete />
        </div>
      );
    },
  },
];
