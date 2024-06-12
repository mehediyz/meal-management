import { blogData } from "@/constants/blogData";
import SidebarPost from "./SidebarPost";

const BlogSidebar = () => {
  const posts = blogData.slice(0, 5);
  return (
    <div className="w-[350px] p-4 rounded border">
      <h1 className="text-xl font-semibold p-4">Popular Posts</h1>
      <div className="space-y-4">
        {posts.map((item) => (
          <SidebarPost key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
