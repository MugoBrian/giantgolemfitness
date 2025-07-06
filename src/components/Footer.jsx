import FooterLogo from "../assets/images/FooterLogo.png";
import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsTiktok,
  BsWhatsapp,
} from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-50 pt-4 pb-3 flex flex-col gap-5 w-full lg:px-28 md:px-6 xl:px-32 2xl:px-30 bottom-0 px-4">
      <div className="flex flex-col sm:flex-row gap-4 md:gap-20">
        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h5 className="font-family-heading font-medium text-lg sm:text-xl">
            Contact
          </h5>
          <div className="flex flex-col gap-3 sm:gap-4 font-family-body">
            <div className="flex gap-2">
              <BsPhone className="w-5 h-5" />
              <a href="tel:+254793 965 155">
                <span className="hover:font-bold">+254793 965 155 </span>
              </a>
            </div>
            <div className="flex gap-2 md:gap-3 wrap-break-word">
              <BsEnvelope className="w-5 h-5" />
              <a href="mailto:giantgolemstrength@gmail.com">
                <span className="break-all hover:font-bold">
                  {" "}
                  giantgolemstrength@gmail.com
                </span>
              </a>
            </div>
            <div className="flex gap-2 md:gap-3">
              <div className="">
                <FaLocationDot className="w-5 h-5 stroke-black stroke-40 text-transparent" />
              </div>
              <a href=" https://www.google.com/maps/place/GIANT+GOLEM+STRENGTH+%26+FITNESS+CENTRE/@-1.1356285,36.9776726,774m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182f47e77eaaf001:0xf08680bd72ddf3a1!8m2!3d-1.1356285!4d36.9776726!16s%2Fg%2F11rck5n_w8?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D">
                <span className="hover:font-bold">
                  Matangi, Ruiru. Opp MoonStar Petrol Station
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Open Hours */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <h5 className="font-family-heading font-medium text-xl">
            Open Hours
          </h5>
          <div className="flex flex-col gap-2 sm:gap-4 font-family-body">
            <p>Weekdays (5:30 am - 9:00 pm)</p>
            <p>Saturday (7.00 am - 3.00 pm)</p>
            <p>Sunday (CLOSED)</p>
            <p>Public Holidays (6:30 am - 3:00 pm)</p>
          </div>
        </div>
        
        {/* Explore */}
        <div className="flex flex-col gap-2 ">
          <h5 className="font-family-heading font-medium text-lg sm:text-xl">
            Explore
          </h5>
          <div className="flex flex-col gap-2 font-family-body">
            <Link to={"/programs"}>
              <p className="hover:font-bold hover:underline">Programs</p>
            </Link>
            <Link to={"/membership"}>
              <p className="hover:font-bold hover:underline">Membership</p>
            </Link>
            <Link to={"/shop"}>
              <p className="hover:font-bold hover:underline">Shop</p>
            </Link>
            <Link to={"/gallery"}>
              <p className="hover:font-bold hover:underline">Gallery</p>
            </Link>
            <Link to={"/contact"}>
              <p className="hover:font-bold hover:underline ">Contact</p>
            </Link>
          </div>
        </div>

        {/* Logo & Socials */}
        <div className=" flex flex-col gap-6 md">
          <div className="flex flex-col gap-2">
            <img
              src={FooterLogo}
              alt="Giant Golem Logo black"
              width={80}
              height={93}
            />
            <p className="font-family-body">Fitness Is For Everyone</p>
          </div>
          <div className="flex gap-4 md:gap-6 ">
            <a
              href="https://www.instagram.com/giantgolemstrength/"
              target="_blank"
            >
              <BsInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@giantgolemstrengthfitnes"
              target="_blank"
            >
              <BsTiktok className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/giantgolemstrengthfitness/"
              target="_blank"
            >
              <BsFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/+254793965155?text=Hello.%20I%20got%20your%20number%20from%20your%20awesome%20website%20and%20I'm%20interesting%20in%20joining%20your%20gym.%20Kindly%20give%20me%20directions,%20I%20would%20like%20to%20visit%20tomorrow?"
              target="_blank"
            >
              <BsWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="font-family-body w-full">
        <hr className="text-black pb-2 text-sm" />
        <p className="">
          {" "}
          &copy; Giant Golem Strength And Fitness.
          <span className="pl-2"> All Rights Reserved {year}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
