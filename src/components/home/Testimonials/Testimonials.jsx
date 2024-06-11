import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="container mx-auto py-32">
      <h1 className="text-center text-5xl">
        What Others <span className="text-primary">Say</span>
      </h1>
      <p className="text-center text-grey-500 pt-4 text-sm">
        Opinions of our beloved users
      </p>
      <div className="pt-12 grid grid-cols-3 gap-4">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
