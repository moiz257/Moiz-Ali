"use client"
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="h-auto flex justify-center md:mt-16 md:mb-16 items-center bg-black text-white px-8 md:px-16">
      <div className="w-full max-w-3xl space-y-8">
        {/* Description Text */}
        <h2 className="text-left text-lg font-medium text-white/55">
          Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill
          out the form below with your details and message, and we&apos;ll get back to you as soon as possible.
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side: Name, Email, Phone */}
          <div className="md:col-span-1 space-y-9">
            <div className="flex flex-col">
              <label className="mb-2 text-white/20">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 bg-white/10 rounded-md text-white/30 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-white/20">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 bg-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-white/20">Phone</label>
              <input
                type="text"
                placeholder="Your Phone"
                className="p-2 bg-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          {/* Right Side: Message Field */}
          <div className="md:col-span-1 flex flex-col">
            <label className="mb-2 text-white/20">Message</label>
            <textarea
              placeholder="Your Message"
              className="p-2 bg-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500 h-64"
            ></textarea>
          </div>

          {/* Bottom: Submit Button */}
          <div className="md:col-span-2 flex flex-col">      
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white font-semibold rounded-full  self-start ring-1 ring-white/45"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
