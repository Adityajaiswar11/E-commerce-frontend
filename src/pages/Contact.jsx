/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_SECRET_KEY;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const form = useRef();
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !e.target.name.value ||
      !e.target.email.value ||
      !e.target.message.value ||
      !e.target.number.value ||
      !e.target.surname.value
    ) {
      return toast.error("All fields must be provided!", {
        position: "top-center",
        autoClose: 1000,
      });
    }

    setLoader(true);
    emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Message sent successfully! Thanks! ", {
            autoClose: 2000,
            position: "top-center",
          });
          setLoader(false);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Something went wrong..", {
            autoClose: 2000,
            position: "top-center",
          });
          setLoader(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-12 px-4 md:px-8 text-white flex justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Please submit your information and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full md:w-2/3 bg-dark-card border border-dark-border p-8 rounded-2xl shadow-card"
          >
            <form onSubmit={handleSubmit} ref={form} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="premium-label">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="name"
                    className="premium-input"
                  />
                </div>
                <div>
                  <label className="premium-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="surname"
                    className="premium-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="premium-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="premium-input"
                  />
                </div>
                <div>
                  <label className="premium-label">Phone Number</label>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Phone Number"
                    className="premium-input"
                  />
                </div>
              </div>

              <div>
                <label className="premium-label">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                  className="premium-input resize-none"
                ></textarea>
              </div>

              <div className="text-right mt-6">
                <button
                  type="submit"
                  disabled={loader}
                  className="premium-btn w-full sm:w-auto"
                >
                  {loader ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Help & Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/3 space-y-6"
          >
            <div className="bg-dark-card border border-dark-border p-8 rounded-2xl shadow-card h-full flex flex-col">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-primary font-semibold mb-1">Direct Email</h4>
                  <a href="mailto:support@eazyshop.com" className="text-gray-400 hover:text-white transition-colors">
                    support@eazyshop.com
                  </a>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-1">Phone Number</h4>
                  <a href="tel:+12314561231" className="text-gray-400 hover:text-white transition-colors">
                    +1 231 456 1231
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
