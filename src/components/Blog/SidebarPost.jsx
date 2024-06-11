import { Link } from "react-router-dom";

const SidebarPost = ({ data }) => {
  return (
    <Link
      to={`/blog/${data.id}`}
      className="flex gap-4 items-center p-3 rounded-md hover:bg-primary-50 duration-200 ease-in-out w-full"
    >
      <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-200 flex-shrink-0">
        <img className="w-full h-full object-cover" src={data.img} alt="" />
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        <h1 className="text-lg font-semibold text-gray-800 truncate">
          {data.title}
        </h1>
        <p className="text-sm text-gray-500">{data.date}</p>
      </div>
    </Link>
  );
};

export default SidebarPost;
