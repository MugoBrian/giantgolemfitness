import { Clock, Mail, MapPin, PhoneIcon } from "lucide-react";
import ContactForm from "./ContactForm";

function ContactSection({ bgColor = "bg-gray-100" }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid sm:grid-cols-2 pt-12 gap-14 ${bgColor} pb-12 px-4 lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30`}
    >
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 w-full">
          <p className="font-family-heading font-bold text-3xl pt-2.5">
            Contact Us
          </p>
          <p className="font-family-body text-base">
            Have questions about our gym or membership options? Reach out to us
            and we’ll get back to you as soon as possible.
          </p>
        </div>
        {/* Contact Details */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-2">
            <div className="h-full bg-primary-75 p-1 flex flex-col justify-center rounded-3xl">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1.5 justify-center">
              <p className="text-base font-bold">Location</p>
              <p>Matangi, Ruiru. opp Moonstar Petrol Station</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className=" bg-primary-75 p-1 flex flex-col justify-center rounded-3xl">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1.5 justify-center">
              <p className="text-base font-bold">Phone Number</p>
              <p>+254793 965 155</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className=" bg-primary-75 p-1 flex flex-col justify-center rounded-3xl">
              <Mail className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1.5 justify-center">
              <p className="text-base font-bold">Email Address</p>
              <p>giantgolemfitness@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className=" bg-primary-75 p-1 flex flex-col justify-center rounded-3xl">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1.5 justify-center">
              <p className="text-base font-bold">Hours</p>
              <div className="flex flex-col gap-1.5">
                <p>Weekdays: 5.30 am - 9.00 pm</p>
                <p>Saturday: 7.00 am - 3.00 pm</p>
                <p>Public Holidays: 6.30 am - 2.00 pm</p>
                <p>Sunday: CLOSED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactSection;
