import "../App.css";
import Container from "../components/Container";
import { FaYoutube, FaDotCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsHeartPulse, BsDashLg } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { GrCheckmark } from "react-icons/gr";
import { LuDot } from "react-icons/lu";
import "../Header.css";
import Brud from "../images/brud.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";

function PricePlan() {
  return (
    <div>
      <InfoNav />
      <Navbar />

      <div className="relative">
        <div
          className="bg-gradient-to-r from-blue to-blue h-72 md:h-full"
          style={{
            background: "linear-gradient(180deg, #204066 0%, #008ac6 100%)",
            opacity: "0.9",
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
        >
          <img
            src={Brud}
            alt="Brud"
            className="opacity-[0.07] w-full h-72 md:h-full"
          />
        </div>
        <h1 className="text-white md:text-4xl text-3xl font-bold absolute top-16 left-16 font-poppins">
          Plans and Pricing
        </h1>
        <p className="font-Roboto text-white absolute top-24 md:left-16 md:w-1/2 pt-5 md:pt-8 text-center md:text-left">
          We offer a range of comprehensive plans to cater to various medical
          billing needs. Our transparent pricing ensures that you get the best
          value for your investment. Choose the plan that aligns with your
          practice’s requirements and budget.
        </p>
      </div>
      {/* Card Section */}
      <div className="md:mt-16 pt-12 pb-10 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-5 md:mx-20">
          {/* First Card */}
          <div className="flex-1">
            <div className="flex flex-col border rounded-md border-blue">
              <div className="p-8 text-gray-600">
                <BsHeartPulse style={{ fontSize: "35px", color: "#008ac6" }} />
                <h1 className="text-2xl text-secondary font-semibold pt-4 font-poppins">
                  Essentail Plan
                </h1>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Claim Scrubing</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Charge Entry</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Clearing House Rejection</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Denial Management</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Submissions within 24 Hours</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Primary Payer Submission</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Paper Claims Submissions</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Payment Posting</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Timely Feeling Appeals</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Daily Follow-Up on Unpaid Claims</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>24/7 Billing Support</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Monthly Reports</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Dedicated Account Manager</h1>
                  <LuDot />
                </div>
                <div className="pt-5">
                  <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8 hover:bg-sky-700">
                    Request a Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* second Card */}
          <div className="flex-1">
            <div className="flex flex-col border rounded-md bg-blue">
              <div className="p-8 text-white">
                <BsHeartPulse style={{ fontSize: "35px", color: "white" }} />
                <h1 className="text-2xl text-white font-semibold pt-4 font-poppins">
                  Premium Plan
                </h1>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Claim Scrubing</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Charge Entry</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Clearing House Rejection</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Denial Management</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Submissions within 24 Hours</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Primary Payer Submission</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Paper Claims Submissions</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Payment Posting</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Timely Feeling Appeals</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Daily Follow-Up on Unpaid Claims</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>24/7 Billing Support</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Monthly Reports</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <GrCheckmark className="mr-2" />
                  <h1>Dedicated Account Manager</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Eligibility Verification</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Deductible Verification</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Referral/Authorization</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>EDI Setups</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>ERA Setups</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>EFT Setups</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Patient Statements</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Patient Help Desk</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Monthly Billing Audit</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Monthly Coding Audit</h1>
                  <LuDot />
                </div>
                <div className="pt-5">
                  <button className="btn bg-blue h-12 border border-white rounded-md text-white font-semibold px-8 hover:bg-white hover:text-blue">
                    Request a Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="flex-1">
            <div className="flex flex-col border rounded-md border-blue">
              <div className="p-8 text-gray-600">
                <BsHeartPulse style={{ fontSize: "35px", color: "#008ac6" }} />
                <h1 className="text-2xl text-secondary font-semibold pt-4 font-poppins">
                  All-Inclusive Plan
                </h1>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Claim Scrubing</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Charge Entry</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Clearing House Rejection</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Denial Management</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Submissions within 24 Hours</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Primary Payer Submission</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Paper Claims Submissions</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Payment Posting</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Timely Feeling Appeals</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Daily Follow-Up on Unpaid Claims</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>24/7 Billing Support</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Monthly Reports</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FcCheckmark className="mr-2" />
                  <h1>Dedicated Account Manager</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Eligibility Verification</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Deductible Verification</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Referral/Authorization</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>EDI Setups</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>ERA Setups</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>EFT Setups</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Patient Statements</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Patient Help Desk</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Monthly Billing Audit</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Monthly Coding Audit</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <BsDashLg className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Propsal Acceptence</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <BsDashLg className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>Credentialing & Enrollments</h1>
                  <LuDot />
                </div>
                <div className="flex items-center py-2">
                  <BsDashLg className="mr-2" style={{ fontSize: "12px" }} />
                  <h1>CAQH Attestation</h1>
                  <LuDot />
                </div>
                <div className="pt-5">
                  <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8 hover:bg-sky-700">
                    Request a Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PricePlan;