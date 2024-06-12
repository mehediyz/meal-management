import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { members } from "@/constants/data";

const BazarListAdd = () => {
  const [date, setDate] = useState();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Bazar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add Bazar</DialogTitle>
          <DialogDescription>
            Add bazar list here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Person 1</Label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select person 1" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {members.map((item) => (
                  <SelectItem value={item.name}>{item.name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Person 2</Label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select person 2" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {members.map((item) => (
                  <SelectItem value={item.name}>{item.name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BazarListAdd;
