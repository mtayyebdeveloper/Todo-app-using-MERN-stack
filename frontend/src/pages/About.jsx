import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="full-container bg-white">
      <div id="about" class="relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div class="pt-1"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About me
                </h2>

                <p>
                  <h4 className="text-3xl font-semibold">
                    Welcome to our secure online account management platform!
                  </h4>
                  At our online account management platform, we are dedicated to
                  providing a secure and reliable platform for managing your
                  online accounts. Our mission is to safeguard your digital
                  identity by offering state-of-the-art encryption and
                  user-friendly tools that keep your personal information
                  protected.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover object-center sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="Picsart_23-05-18_14-01-10-875.jpg"
            alt="Our image"
          />
        </div>
      </div>
      <div className="body w-11/12 mx-auto mt-4">
        <h3 className="text-2xl font-semibold mt-3">Our Story</h3>
        <p>
          Our company was founded in 2020 with the vision of creating a safer
          internet experience for everyone. With the increasing number of online
          threats and data breaches, we recognized the need for a service that
          prioritizes user security without compromising convenience. Our team
          of experts in cybersecurity and technology came together to develop a
          platform that meets the highest standards of protection.
        </p>

        <h3 className="text-2xl font-semibold mt-3">What We Do</h3>
        <p>
          We specialize in securely storing your passwords, emails, phone
          numbers, and usernames in an encrypted format. Our services include:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Encrypted Data Storage: We use advanced encryption techniques to
            ensure that your sensitive information is stored securely.
          </li>
          <li>
            User-Friendly Interface: Our platform is designed to be intuitive
            and easy to use, so you can manage your accounts effortlessly.
          </li>
          <li>
            24/7 Support: We offer round-the-clock support to assist you with
            any questions or concerns you may have.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-3">Our Values</h3>
        <ul className="list-disc ml-5">
          <li>
            Security: Your safety is our top priority. We employ the latest
            security measures to protect your data.
          </li>
          <li>
            Trust: We are committed to maintaining transparency and integrity in
            all our operations.
          </li>
          <li>
            Innovation: We continually strive to improve our services and stay
            ahead of the latest cybersecurity trends.
          </li>
          <li>
            Customer Focus: We value our users and are dedicated to providing
            exceptional customer service.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-3">Meet Our Team</h3>
        <p>
          Our team is composed of passionate professionals with extensive
          experience in cybersecurity, software development, and customer
          service. We work tirelessly to ensure that our platform is secure,
          efficient, and responsive to your needs.
        </p>

        <h3 className="text-2xl font-semibold mt-3">Contact Us</h3>
        <p>
          If you have any questions or concerns, please feel free to contact us
          via email or phone. We are here to help.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-simibold py-2 px-4 rounded mt-2"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        <h3 className="text-2xl font-semibold mt-3">Join Us</h3>
        <p>
          Join thousands of users who trust us to protect their online
          identities. Sign up today and experience the peace of mind that comes
          with knowing your personal information is safe and secure.
        </p>

        <button
          className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-simibold py-2 px-4 rounded mt-2"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default About;
