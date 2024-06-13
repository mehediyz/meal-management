import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 border p-6 rounded-sm hover:shadow-md ease-in-out duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage className="object-cover" src={data.photo} />
          <AvatarFallback>{data.name[0]}</AvatarFallback>
        </Avatar>
        <h2 className="text-grey-600 font-semibold">{data.name}</h2>
      </div>
      <p className="text-grey-500 flex-1">{data.message}</p>
      <p className="flex">
        {[...Array(data.rating)].map((_, i) => (
          <Star key={i} fill="green" strokeWidth={0} />
        ))}
        {[...Array(5 - data.rating)].map((_, i) => (
          <Star key={i} strokeWidth={1} stroke="green" />
        ))}
      </p>
    </div>
  );
};

export default TestimonialCard;
