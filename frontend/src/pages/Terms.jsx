import React from "react";
import { useNavigate } from "react-router-dom";

function Terms() {
    const navigate = useNavigate();
  return (
    <>
      <div className="full-container bg-white text-black w-full h-screen">
        <div className="w-11/12 mx-auto my-5">
          <h1 className="text-3xl font-bold text-center">
            Terms and Conditions
          </h1>
          <div className="body mt-5 pb-5">
            <h3 className="text-2xl font-semibold">Introduction</h3>
            <p>
              Welcome to our website. By accessing and using our services, you
              agree to be bound by the following terms and conditions. If you do
              not agree with any part of these terms, you should not use our
              services.
            </p>
            <h3 className="text-2xl font-semibold mt-2">Definitions</h3>
            <ul className="list-disc ml-5">
              <li>We refers to our website.</li>
              <li>
                You refers to the person accessing and using our services.
              </li>
              <li>
                Service refers to the website and its features provided by us.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold mt-2">Use of Service</h3>
            <ul className="list-disc ml-5">
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                By using our services, you represent and warrant that all
                information you provide is accurate, complete, and up-to-date.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold mt-2">Account Security</h3>
            <li>
              We use advanced encryption techniques to securely store your
              passwords, emails, phone numbers, and usernames.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account.
            </li>
            <h3 className="text-2xl font-semibold mt-2">
              Data Collection and Use
            </h3>
            <li>
              We collect and store your passwords, emails, phone numbers, and
              usernames in an encrypted form to enhance security.
            </li>
            <li>
              We will not share your personal information with third parties
              without your consent, except as required by law.
            </li>
            <h3 className="text-2xl font-semibold mt-2">
              User Responsibilities
            </h3>
            <li>
              You are responsible for safeguarding your account information and
              for any activity that occurs under your account.
            </li>
            <li>
              You agree not to use the service for any illegal or unauthorized
              purpose.
            </li>
            <li>
              You are responsible for all activities that occur under your
              account.
            </li>
            <li>
              You agree to take necessary steps to protect your account and
              personal information from unauthorized access or use.
            </li>
            <h3 className="text-2xl font-semibold mt-2">
              Limitation of Liability
            </h3>
            <li>
              We are not liable for any direct, indirect, incidental, special,
              or consequential damages resulting from your use of our services.
            </li>
            <li>
              We do not guarantee that our service will be uninterrupted,
              secure, or error-free.
            </li>
            <h3 className="text-2xl font-semibold mt-2">Termination</h3>
            <li>
              We reserve the right to terminate or suspend your account and
              access to our services at our sole discretion, without notice, for
              conduct that we believe violates these terms.
            </li>
            <h3 className="text-2xl font-semibold mt-2">
              Changes to Terms and Conditions
            </h3>
            <li>
              We reserve the right to modify these terms at any time. Any
              changes will be posted on this page, and it is your responsibility
              to review these terms periodically.
            </li>
            <h3 className="text-2xl font-semibold mt-2">Governing Law</h3>
            <li>
              These terms shall be governed and construed in accordance with the
              laws of the State of Pakistan, without regard to its conflict of
              law principles.
            </li>
            <h3 className="text-2xl font-semibold mt-2">Contact Us</h3>
            <li>
              If you have any questions about these terms, please contact us at{" "}
              <a
                className="text-blue-700"
                href="mailto:tayyabkhank1234@gmail.com"
              >
                our email
              </a>
              .
            </li>
          </div>
          <h4 className="text-2xl font-semibold mt-2">Are you satisfied with our service?</h4>
          <div className="help-buttons mt-2 pb-10 flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mr-2"
              onClick={() => navigate("/")}
            >
              Yes
              <i className="fa-solid fa-thumbs-up ml-2"></i>
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg ml-3"
              onClick={() => navigate("/contact")}
            >
              No
              <i className="fa-solid fa-thumbs-down ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terms;
