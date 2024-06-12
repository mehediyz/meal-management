import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BazarListEdit from "./BazarListEdit";
import { bazarList } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import BazarListDelete from "./BazarListDelete";

const BazarListTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bazarList.map((item) => (
          <TableRow key={item.date}>
            <TableCell className="font-medium flex gap-2 items-center">
              <div className="flex">
                <Avatar>
                  <AvatarImage src={item.photo[0]} />
                  <AvatarFallback>{item.name[0]}</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-4">
                  <AvatarImage src={item.photo[1]} />
                  <AvatarFallback>{item.name[1]}</AvatarFallback>
                </Avatar>
              </div>
              {item.name[0] + " & " + item.name[1]}
            </TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell
              className={`${item.status == "Completed" && `text-green-500`}`}
            >
              {item.status}
            </TableCell>
            <TableCell className="text-center">
              <BazarListEdit />
              <BazarListDelete />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BazarListTable;
