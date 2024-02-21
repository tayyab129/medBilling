import { IoMailOutline } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import logo from "../images/Logo-1.png";
import { Link } from "react-router-dom";

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
                  fontSize: "40px",
                }}
              />
            </div>
            <div className="">
              <p className="font-Lato text-xl pt-2 text-white font-semibold">
                Have Project on Mind?
              </p>
              <p className="font-Lato text-white">(501) 424-0123</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0 md:mr-4 flex items-center">
            <div>
              <IoMailOutline
                style={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "40px",
                }}
              />
            </div>
            <div>
              <p className="font-Lato text-xl pt-2 text-white font-semibold">
                Email
              </p>
              <p className="text-white font-Lato">Skrisentech Inc.com</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0 md:mr-4 flex items-center">
            <div>
              <LiaFaxSolid
                style={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "45px",
                }}
              />
            </div>
            <div>
              <p className="text-xl pt-2 text-white font-semibold">Fax</p>
              <p className="text-white font-Lato">(844) 726-9464</p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="font-Oswald bg-white text-black border border-black mt-4 px-4 md:px-6 py-2 rounded transition hover:border-white hover:bg-blue hover:text-white mr-auto"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black">
        <div className="py-10 px-4 lg:px-10 flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-start lg:w-[10%]">
            {/* left one */}
            <Link to="/">
              <img
                className="h-20 cursor-pointer py-2"
                src={logo}
                alt="mainLogo"
              />
              <h1 className="font-Oswald text-white font-bold pt-2">
                Skrisentech Inc
              </h1>
            </Link>
          </div>
          <div className="text-white lg:mt-0 mt-6">
            {/* left two */}
            <nav className="flex flex-col gap-4 font-Lato">
              <h6 className="text-2xl font-bold">Company</h6>
              <Link to="/about" className="hover:text-blue">
                About Us
              </Link>
              <Link to="/services" className="hover:text-blue">
                Services
              </Link>
              <Link to="/specialties" className="hover:text-blue">
                Specialties
              </Link>
              <Link to="/price-plan" className="hover:text-blue">
                Pricing
              </Link>
              <Link to="/referral-program" className="hover:text-blue">
                Referal Program
              </Link>
              <Link to="/contact" className="hover:text-blue">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="text-white mt-6 lg:mt-0">
            {/* right one */}
            <nav className="flex flex-col gap-4 font-Lato">
              <h6 className="text-2xl font-bold">Services</h6>
              <Link to="/medical-billing" className="hover:text-blue">
                Medical Billing
              </Link>
              <Link to="/medical-coding" className="hover:text-blue">
                Medical Coding
              </Link>
              <Link to="/medical-credentialing" className="hover:text-blue">
                Medical Credentialing
              </Link>
              <a className="hover:text-blue">Verification of Benefits</a>
              <a className="hover:text-blue">Prior Authorization Services</a>
              <a className="hover:text-blue">Patient Billing</a>
            </nav>
          </div>
          <div className="mt-6 lg:mt-0 lg:w-1/4 w-full">
            {/* right two */}
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-white font-bold text-2xl font-Oswald ">
                Quick Contact
              </h1>
              <input
                type="text"
                className="font-Lato lg:flex-1 border p-2 rounded border-none focus:outline-none"
                placeholder="Your Email"
              />
              <div className="flex flex-col w-full">
                <textarea
                  className="font-Lato border p-2 rounded focus:outline-none"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue font-Oswald text-white w-full mt-4 p-3 rounded transition hover:bg-sky-700"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue font-Lato py-4 px-5 md:w-full w-full flex flex-col md:flex-row justify-between items-center font-semibold text-white">
        <p>© 2023 Skrisentech Inc Medical Billing. All rights reserved</p>
        <Link to="#" className="font-Lato">
          Privacy Policy | Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
