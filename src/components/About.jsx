import React from "react";

const About = () => {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="font-['Xanh_Mono']">
        <span className="text-[#98be65] text-xl sm:text-2xl">◆ </span>
        <span className="text-xl sm:text-2xl">About Me</span>
      </div>
      <p className="ml-4 sm:ml-6 mt-2 text-sm sm:text-base">
        Hello, I'm a blockchain developer who loves to learn new things and
        share knowledge with others. Feel free to reach out!
      </p>

      <div className="mt-6">
        <div className="font-['Xanh_Mono']">
          <span className="text-[#98be65] text-xl sm:text-2xl">◆ </span>
          <span className="text-xl sm:text-2xl">Skills</span>
        </div>

        <div className="ml-4 sm:ml-6 mt-2 font-mono">
          <div className="grid grid-cols-[120px_1fr] gap-2 text-sm sm:text-base">
            <div className="text-[#98be65]">Languages</div>
            <div>JavaScript, TypeScript, Solidity, Python, Rust</div>

            <div className="text-[#98be65]">Frontend</div>
            <div>React, Next.js, TailwindCSS, Web3.js, Ethers.js, Wagmi</div>

            <div className="text-[#98be65]">Backend</div>
            <div>Node.js, Hardhat, Foundry, Viem</div>

            <div className="text-[#98be65]">Blockchain</div>
            <div>Smart Contracts, DeFi, NFTs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
