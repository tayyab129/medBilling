import "../App.css";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import "../Header.css";
import VisionImamge from "../images/vision.png";
import PrimaryImage from "../images/primary-bg.jpg";
import GrowthImage from "../images/growth.png";
import Footer from "../components/Footer";
import InfoNav from "../components/InfoNav";
import Nav from "../components/Nav";
import ServiceCardSection from "../components/Home/ServiceCardSection";

const infoNavItems = {
  leftSide: [
    { text: "info@allstarsmb.com", icon: <MdEmail size={18} /> },
    { text: "(501)-424-0123", icon: <BsFillTelephoneFill size={18} /> },
    { text: "(844) 726-9464", icon: <BiSolidBuildingHouse size={20} /> },
  ],
  rightSide: [
    { icon: <FaFacebookF /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaYoutube /> },
  ],
};

function Services() {
  return (
    <div>
      <InfoNav />
      <Nav />

      <div className="relative">
        <img
          src={PrimaryImage}
          alt="PrimaryImage"
          className="w-full md:h-48 h-32"
        />
        <h1 className="font-Oswald text-white text-4xl font-bold absolute md:top-14 top-10 md:left-16 left-32">
          Services
        </h1>
      </div>
      <div className="bg-darkgray">
        <div className="md:flex gap-10 md:mx-20 mx-8 my-14 md:my-0">
          <div className="md:w-2/3 md:my-24 w-full">
            {/* Left section */}
            <h1 className="font-Oswald text-2xl py-2">
              Medical Billing Services
            </h1>
            <p className="mt-5font-Lato">
              Our purpose is to offer a comprehensive range of revenue-related
              services essential for the smooth operation of medical practices.
              We understand that your primary focus is delivering high-quality
              patient care. However, tasks such as insurance verification, payer
              credentialing, medical billing, accounts receivable follow-up,
              appeals for unpaid claims, and revenue management are all vital
              components of managing a medical business.
            </p>

            <p className="mt-3 font-Lato">
              Moreover, we recognize the constant changes in billing codes,
              insurance requirements, and payer policies, which can be
              exceedingly time-consuming for healthcare practitioners and
              facilities to keep up with while maintaining their operations.
            </p>
            <p className="mt-3 font-Lato">
              That’s where Skrisentech Inc comes in! For more details about our
              services tailored to your specific area of specialization, please
              click on one of the links below:
            </p>
            <button className="font-Oswald bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>
          <div>
            {/* Right section */}
            <img
              className="md:pt-28"
              src={VisionImamge}
              alt="MainImage"
              style={{ backgroundPosition: "bottom" }}
            ></img>
          </div>
        </div>
      </div>

      <div className="my-28 md:my-20 ">
        <ServiceCardSection />
      </div>

      <Footer />
    </div>
  );
}
export default Services;
