import React from "react";
import UseData from "../Hooks/UseData";

const Footer = ({ bg, condition }) => {
  const { local } = UseData();
  return (
    <footer
      style={{
        background: `${
          local === "light" ? bg : condition ? "#212425" : "transparent"
        }`,
      }}
      className="overflow-hidden rounded-b-2xl"
    >
      <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
        © {new Date().getFullYear()} All Rights Reserved by{" "}
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="sahar-babaeyan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sahar Babaeyan
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
