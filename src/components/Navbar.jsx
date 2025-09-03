import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const navItems = [
    "Home",
    "Programs",
    "Membership",
    "Shop",
    "Gallery",
    "Contact",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if scroll position is beyond 50 pixels
  //     const isScrolled = window.scrollY > 180;
  //     // if (isScrolled !== scrolled) {
  //     //   setScrolled(isScrolled);
  //     // }

  //     isScrolled !== scrolled && setScrolled(isScrolled);
  //   };

  //   // Add the event listener when the component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrolled]);

  // 3. Conditional Tailwind classes
  const navbarClasses = `
    fixed top-0 h-40 left-0 w-full z-50
    transition-colors duration-600 ease-in-out
    ${scrolled ? "bg-gray-200 shadow-md" : "bg-transparent"}
  `;

  return (
    // Dependency array: re-run if 'scrolled' changes

    <nav className={`${navbarClasses} py-4 relative w-fit scroll-smooth px-4`}>
      <div className="flex md:gap-8 justify-between items-center lg:justify-center ">
        <Link to="/">
          <img
            className=""
            src={Logo}
            width={150}
            height={150}
            alt="Giant Golem Fitness Logo"
          />
        </Link>
        <ul className="hidden lg:flex font-family-body bg-primary gap-16 px-5 py-4 rounded-sm items-center align-middle justify-center h-14 text-black">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item == "Home" ? "/" : item.toLowerCase()}
              className={({ isActive }) =>
                `${isActive ? `font-bold` : `font-normal`}`
              }
            >
              {item}
            </NavLink>
          ))}
        </ul>
        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <div className="rounded-sm">
            <button
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className="flex cursor-pointer justify-items-center bg-white-50 p-2 rounded-sm"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        {/* Dim background when navbar is opened */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          ></div>
        )}
        <div
          className={`md:hidden fixed z-40 inset-y-0 right-0 w-60 top-0 shadow-2xl bg-primary-95 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute bg-white-50 cursor-pointer rounded-sm top-4 w-8 p-2 ml-2"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <FaX />
          </button>
          <ul className="mt-16 space-y-4 font-family-body flex inset-0 flex-col gap-4 px-0 py-4 rounded-sm text-black">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item == "Home" ? "/" : item.toLowerCase()}
                className={({ isActive }) =>
                  `pl-4 ${
                    isActive
                      ? `font-bold bg-white-50 p-3 w-full`
                      : `font-normal`
                  }`
                }
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                {item}
              </NavLink>
            ))}
            <div className="bottom-0 absolute bg-white-50 w-full px-1 py-0.5">
              <p className="font-family-body font-medium text-xs underline cursor-pointer rounded-tl-5xl rounded-tr-5xl">
                {" "}
                <a href="https://www.linkedin.com/in/brianmuchirimugo">
                  &copy; Made by Konsyda Designs
                </a>
              </p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
