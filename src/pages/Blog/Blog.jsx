import BlogCard from "@/components/home/RecentBlog/BlogCard";
import { blogData } from "@/constants/blogData";

const Blog = () => {
  return (
    <div className="px-4 flex-1">
      <div className="grid grid-cols-3 gap-4">
        {blogData.map((item) => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
