import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <div className="bg-primary-50 py-32">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-center text-grey-500 pt-4 text-sm">
          Have a question? Feel free to ask.
        </p>

        <div className="pt-12 max-w-[800px] mx-auto grid grid-cols-2 gap-4 justify-items-center">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Phone" />
          <Textarea
            className="col-span-2"
            placeholder="Type your message here."
          />
          <Button className="col-span-2">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
