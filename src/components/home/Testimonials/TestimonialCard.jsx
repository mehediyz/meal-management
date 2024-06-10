import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-4 border p-6 rounded-sm hover:shadow-md ease-in-out duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-grey-600 font-semibold">Mehedi Hasan</h2>
      </div>
      <p className="text-grey-500">
        Valo lage nai vai, faltu ekta jinis. khata e valo. digital I don't like.
        I love pen and paper, calculation, mistakes etc.
      </p>
      <p className="flex">
        <Star fill="green" strokeWidth={0} />
        <Star strokeWidth={1} stroke="green" />
        <Star strokeWidth={1} stroke="green" />
        <Star strokeWidth={1} stroke="green" />
        <Star strokeWidth={1} stroke="green" />
      </p>
    </div>
  );
};

export default TestimonialCard;
