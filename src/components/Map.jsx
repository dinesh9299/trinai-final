import React from "react";

const MAp = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="w-full md:w-3/4 lg:w-2/3 rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.711194228244!2d78.417589310894!3d17.425642201632733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee53f272eb%3A0x9d0e4f397c0bbaa9!2sBrihaspathi%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1742625400376!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MAp;
