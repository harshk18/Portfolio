import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin } from "../assets";
import resume from "../assets/Harsh_Resume.pdf"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Harsh Khandelwal
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <div className="flex justify-between w-20 h-7">
            <img
              src={github}
              alt="github"
              className="cursor-pointer"
              onClick={() =>
                window.open("https://github.com/harshk18", "_blank")
              }
            />

            <img
              src={linkedin}
              alt="linkedin"
              className="cursor-pointer rounded-full"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/harsh-khandelwal-212164210/",
                  "_blank"
                )
              }
            />
          </div>

          <button className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href={resume} download="Harsh_Resume.pdf">
              My Resume
            </a>
          </button>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-20">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-popins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <div className="flex flex-1 justify-between w-9 h-7 gap-4">
                <img
                  src={github}
                  alt="github"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/harshk18", "_blank")
                  }
                />

                <img
                  src={linkedin}
                  alt="linkedin"
                  className="cursor-pointer rounded-full"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/harsh-khandelwal-212164210/",
                      "_blank"
                    )
                  }
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
