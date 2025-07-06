import { useHeader } from "../context/useHeaderContext";
import HomeHero from "../assets/images/HomeHero.png";
import { useEffect } from "react";
import { BsArrowUpRightCircle, BsPeople, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoBarbell, IoBarbellOutline, IoBarbellSharp } from "react-icons/io5";
import SportsHeartIcon from "../assets/images/sport-heart-icon.svg";
import { CgCommunity } from "react-icons/cg";
import {
  RiCommunityFill,
  RiUserCommunityFill,
  RiUserCommunityLine,
} from "react-icons/ri";
import { PiBarbell } from "react-icons/pi";
function Home() {
  const { setImage, setDescription, setTitle } = useHeader();

  useEffect(() => {
    setTitle("");
    setDescription("");
    setImage(HomeHero);
  }, [setImage, setDescription, setTitle]);

  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex flex-col gap-10 sm:gap-14 lg:mt-6 mt-3 mb-8 lg:mb-9 font-family-heading items-center text-center lg:px-30">
        {/* Hero text */}
        <div className="flex flex-col gap-8 whitespace-normal">
          <div className="flex flex-col gap-2 p-2 sm:gap-4">
            <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-4xl whitespace-pre-line">
              Strength & Fitness is our main goal.
            </h1>
            <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-4xl whitespace-pre-line">
              Fitness Is For everyone.Changing Mindsets!
            </h1>
          </div>
          <h5 className="font-light text-gray-800 sm:text-xl md:text-2xl lg:text-2xl">
            “In this house only hard work matter”
          </h5>
        </div>
        {/* CTA */}
        <div className="flex gap-5 sm:gap-8 md:gap-12 ">
          <button className="bg-primary font-medium text-white rounded-full px-2 py-2 cursor-pointer">
            {" "}
            Start Your Journey
          </button>
          <div className="flex gap-2 items-center">
            <Link to={"/programs"}>
              <h6 className="underline sm:text-lg">Explore Programs</h6>
            </Link>
            <BsArrowUpRightCircle className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 pb-12 pt-2.5 gap-10 sm:gap-12 flex flex-col px-4 lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30 w-full ">
        {/* Stats */}
        <div className="flex justify-between text-center">
          <div className="flex flex-col gap-2 p-2">
            <h5 className="font-family-body font-medium text-lg sm:text-2xl text-primary">
              150+
            </h5>
            <p className="font-family-body md:text-lg whitespace-break-spaces">
              Happy Clients
            </p>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h5 className="font-family-body font-medium text-lg sm:text-2xl text-primary">
              6+
            </h5>
            <p className="font-family-body font-medium md:text-lg">
              Expert Trainers
            </p>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h5 className="font-family-body font-medium text-lg sm:text-2xl text-primary">
              9
            </h5>
            <p className="font-family-body font-medium md:text-lg">
              Access Hours
            </p>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h5 className="font-family-body font-medium text-lg sm:text-2xl text-primary">
              1.5+
            </h5>
            <p className="font-family-body font-medium md:text-lg items-center flex flex-col align-middle">
              Years
            </p>
          </div>
        </div>
        {/* About & Benefits */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 text-center">
          {/* About */}
          <div>
            <p className="font-family-body sm:text-lg md:text-xl leading-8 whitespace-pre-line">
              At{" "}
              <span className="font-bold">
                GIANT GOLEM STRENGTH & FITNESS CENTRE,{" "}
              </span>
              our clients have access to a variety of gym equipment as well as
              accessories and workout outfits. We are just not a fitness centre,
              we are a community focused on supporting each other in the fitness
              journey
            </p>
          </div>
          {/* Benefits */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-6 items-center border border-gray-500 rounded-lg p-3">
              <img src={SportsHeartIcon} className="w-8 h-8 stroke-40" />
              <p className="font-semibold font-family-heading text-md sm:text-lg">
                Expert Coaching
              </p>
              <p className="font-family-body sm:text-md ">
                Our trainers provide personalized guidance to help you master
                lifting techniques and optimize your performance.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center border border-gray-500 rounded-lg p-3">
              <PiBarbell className="h-8 w-8" />
              <p className="font-semibold font-family-heading text-lg sm:text-lg">
                Flexible Workout Routines.
              </p>
              <p className="font-family-body sm:text-md">
                We have workout routines, tailored to what works for you and
                what doesn’t. The routines are a diverse range of exercises.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center border border-gray-500 rounded-lg p-3">
              <BsPeople className="h-8 w-8" />
              <p className="font-semibold font-family-heading text-lg sm:text-lg">
                Friendly Community Vibe
              </p>
              <p className="font-family-body sm:text-md ">
                Join a community of like minded individuals who motivate and
                support each other every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-white h-128 flex justify-center">
        {/* Title & Subtitle Section */}
        <div>
          <div>
            <hr className="h-1 text-primary w-40" />
          </div>
          <div>
            <p className="">
              Fitness programs and expert-led sessions designed to help our
              memebers achieve their fitness goals{" "}
            cal </p>
          </div>
        </div>
        {/* Programs Card Section */}
        <div>
          {/* Programs Card */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
