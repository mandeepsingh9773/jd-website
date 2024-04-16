import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import line from "../../images/Line 2.png";
import "./ContactStyle.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter valid Email.");
      return;
    }

    if (!phoneRegex.test(contact)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jaydeep",
      from_contact: contact,
      message: message,
    };

    const clearFields = () => {
      setName("");
      setEmail("");
      setContact("");
      setMessage("");
    };

    emailjs
      .send(
        "service_8vbl1qo",
        "template_nongy9l",
        templateParams,
        "7oWfUN-naTYmW9lM_"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error(
            "Failed to submit form. Please try again or try contact on given mail."
          );
        }
      );

    clearFields();
  };

  const handleEmailClick = () => {
    window.open("mailto:velarstudioswork@gmail.com", "_blank");
  };

  return (
    <>
      <div
        id="contact"
        className="main bg-photo bg-cover bg-center bg-no-repeat bg-fixed text-white space-y- flex flex-col md:flex md:flex-row md:py-8 lg:flex lg:flex-row lg:justify-between lg:py-12 xl:flex xl:flex-row xl:justify-between xl:py-14"
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <div className="logo-email md:flex md:flex-row md:justify-center md:w-1/2 xl:w-1/2">
          <div className="logos flex flex-row justify-center items-center space-x-12 pt-6 pb-1 md:flex md:flex-col md:gap-8 md:justify-center md:items-end md:pr-14 md:pb-[18rem] md:w-1/4  lg:flex lg:flex-col lg:gap-8 lg:justify-center lg:items-end lg:mt-4 lg:pr-14 lg:pb-[18rem] lg:pt-4 lg:w-1/2 xl:flex xl:flex-col xl:gap-8 xl:justify-center xl:items-end xl:pr-14 xl:pt-6 xl:pb-[18rem] xl:w-1/2">
            <Link
              to="https://www.instagram.com/velarstudios.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className=" hover:cursor-pointer"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.7 }}
              >
                <FaInstagram size={37.5} />
              </motion.div>
            </Link>
            <Link
              to="https://twitter.com/jaydeeps07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className=" hover:cursor-pointer"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.7 }}
              >
                <FaXTwitter size={34.5} />
              </motion.div>
            </Link>
            <Link
              to="https://www.linkedin.com/in/jaydeepswarnkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className=" hover:cursor-pointer"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.7 }}
              >
                <FaLinkedin size={37.5} />
              </motion.div>
            </Link>
          </div>
          <div className="email flex flex-col px-6 py-5 space-y-4 text-left md:w-1/2 md:p-0 lg:w-1/2 lg:px-4 lg:py-10 lg:gap-4">
            <img
              className="py-4 md:py-0 lg:py-0 xl:py-0"
              src={line}
              alt="line"
            />
            <p className="text-[25px] font-custom1 md:text-[25px] lg:text-[35px] xl:text-[40px]">
              Let’s <span className="text-[#FF9000]">Create...</span>
            </p>
            <p className="text-[16px] md:text-[15px] lg:text-[18px] xl:text-[20px] xl:w-[340px] text-[#8B8B8B]">
              Get in touch today to discuss your project and discover how we can
              help you!
            </p>
            <button
              className="text-left md:text-[15px] lg:text-[19px] xl:text-[22px] hover:pointer-cursor"
              onClick={handleEmailClick}
            >
              velarstudioswork@gmail.com
            </button>
          </div>
        </div>

        <div className="form font-custom1 w-full md:w-1/2 lg:flex lg-w-1/2 lg:px-8 lg:py-10 xl:flex xl:w-1/2 xl:px-16 xl:py-10">
          <form
            className="flex flex-col px-6 text-white"
            onSubmit={handleFormSubmit}
          >
            <input
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
              type="text"
              placeholder="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
            <input
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <textarea
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[100px] mb-6 md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100 resize-none"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <motion.button
              className="my-8 p-2 w-full md:w-auto lg:w-auto xl:w-auto h-[35px] m-0 bg-[#303030] text-[#A4A4A4] hover:bg-gray-800"
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              SUBMIT
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
