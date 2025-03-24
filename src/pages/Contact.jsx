import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import TextField from "@mui/material/TextField";
import { IoMdMail } from "react-icons/io";
import { TiSupport } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

import { FaLocationDot } from "react-icons/fa6";
import MAp from "../components/Map";
const Contact = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Background image with fixed effect */}
        <div
          className="absolute inset-0 bg-fixed bg-center  bg-cover"
          style={{
            backgroundImage:
              "url(https://www.shutterstock.com/image-photo/modern-cctv-camera-on-wall-600nw-784897093.jpg)",
          }}
        ></div>

        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Optional heading or text content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">
            Get in Touch with Trinai
          </h1>
        </div>
      </div>

      <div className="bg-slate-50 lg:p-20 md:p-5 p-5  lg:grid grid-cols-2 text-gray-600">
        <div>
          <div className=" text-orange-600  text-2xl font-bold my-3">
            Have a Question?
          </div>
          <div className=" text-xl">
            Please let us know if you have a question want to leave a comment
          </div>
          <div className=" ">
            <form>
              <div className=" grid-cols-1  grid lg:grid-cols-2 mt-10 justify-around gap-10  ">
                <TextField
                  id=""
                  label="Name*"
                  //   multiline
                  //   maxRows={4}
                  className=" bg-slate-200 outline-none"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Email*"
                  //   multiline
                  //   maxRows={4}
                  className=" bg-slate-200"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Phone number*"
                  //   multiline
                  //   maxRows={4}
                  className=" bg-slate-200"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Subject*"
                  //   multiline
                  //   maxRows={4}
                  className=" bg-slate-200"
                />
              </div>
              <div className=" mt-10">
                {" "}
                <TextField
                  id="filled-multiline-static"
                  label="Message*"
                  multiline
                  rows={4}
                  className="  w-full mt-5 bg-slate-200"
                />
              </div>
              <div className=" flex justify-end mt-5">
                <button className=" bg-orange-600 text-white py-4  text-xl px-8 rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" lg:p-10 mt-3">
          <div className=" bg-slate-200 px-10 py-5 rounded-lg flex flex-col gap-5">
            <div>
              <div className=" text-2xl font-bold">Address</div>
              <div className=" flex justify-start items-center gap-3 mt-2">
                <div>
                  {" "}
                  <FaLocationDot className=" text-orange-600" size={24} />
                </div>
                <div className=" text-black text-xl font-thin">
                  Shipper, 208 Avenue street,New York, USA
                </div>
              </div>
            </div>
            <div>
              <div className=" text-2xl font-bold">Mail us</div>
              <div className=" flex justify-start items-center gap-3 mt-2">
                <div>
                  <IoMdMail className=" text-orange-600" size={25} />
                </div>
                <div className=" text-black text-xl font-thin">
                  info@trinai.com
                </div>
              </div>
            </div>
            <div>
              <div className=" text-2xl font-bold">Call us</div>
              <div className=" flex justify-start items-center gap-3 mt-2">
                <div>
                  <TiSupport className=" text-orange-600" size={30} />
                </div>
                <div className=" text-black text-xl font-thin">
                  support@gmail.com
                </div>
              </div>

              <div className=" flex justify-start items-center gap-3 mt-2">
                <div>
                  <MdCall className=" text-orange-600" size={30} />
                </div>
                <div className=" text-black text-xl font-thin">
                  +910987654321
                </div>
              </div>
            </div>
            <div>
              <div className=" text-2xl font-bold">
                Follow us on social media
              </div>
              <div className=" flex  items-center gap-10 mt-2">
                <div>
                  <FaFacebookF
                    className=" text-orange-600 hover:text-gray-500  cursor-pointer"
                    size={20}
                  />
                </div>
                <div>
                  <FaTwitter
                    className=" text-orange-600 hover:text-gray-500  cursor-pointer"
                    size={20}
                  />
                </div>
                <div>
                  <AiFillInstagram
                    className=" text-orange-600 hover:text-gray-500  cursor-pointer"
                    size={20}
                  />
                </div>
                <div>
                  <FaLinkedinIn
                    className=" text-orange-600 hover:text-gray-500  cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:p-20 md:p-5 p-5 bg-slate-50 text-gray-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.711194228244!2d78.417589310894!3d17.425642201632733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee53f272eb%3A0x9d0e4f397c0bbaa9!2sBrihaspathi%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1742625400376!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className=" rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
