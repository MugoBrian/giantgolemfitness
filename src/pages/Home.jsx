import { useHeader } from "../context/useHeaderContext";
import HomeHero from "../assets/images/HomeHero.png";
import { useEffect } from "react";
import {
  BsArrowUpRight,
  BsArrowUpRightCircle,
  BsCalendar4,
  BsPeople,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import SportsHeartIcon from "../assets/images/sport-heart-icon.svg";
import BodybuildingImage from "../assets/images/Bodybuilding.png";
import KarateImage from "../assets/images/Karate.png";
import ZumbaImage from "../assets/images/Zumba.png";
import { PiBarbell } from "react-icons/pi";
import {
  SectionHeader,
  TestimonialsCarousel,
  ContactSection,
} from "../components";
import { PenBoxIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { MembershipCard } from "../components";
import membershipData from "../lib/data/memberships.json";

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
        <div className="flex gap-6 sm:gap-12 md:gap-16 ">
          <Button className="font-medium text-md text-white rounded-full px-3 py-3 sm:px-8 sm:py-6 cursor-pointer">
            {" "}
            Start Your Journey
          </Button>
          <div className="flex gap-2 items-center">
            <Link to={"/programs"}>
              <h6 className="underline sm:text-lg">Explore Programs</h6>
            </Link>
            <BsArrowUpRightCircle className="h-4.5 w-4.5" />
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
              <img src={SportsHeartIcon} className="w-8 h-8" />
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
      <div className="bg-white text-center px-4 lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30">
        {/* Title & Subtitle Section */}
        <SectionHeader
          heading="Our Programs"
          subheading="Fitness programs and expert-led sessions designed to help our
              memebers achieve their fitness goals"
        />
        {/* See More */}
        <div className="flex justify-end gap-2 items-center mt-9 w-full">
          <div className="w-1/2 sm:w-fit">
            <Link to="/programs">
              <Button className="rounded-full sm:w-auto w-full font-family-heading bg-primary-75 p-3 font-medium cursor-pointer">
                See More
              </Button>
            </Link>
          </div>
          <div>
            <Button className="rounded-full bg-primary-75 p-2.5">
              <BsArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Programs Card Section */}
        <div className="mt-9 grid grid-cols-1 justify-center items-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-6 mb-10">
          <div className="rounded-xl flex flex-col shadow-primary w-full lg:flex-1 h-full">
            {/* Image */}
            <img
              src={BodybuildingImage}
              alt="A martial arts master on his knees"
              className="h-full w-full"
            />

            {/* Description */}
            <div className="flex flex-col gap-3 mx-4 mb-4 lg:flex-1">
              <div className="flex gap-3 items-center justify-between">
                <div>
                  <p className="font-family-heading font-bold">BODY BUILDING</p>
                </div>
              </div>
              <p className="font-family-body text-left">
                Progressively overload focused program for maximum muscle
                hypertrophy.
              </p>

              <div className="flex gap-6 mt-3 justify-between items-center">
                <div className="flex gap-2 items-center justify-start w-full md:w-fit">
                  <BsCalendar4 className="w-4 h-4" />
                  <p className="font-family-body">Mon - Sat</p>
                </div>
                <div className="flex justify-end">
                  <Badge className="bg-primary-50"> 60 - 90 min</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl flex flex-col shadow-primary w-full lg:flex-1 h-full">
            {/* Image */}
            <img
              src={ZumbaImage}
              alt="A martial arts master on his knees"
              className="h-full w-full"
            />

            {/* Description */}
            <div className="flex flex-col gap-3 mx-4 mb-4 lg:flex-1">
              <div className="flex gap-3 items-center justify-between">
                <div>
                  <p className="font-family-heading font-bold">ZUMBA</p>
                </div>
              </div>
              <p className="font-family-body text-left">
                Group fitness program that combines dance rhythms with
                high-energy cardio moves.
              </p>

              <div className="flex gap-6 mt-3 justify-between items-center">
                <div className="flex gap-2 items-center justify-start w-full md:w-fit">
                  <BsCalendar4 className="w-4 h-4" />
                  <p className="font-family-body">Tue</p>
                </div>
                <div className="flex gap-3 items-center justify-between">
                  <Badge className="bg-primary-50"> 60 min</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl flex flex-col shadow-primary w-full lg:flex-1 h-full">
            {/* Image */}
            <img
              src={KarateImage}
              alt="A martial arts master on his knees"
              className="h-full w-full"
            />

            {/* Description */}
            <div className="flex flex-col gap-3 mx-4 mb-4 lg:flex-1">
              <p className="font-family-heading font-bold text-left">KARATE</p>
              <p className="font-family-body text-left">
                Acquire defense and attack skills, master Karate the traditional
                way.
              </p>

              <div className="flex gap-6 mt-3 justify-between items-center">
                <div className="flex gap-2 items-center justify-start w-full md:w-fit">
                  <BsCalendar4 className="w-4 h-4" />
                  <p className="font-family-body">Mon - Sat</p>
                </div>
                <div className="flex gap-3 items-center justify-between">
                  <Badge className="bg-primary-50"> 60 min</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="flex-col gap-6 bg-gray-400 pb-12 text-center  px-4 lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30">
        {/* Title & Subtitle Section - UNCHANGED */}
        <SectionHeader
          heading="Membership"
          subheading="Choose the perfect plan that fits your fitness journey and goals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 pt-12 lg:grid-cols-3 gap-8 justify-center w-full">
          {membershipData
            .filter(
              (membership) =>
                membership.type == "individual" &&
                membership.frequency !== "Quartely"
            )
            .map((membershipData, index) => (
              <MembershipCard key={index} {...membershipData} />
            ))}
        </div>

        <div className="flex justify-center mt-10 w-full">
          <Link to="/membership">
            <Button
              size="lg"
              className="cursor-pointer py-6 font-family-heading bg-primary-75 rounded-full w-fit font-medium text-base hover:bg-primary transition-colors"
            >
              View All Memberships
            </Button>
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col gap-9 bg-white pb-12 text-center h-130 px-4 lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30">
        <SectionHeader
          heading="What Our Members Say"
          subheading="Don’t just take our word for it. Hear from our satisfied members about Giant Golem Fitness."
        />
        {/* Reviews Card Section */}
        <TestimonialsCarousel />

        <div className="flex gap-1 sm:flex justify-end sm:gap-2">
          <p>Did you like our services? </p>
          <a
            href="https://www.google.com/search?sca_esv=6b9acc621195338b&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_c4GTT96msPUowJJP5AtFXFLri3-ohwAle6As4J1nSPzSkJyCeDnO93K_BlwliWhFWGqkRkfkJZrt1dSfjZ3InhydW1NThfXERUED-iKtpMyAmmbJIWXXQl3HenhilGu3Wb6ts%3D&q=GIANT+GOLEM+STRENGTH+%26+FITNESS+CENTRE+Reviews&sa=X&ved=2ahUKEwiW54el1byPAxXPUkEAHcMAHcgQ0bkNegQIOxAD&biw=1366&bih=615#"
            target="_blank"
            className="underline pl-1"
          >
            Write Us A Review
          </a>
          <PenBoxIcon />
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

export default Home;
