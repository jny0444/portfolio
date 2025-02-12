import rul8Img from "./rul-8.png";
import talkTuahImg from "./tawk-tuah.png";
import cardgoImg from "./cardgo.png";
import freakyCalcImg from "./freakycalc.png";
import emacsDotsImg from "./emacs-dots.png";

export const project = [
  {
    title: "Rul-8",
    description:
      "A blockchain dApp for playing roulette; generate random numbers using Chainlink VRF and bet on them",
    link: "https://github.com/jny0444/roulette",
    image: rul8Img,
    techStack: [
      "Solidity",
      "React",
      "Hardhat",
      "Chainlink VRF",
      "Ethers.js",
      "TailwindCSS",
    ],
  },
  {
    title: "Talk Tuah",
    description:
      "A blockchain dApp based on 4chan and forum pages where users can post and comment on threads and different boards",
    link: "https://github.com/jny0444/talk-tuah",
    image: talkTuahImg,
    techStack: ["Solidity", "Next.js", "IPFS", "Wagmi", "TailwindCSS"],
  },
  {
    title: "CardGo",
    description:
      "This is a project based on TPOT-TCG, an NFT based card game with in-game currency",
    link: "https://github.com/jny0444/CardGo",
    image: cardgoImg,
    techStack: ["Solidity", "React", "Foundry", "OpenZeppelin", "Web3.js"],
  },
  {
    title: "Freaky Calc",
    description:
      "This is a project based on a calculator which was designed to be freaky",
    link: "https://github.com/jny0444/freakycalc",
    image: freakyCalcImg,
    techStack: ["JavaScript", "React", "CSS"],
  },
  {
    title: "emacs-dots",
    description: "My personal emacs configuration files",
    link: "https://github.com/jny0444/emacs-dots",
    image: emacsDotsImg,
    techStack: ["Emacs Lisp", "Org-mode"],
  },
];
