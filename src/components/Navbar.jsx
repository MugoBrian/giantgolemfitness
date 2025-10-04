import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, X } from "lucide-react";

import Logo from "../assets/logo.svg";
import FooterLogo from "../assets/images/FooterLogo.png";

function Navbar() {
  const navItems = [
    "Home",
    "Membership",
    "Programs",
    // "Shop",
    "Gallery",
    "Contact",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is beyond 120 pixels
      const isScrolled = window.scrollY > 120;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      isScrolled !== scrolled && setScrolled(isScrolled);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // 3. Conditional Tailwind classes

  const navbarClasses = `
    fixed top-0 h-34 left-0 w-full z-50
    transition-colors duration-600 ease-in-out
    ${scrolled ? "bg-white-100/75" : "bg-transparent"}
  `;

  return (
    // Dependency array: re-run if 'scrolled' changes

    <nav className={`${navbarClasses} py-4 w-fit scroll-smooth px-4`}>
      <div className="flex md:gap-8 justify-between items-center lg:justify-center lg:gap-12 ">
        <Link to="/">
          {scrolled ? (
            <img
              className=""
              src={FooterLogo}
              width={100}
              height={93}
              alt="Giant Golem Fitness Logo"
            />
          ) : (
            <img
              className="w-[90px] h-[90px] lg:w-[150px] lg:h-[150px]"
              src={Logo}
              alt="Giant Golem Fitness Logo"
            />
          )}
        </Link>
        <ul className="hidden md:flex font-family-body bg-primary gap-16 px-5 py-4 rounded-sm items-center align-middle justify-center h-14 text-black">
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

        {/* Mobile Navbar - IMPROVED WITH ACCESSIBILITY */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="flex items-center justify-center bg-white p-2.5 rounded-md shadow hover:shadow-md cursor-pointer hover:bg-white transition-all duration-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-75 focus:ring-offset-2"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            {/* Animated hamburger/close icon */}
            <div className="relative w-5 h-5">
              <span
                className={`absolute block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2" : "top-0"
                }`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-gray-700 transition-all duration-300 top-2 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2" : "top-4"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Overlay with improved accessibility */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsOpen(false);
              }
            }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            tabIndex={-1}
          />
        )}

        <nav
          id="mobile-navigation"
          className={`md:hidden fixed z-50 inset-y-0 right-0 w-80 bg-white-50 transform transition-all duration-300 ease-out ${
            isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
          role="navigation"
        >
          {/* Header with improved close Button */}
          <div className="bg-white-100 px-6 py-4 text-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <img
                  src={FooterLogo}
                  alt="Giant Golem Logo black"
                  width={80}
                  height={93}
                />
              </div>

              <Button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300/85 text-white backdrop-blur-sm hover:bg-black focus:ring-offset-2 rounded-lg p-1.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Close navigation menu"
                autoFocus={isOpen}
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Close Menu</span>
              </Button>
            </div>
          </div>

          {/* Navigation with keyboard navigation support */}
          <div className="flex-1 px-2 py-6 overflow-y-auto">
            <ul className="space-y-1" role="list" aria-labelledby="nav-title">
              {navItems.map((item, index) => (
                <li key={index} role="listitem">
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `group flex items-center px-4 py-3 rounded-md font-family-body text-base transition-all duration-200 focus:outline-none focus:ring-2 outline:ring-primary-75 focus:ring-offset-2 focus:ring-offset-white ${
                        isActive
                          ? "bg-primary-75 text-gray-700 font-semibold shadow"
                          : "text-gray-700 hover:bg-gray-50 hover:text-black hover:font-semibold focus-visible:bg-gray-50 font-medium"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsOpen(false);
                      }
                    }}
                    aria-current={({ isActive }) =>
                      isActive ? "page" : undefined
                    }
                  >
                    <span className="flex-1 text-left">{item}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Quick actions section */}
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 px-4">
                Quick Actions
              </h3>
              <div className="">
                <div className="w-full flex items-center px-4 py-3 text-gray-600">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href="tel:+254793 965 155">Call Now</a>
                </div>
                <div className="w-full flex items-center px-4 py-3 text-gray-600">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="tel:+254793 965 155">Email Us</a>
                </div>
              </div>
            </div>
          </div>

          <footer className="absolute bottom-0 p-4 left-0 right-0 backdrop-blur-sm border-t border-white/20 bg-white/50 py-2">
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/brianmuchirimugo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-family-body text-sm text-gray-600 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-75/30 focus:ring-offset-1 rounded-md px-2 py-1"
              >
                <span className="opacity-90 mr-1">&copy;</span>
                <span className="font-medium">Made by</span>
                <span className="ml-1 mr-1 font-bold underline">
                  Konsyda Designs
                </span>
              </a>
            </div>
          </footer>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
