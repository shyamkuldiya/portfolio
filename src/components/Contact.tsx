"use client";
import React from "react";

export const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-neutral-600 mb-8">
          Have a question or want to work together? Feel free to reach out to
          me.
        </p>

        {/* Email Contact Button */}
        <div className="flex justify-center gap-5 items-center">
          <a
            href="mailto:shyamg63v8@gmail.com?subject=Hello%20from%20your%20website&body=Hi%20there,%0A%0AI%20wanted%20to%20get%20in%20touch%20with%20you.%0A%0ABest%20regards,"
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg  inline-block"
          >
            Contact Me via Email
          </a>

          {/* WhatsApp Contact Button */}
          <a
            href="https://wa.me/6376426677" // Replace with your actual phone number in international format
            className="bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg inline-block"
          >
            Contact Me via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
