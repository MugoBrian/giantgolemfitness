import { ContactSection } from "../components";
import { useHeader } from "../context/useHeaderContext";
import ContactImage from "../assets/images/ContactImage.png";
import { useEffect } from "react";

function Contact() {
  const { setTitle, setDescription, setImage } = useHeader();
  const title = "Contact Us";
  const description =
    "For any queries, book a free consultation or visit us at our location.";

  useEffect(() => {
    setTitle(title);
    setDescription(description);
    setImage(ContactImage);
  }, [setImage, setTitle, setDescription]);
  return (
    <div className="flex flex-col gap-4 bg-white-50 ">
      <div className="flex flex-col justify-center items-center pt-12 w-full px-4">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Location
            </h2>
            <p className="text-gray-600">
              Visit us at Giant Golem Strength & Fitness Centre
            </p>
          </div>
          <div className="w-full max-w-6xl bg-white rounded-lg shadow p-1.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.894841696283!2d36.9777296!3d-1.13566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47e77eaaf001%3A0xf08680bd72ddf3a1!2sGIANT%20GOLEM%20STRENGTH%20%26%20FITNESS%20CENTRE!5e1!3m2!1sen!2ske!4v1758267180453!5m2!1sen!2ske"
              className="w-full rounded-lg"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <ContactSection bgColor="bg-white-50" />
    </div>
  );
}

export default Contact;
