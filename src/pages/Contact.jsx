/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    <div className="contact-1 py-4 md:py-12 mt-[4rem] border-t">
  <div className="container mx-auto px-4">
    <div className="xl:flex -mx-4">
      <div className="md:w-[100%] xl:mx-auto px-4">

        <div className="xl:w-3/4 mb-4 -red-300">
          <h1 className="text-3xl text-medium mb-5 text-red-600 font-semibold">GET IN TOUCH</h1>
          <p className="text-md text-white/60 mb-5">Please submit your information and we will get back to you.</p>
          <p>Call us at <a href="tel:+915218747" className="text-indigo-600 border-b border-transparent hover:border-indigo-600 transition-colors duration-300">+9191521874</a></p>
        </div>

        <div className="md:flex md:-mx-4 mt-4 md:mt-10">

          <div className="md:w-2/3 md:px-4">
            <div className="contact-form">
              <div className="sm:flex sm:flex-wrap -mx-3">
                <div className="sm:w-1/2 px-3 mb-6">
                  <input type="text" placeholder="Full Name" className="border-2 rounded px-3 py-2 w-full focus:border-indigo-400 input"/>
                </div>
                <div className="sm:w-1/2 px-3 mb-6">
                  <input type="text" placeholder="Company Name" className="border-2 rounded px-3 py-2 w-full focus:border-indigo-400 input"/>
                </div>
                <div className="sm:w-1/2 px-3 mb-6">
                  <input type="text" placeholder="E-mail address" className="border-2 rounded px-3 py-2 w-full focus:border-indigo-400 input"/>
                </div>
                <div className="sm:w-1/2 px-3 mb-6">
                  <input type="text" placeholder="Phone Number" className="border-2 rounded px-3 py-2 w-full focus:border-indigo-400 input" />
                </div>
                <div className="sm:w-full px-3">
                  <textarea name="message" id="message" cols="30" rows="4" placeholder="Your message here" className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"></textarea>
                </div>
              </div>
              <div className="text-right mt-4 md:mt-12">
                <button className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                  Send a Message
                  <i className="fas fa-chevron-right ml-2 text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
            <div className="bg-white/80 rounded py-4 px-6 text-black/70 font-medium">
              <h5 className="text-xl font-medium mb-3 text-blue-600">Help</h5>
              <p className=" mb-4">Need help or have any query? Don't hesitate, you can directly shoot us an <a href="mailto:" className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block">email</a> or call us at <a href="tel:" className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block font-medium">+1 231 456 1231</a></p>
              <p className="">You can move to <a href="#" className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block">FAQs</a> or <a href="#" className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block">Support</a> page to get more information about our site.</p>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</div>
  )
}

export default Contact