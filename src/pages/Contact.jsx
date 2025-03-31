import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdMail } from "react-icons/io";
import { TiSupport } from "react-icons/ti";
import { MdCall, MdPrecisionManufacturing } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { ScrollTop } from "primereact/scrolltop";
import trinai5 from "../images/trinai-5.jpg";

const Contact = () => {
  // 🟢 State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🟢 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Dynamically update based on input name
    });

    if (submitted) {
      validateField(name, value);
    }
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field, value) => {
    let error = "";
    if (field === "name" && !value) {
      error = "Name is required";
    }
    if (field === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is not valid";
      }
    }
    if (field === "phone") {
      if (!value) {
        error = "Mobile number is required";
      } else if (!/^\d{10}$/.test(value)) {
        error = "Mobile number should be 10 digits";
      }
    }
    if (field === "message" && !value) {
      error = "Employee ID is required";
    }
    if (field === "subject" && !value) {
      error = "Position is required";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }

    // Mobile validation
    if (!formData.phone) {
      newErrors.phone = "Mobile number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number should be 10 digits";
      valid = false;
    }

    // Employee ID validation
    if (!formData.message) {
      newErrors.message = "Employee ID is required";
      valid = false;
    }

    // Position validation
    if (!formData.subject) {
      newErrors.subject = "Position is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // 🟢 Handle form submission
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    setSubmitted(true);

    const valid = validateForm();
    if (!valid) {
      setLoader(false);
    }

    if (valid) {
      try {
        const response = await fetch(
          "https://trinai-backend.onrender.com/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        if (response.ok) {
          alert("Email sent successfully!");
          setLoader(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }); // Clear form after submission
        } else {
          alert("Error sending email");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending email");
      }
    }
  };

  return (
    <div>
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${trinai5})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">
            Get in Touch with Trinai
          </h1>
        </div>
      </div>

      <div className="bg-slate-50 lg:p-20 md:p-5 p-5 lg:grid grid-cols-2 text-gray-600">
        <div>
          <h2 className="text-orange-600 text-2xl font-bold my-3">
            Have a Question?
          </h2>
          <p className="text-xl">
            Please let us know if you have a question or want to leave a
            comment.
          </p>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className=" w-full">
                {errors.name ? (
                  <TextField
                    true
                    error
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${
                      errors.name ? " border-red-500" : ""
                    } bg-slate-200 w-full`}
                  />
                ) : (
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${
                      errors.name ? " border-red-500" : ""
                    } bg-slate-200 w-full`}
                  />
                )}
                {/* 
                {errors.name && (
                  <div className=" text-red-400">{errors.name}</div>
                )} */}
              </div>

              <div className="w-full">
                {errors.email ? (
                  <TextField
                    error
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-200 w-full"
                  />
                ) : (
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-200 w-full"
                  />
                )}
              </div>
              <div className=" w-full">
                {errors.phone ? (
                  <TextField
                    error
                    label="Phone number*"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-200 w-full"
                  />
                ) : (
                  <TextField
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-200 w-full"
                  />
                )}
              </div>
              <div className=" w-full">
                {errors.subject ? (
                  <TextField
                    error
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-200 w-full"
                  />
                ) : (
                  <TextField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-200 w-full"
                  />
                )}
              </div>
            </div>
            <div className="mt-10">
              {errors.message ? (
                <TextField
                  error
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-200"
                />
              ) : (
                <TextField
                  label="Message*"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-200"
                />
              )}
            </div>
            <div className="flex justify-end mt-5">
              {loader ? (
                <button
                  type="submit"
                  disabled={true}
                  className="bg-orange-600  text-white py-4 text-xl px-8 rounded-md"
                >
                  Submitting
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-orange-600 text-white py-4 text-xl px-8 rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right Section (Contact Details) */}
        <div className="lg:p-10 mt-3">
          <div className="bg-slate-200 px-10 py-5 rounded-lg flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-bold">Address</h3>
              <div>
                <div className=" font-bold text-gray-500">
                  Registered Office
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="text-orange-600">
                    <FaLocationDot />
                  </div>
                  <p className="text-black text-md font-thin">
                    Shangrila Plaza, Banjara Hills, Hyderabad, Telangana-500034
                  </p>
                </div>
              </div>
              <div className=" mt-2">
                <div className=" font-bold text-gray-500">
                  Manufacturing Unit
                </div>
                <div className="flex  gap-3 mt-2">
                  <div className="text-orange-600 mt-1">
                    <MdPrecisionManufacturing />
                  </div>
                  <p className="text-black text-md font-thin">
                    Sy No. 340, Plot No.198/2, 201, 202, 203 & 204, Tuniki
                    Bollaram, Siddipet, TS- 502279
                  </p>
                </div>
              </div>
            </div>
            {/* <ContactDetail
              icon={<FaLocationDot />}
              title="Address"
              text="Shangrila Plaza, Banjara Hills, Hyderabad, Telangana-500034"
            /> */}
            <ContactDetail
              icon={<IoMdMail />}
              title="Mail us"
              text="trinai@brihaspathi.com"
            />
            <ContactDetail
              icon={<MdCall />}
              title="Call us"
              text="+919885888835"
            />
            <div>
              <h3 className="text-2xl font-bold">Follow us on social media</h3>
              <div className="flex gap-10 mt-2">
                <SocialIcon
                  href="https://www.facebook.com/profile.php?id=61574150717517"
                  Icon={FaFacebookF}
                />
                <SocialIcon
                  href="https://x.com/TRINAI557289"
                  Icon={FaTwitter}
                />
                <SocialIcon
                  href="https://www.instagram.com/trinai_official/"
                  Icon={AiFillInstagram}
                />
                <SocialIcon
                  href="https://www.linkedin.com/company/trinai/"
                  Icon={FaLinkedinIn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="lg:p-20 md:p-5 p-5 bg-slate-50 text-gray-500">
        <iframe
          className=" rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.711194228244!2d78.417589310894!3d17.425642201632733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee53f272eb%3A0x9d0e4f397c0bbaa9!2sBrihaspathi%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1742625400376!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Scroll to Top Button */}
      <div className="bg-red-500">
        <ScrollTop
          target="window"
          threshold={100}
          className="w-3rem h-3rem border-round bg-orange-600"
          icon="pi pi-arrow-up text-white text-xl"
        />
      </div>
    </div>
  );
};

// Reusable Component for Contact Details
const ContactDetail = ({ icon, title, text }) => (
  <div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="flex items-center gap-3 mt-2">
      <div className="text-orange-600">{icon}</div>
      <p className="text-black text-md font-thin">{text}</p>
    </div>
  </div>
);

// Reusable Component for Social Icons
const SocialIcon = ({ href, Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon
      className="text-orange-600 hover:text-gray-500 cursor-pointer"
      size={20}
    />
  </a>
);

export default Contact;
