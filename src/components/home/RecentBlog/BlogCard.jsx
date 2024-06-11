import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="border hover:border-primary hover:shadow-md p-4 rounded-md space-y-3 duration-200 ease-in-out">
      <div className="overflow-hidden rounded">
        <img src={data.img} alt="" />
      </div>
      <p className="text-grey-500 text-sm">{data.date}</p>
      <Link className="text-xl font-semibold block hover:text-primary duration-200 ease-in-out">
        {data.title}
      </Link>
      <p className="text-grey-600 truncate">{data.description}</p>
      <Button onClick={() => navigate(`/blog/${data.id}`)}>Read More</Button>
    </div>
  );
};

export default BlogCard;
