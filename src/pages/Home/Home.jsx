import ContactUs from "@/components/home/Contact/ContactUs";
import Features from "@/components/home/Features/Features";
import GetStarted from "@/components/home/GetStarted/GetStarted";
import Hero from "@/components/home/Hero";
import RecentBlog from "@/components/home/RecentBlog/RecentBlog";
import Testimonials from "@/components/home/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <GetStarted />
      <Testimonials />
      <ContactUs />
      <RecentBlog />
    </div>
  );
};

export default Home;
