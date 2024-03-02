// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-1py-8 sm:py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Usefull Links</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Product
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <a href="">
                  <FaInstagram className="w-8 h-8 border border-gray-400 rounded-full text-center py-1 hover:text-white bg-red-600 hover:border-red-600" />
                </a>
                <a href="">
                  <FaLinkedinIn className="w-8 h-8 border border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white bg-blue-400 hover:border-blue-400"></FaLinkedinIn>
                </a>
                <a href="">
                  <FaTwitter className="w-8 h-8 border  border-gray-400 rounded-full text-center py-1 ml-2 hover:text-white bg-blue-600 hover:border-blue-600" />
                </a>
              </div>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 className="font-bold mb-2">Address</h6>
              <address className="not-italic mb-4 text-sm">
                14th road
                <br />
                India , Mumbai- 400051
              </address>
            </div>
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0 mb-5">
              <button className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded text-white font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
