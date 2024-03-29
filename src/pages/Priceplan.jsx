import "../App.css";
import Container from "../components/Container";
import { FaDotCircle } from "react-icons/fa";
import { BsHeartPulse, BsDashLg } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { GrCheckmark } from "react-icons/gr";
import { LuDot } from "react-icons/lu";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";

function PricePlan() {
  return (
    <div>
      <InfoNav />
      <Nav />

      <div className="relative">
        <img
          src={PrimaryImage}
          alt="PrimaryImage"
          className="w-full h-72 md:h-64 "
        />
        <h1 className="font-Oswald text-white md:text-4xl text-3xl font-bold absolute top-16 left-20 font-poppins">
          Pricing and Plans
        </h1>
        <p className="font-Lato text-white absolute top-24 md:left-14 md:w-1/2 pt-5 md:pt-8 text-center md:text-left mx-5">
          We provide a variety of comprehensive plans to meet various medical
          billing needs. Our transparent pricing ensures that you receive the
          best value for your investment. Select the plan that aligns with your
          practice’s requirements and budget.
        </p>
      </div>
      {/* Card Section */}
      <div className="md:mt-16 pt-12 pb-10 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-6 mx-5 md:mx-20">
        {/* First Card */}
        <div className="flex-1">
          <div className="flex flex-col border rounded-md border-blue p-8 text-gray-600">
            <BsHeartPulse style={{ fontSize: "35px", color: "#008ac6" }} />
            <h1 className="font-Oswald text-2xl text-secondary font-semibold pt-4 font-poppins">
              Our Essentail Plan
            </h1>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Claim Scrubing</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Charge Entry</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Clearing House Rejection</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Denial Management</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Submissions within 24 Hours</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Primary Payer Submission</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Paper Claims Submissions</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Payment Posting</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Timely Feeling Appeals</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Daily Follow-Up on Unpaid Claims</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">24/7 Billing Support</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Monthly Reports</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Dedicated Account Manager</h1>
              <LuDot />
            </div>
            <div className="pt-5">
              <button className="font-Oswald btn bg-blue h-12 rounded-md text-white font-semibold px-8 hover:bg-sky-700">
                Arrange a Call Back
              </button>
            </div>
          </div>
        </div>
        {/* second Card */}
        <div className="flex-1">
          <div className="flex flex-col border rounded-md bg-blue p-8 text-white">
            <BsHeartPulse style={{ fontSize: "35px", color: "white" }} />
            <h1 className=" font-Oswald text-2xl text-white font-semibold pt-4 font-poppins">
              Our Premium Plan
            </h1>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Claim Scrubing</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Charge Entry</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Clearing House Rejection</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Denial Management</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Submissions within 24 Hours</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Primary Payer Submission</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Paper Claims Submissions</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Payment Posting</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Timely Feeling Appeals</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Daily Follow-Up on Unpaid Claims</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">24/7 Billing Support</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Monthly Reports</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <GrCheckmark className="mr-2" />
              <h1 className="font-Lato">Dedicated Account Manager</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Eligibility Verification</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Deductible Verification</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Referral/Authorization</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">EDI Setups</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">ERA Setups</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">EFT Setups</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Patient Statements</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Patient Help Desk</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Monthly Billing Audit</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Monthly Coding Audit</h1>
              <LuDot />
            </div>
            <div className="pt-5">
              <button className="font-Oswald btn bg-blue h-12 border border-white rounded-md text-white font-semibold px-8 hover:bg-white hover:text-blue">
                Arrange a Call Back
              </button>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="flex-1">
          <div className="flex flex-col border rounded-md border-blue p-8 text-gray-600">
            <BsHeartPulse style={{ fontSize: "35px", color: "#008ac6" }} />
            <h1 className="font-Oswald text-2xl text-secondary font-semibold pt-4 font-poppins">
              Our-Inclusive Plan
            </h1>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Claim Scrubing</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Charge Entry</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Clearing House Rejection</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Denial Management</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Submissions within 24 Hours</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Primary Payer Submission</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Paper Claims Submissions</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Payment Posting</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Timely Feeling Appeals</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Daily Follow-Up on Unpaid Claims</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">24/7 Billing Support</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Monthly Reports</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FcCheckmark className="mr-2" />
              <h1 className="font-Lato">Dedicated Account Manager</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Eligibility Verification</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Deductible Verification</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Referral/Authorization</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">EDI Setups</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">ERA Setups</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">EFT Setups</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Patient Statements</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Patient Help Desk</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Monthly Billing Audit</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <FaDotCircle className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Monthly Coding Audit</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <BsDashLg className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Propsal Acceptence</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <BsDashLg className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">Credentialing & Enrollments</h1>
              <LuDot />
            </div>
            <div className="flex items-center py-2">
              <BsDashLg className="mr-2" style={{ fontSize: "12px" }} />
              <h1 className="font-Lato">CAQH Attestation</h1>
              <LuDot />
            </div>
            <div className="pt-5">
              <button className="font-Oswald btn bg-blue h-12 rounded-md text-white font-semibold px-8 hover:bg-sky-700">
                Arrange a Call Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PricePlan;
