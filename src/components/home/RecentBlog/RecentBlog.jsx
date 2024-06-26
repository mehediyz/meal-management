import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";

const RecentBlog = () => {
  const posts = blogData.slice(0, 4);
  return (
    <div className="container mx-auto py-32">
      <div>
        <h1 className="text-center text-5xl">
          Our <span className="text-primary">Blog</span>
        </h1>
        <p className="text-center text-grey-500 pt-4 text-sm">
          Explore our recent blogs
        </p>
      </div>
      <div className="pt-12 grid grid-cols-4 gap-4">
        {posts.map((item) => (
          <BlogCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
