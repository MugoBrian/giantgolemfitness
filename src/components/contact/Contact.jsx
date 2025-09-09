import { Button } from "../ui/button";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="flex flex-col gap-9 bg-gray-400 h-[620px] pb-12 text-center px-4 lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30">
      <div className="pt-4">
        <Button variant="outline" size="lg" className="cursor-pointer">
          Submit Form
        </Button>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
