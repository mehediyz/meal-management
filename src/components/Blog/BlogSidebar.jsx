import { blogData } from "@/constants/blogData";
import SidebarPost from "./SidebarPost";

const BlogSidebar = () => {
  return (
    <div className="w-[350px] p-4 rounded border">
      <h1 className="font-semibold pb-4">Popular Posts</h1>
      <div className="space-y-4">
        {blogData.map((item) => (
          <SidebarPost key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
