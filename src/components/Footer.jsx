// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Useful Links */}
          <div className="col-span-1">
            <h5 className="text-white text-lg font-display font-semibold mb-6">Useful Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-primary transition-colors">Sign Up</Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-span-1">
            <h5 className="text-white text-lg font-display font-semibold mb-6">About</h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Locations</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-1">
            <h5 className="text-white text-lg font-display font-semibold mb-6">Help</h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Help Center</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Address & Social */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 md:pl-10 lg:border-l lg:border-dark-border">
            <div className="mb-8">
              <h5 className="text-white text-lg font-display font-semibold mb-4">Stay connected</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-colors">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-colors">
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>

            <div className="mb-6">
              <h6 className="text-white font-semibold mb-2">Address</h6>
              <address className="not-italic text-sm text-gray-500 leading-relaxed">
                14th Road, <br />
                India, Mumbai - 400051
              </address>
            </div>

            <Link to="/signup" className="inline-block px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg shadow-glow transition-all">
              Get Started
            </Link>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-dark-border text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} EazyShop. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Powered by</span>
            <div className="w-6 h-6 bg-primary/20 text-primary rounded flex items-center justify-center font-bold text-xs">E</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
