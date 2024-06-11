import { Button } from "@/components/ui/button";
import { blogData } from "@/constants/blogData";
import { useNavigate, useParams } from "react-router-dom";

const DynamicBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getPostById = (postId) => {
    return blogData.find((post) => post.id == postId);
  };

  const post = getPostById(id);

  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto bg-white  overflow-hidden">
        <div className="relative">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {post.title}
            </h1>
          </div>
        </div>
        <div className="p-12">
          <p className="text-gray-500 text-sm mb-4">{post.date}</p>
          <div className="text-gray-700 text-lg leading-relaxed">
            {post.description}
          </div>
          <div className="mt-6">
            <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogPage;
