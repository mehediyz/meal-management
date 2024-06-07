import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import EditMealDialog from "./EditMealDialog";

const membersMealToday = [
  {
    name: "Mehedi Hasan",
    photo: "https://github.com/shadcn.png",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
    phone: "01799703788",
  },
  {
    name: "John Doe",
    photo: "https://github.com/shadcn.png",
    breakfast: "1",
    lunch: "1",
    dinner: "1",
    updated: "1h ago",
    phone: "01799703788",
  },
  {
    name: " Jane",
    photo: "https://github.com/shadcn.png",
    breakfast: "1",
    lunch: "1",
    dinner: "0",
    updated: "5m ago",
    phone: "01799703788",
  },
];

export function ManageMealsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead>Breakfast</TableHead>
          <TableHead>Lunch</TableHead>
          <TableHead>Dinner</TableHead>
          <TableHead>Updated</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {membersMealToday.map((item) => (
          <TableRow key={item.phone}>
            <TableCell className="font-medium flex gap-2 items-center">
              <Avatar>
                <AvatarImage src={item.photo} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {item.name}
            </TableCell>
            <TableCell>{item.breakfast}</TableCell>
            <TableCell>{item.lunch}</TableCell>
            <TableCell>{item.dinner}</TableCell>
            <TableCell>{item.updated}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>
              <EditMealDialog />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
