import BlogNavbar from "@/components/Blog/BlogNavbar";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import Footer from "@/components/home/Footer";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div>
      <BlogNavbar />
      <div className="container mx-auto py-12 min-h-screen flex gap-4">
        <BlogSidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
