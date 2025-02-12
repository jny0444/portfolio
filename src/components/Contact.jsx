import React from "react";

const Contact = () => {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="font-['Xanh_Mono']">
        <span className="text-[#98be65] text-xl sm:text-2xl">◆ </span>
        <span className="text-xl sm:text-2xl">Contact</span>
      </div>
      <div className="ml-4 sm:ml-6 mt-2 text-sm sm:text-base space-y-2">
        <p>
          <span className="text-[#98be65]">:</span> Email:{" "}
          <a
            href="mailto:thokchom.jnyandeep@gmail.com"
            className="hover:text-[#98be65] transition-colors"
          >
            thokchom.jnyandeep@gmail.com
          </a>
        </p>
        <p>
          <span className="text-[#98be65]">:</span> GitHub:{" "}
          <a
            href="https://github.com/jny0444"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#98be65] transition-colors"
          >
            github.com/jny0444
          </a>
        </p>
        <p>
          <span className="text-[#98be65]">:</span> X:{" "}
          <a
            href="https://x.com/0xJD_L1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#98be65] transition-colors"
          >
            x.com/0xJD_L1
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
