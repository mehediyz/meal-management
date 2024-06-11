import BlogSidebar from "@/components/Blog/BlogSidebar";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div className="container mx-auto py-12 min-h-screen flex gap-4">
      <BlogSidebar />
      <Outlet />
    </div>
  );
};

export default BlogLayout;
