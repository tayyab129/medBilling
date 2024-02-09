import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import logo from "../images/main-logo.webp";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue w-full">
        <div className="mx-4 lg:mx-16 py-4 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0 md:mr-4 flex items-center">
            <div>
              <LuPhoneCall
                style={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "45px",
                }}
              />
            </div>
            <div>
              <p className="text-xl pt-2 text-white font-semibold">
                Have Project on Mind?
              </p>
              <p className="text-white">(501) 424-0123</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0 md:mr-4 flex items-center">
            <div>
              <IoMailOutline
                style={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "50px",
                }}
              />
            </div>
            <div>
              <p className="text-xl pt-2 text-white font-semibold">Email</p>
              <p className="text-white">info@allstarsmb.com</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0 md:mr-4 flex items-center">
            <div>
              <LiaFaxSolid
                style={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "55px",
                }}
              />
            </div>
            <div>
              <p className="text-xl pt-2 text-white font-semibold">Fax</p>
              <p className="text-white">(844) 726-9464</p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-white text-black border border-black mt-4 px-4 md:px-6 py-2 rounded transition hover:border-white hover:bg-blue hover:text-white mr-auto"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black">
        <div className="py-10 px-4 lg:px-10 flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-start border-2 rounded-lg border-blue lg:w-[28%]">
            {/* left one */}
            <div className="bg-white pt-5 pl-5 rounded-tl-lg rounded-tr-lg">
              <img
                className="h-20 cursor-pointer py-2"
                src={logo}
                alt="mainLogo"
              />
            </div>
            <p className="text-white bg-black px-5 pt-5">
              AllStars has been helping Healthcare providers in increasing
              collections, reduce extra expenses and streamline the business
              workflow with highly experienced team.
            </p>

            <div className="flex social-links space-x-4 mx-5 my-5">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-blue rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-80"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-blue rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-80"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-blue rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-80"
              >
                <FaYoutube className="text-white text-lg" />
              </a>
            </div>
          </div>
          <div className="text-white lg:mt-0 mt-6">
            {/* left two */}
            <nav className="flex flex-col gap-4">
              <h6 className="text-2xl font-bold">Company</h6>
              <a href="#" className="hover:text-blue">
                About Us
              </a>
              <a href="#" className="hover:text-blue">
                Services
              </a>
              <a href="#" className="hover:text-blue">
                Specialties
              </a>
              <a href="#" className="hover:text-blue">
                Pricing
              </a>
              <a href="#" className="hover:text-blue">
                Referal Program
              </a>
              <a href="#" className="hover:text-blue">
                Contact Us
              </a>
            </nav>
          </div>
          <div className="text-white mt-6 lg:mt-0">
            {/* right one */}
            <nav className="flex flex-col gap-4">
              <h6 className="text-2xl font-bold">Services</h6>
              <a href="#" className="hover:text-blue">
                Medical Billing
              </a>
              <a href="#" className="hover:text-blue">
                Medical Coding
              </a>
              <a href="#" className="hover:text-blue">
                Medical Credentialing
              </a>
              <a href="#" className="hover:text-blue">
                Verification of Benefits
              </a>
              <a href="#" className="hover:text-blue">
                Prior Authorization Services
              </a>
              <a href="#" className="hover:text-blue">
                Patient Billing
              </a>
            </nav>
          </div>
          <div className="mt-6 lg:mt-0 lg:w-1/4 w-full">
            {/* right two */}
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-white font-bold text-2xl">Quick Contact</h1>
              <input
                type="text"
                className="lg:flex-1 border p-2 rounded border-none focus:outline-none"
                placeholder="Your Email"
              />
              <div className="flex flex-col w-full">
                <textarea
                  className="border p-2 rounded focus:outline-none"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue text-white w-full mt-4 p-3 rounded transition hover:bg-sky-700"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue">
        <div className="py-4 px-5 md:w-full w-full flex flex-col md:flex-row justify-between items-center font-semibold text-white">
          <p>© 2023 AllStars Medical Billing. All rights reserved</p>
          <a href="#">Privacy Policy | Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;