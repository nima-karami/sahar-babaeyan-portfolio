import React from "react";

const AboutCard = ({ item, local }) => {
  return (
    <div
      style={{ background: `${local === "dark" ? "dark:bg-[#1D1D1D]" : item?.bg}` }}
      className="about-box dark:bg-[#1D1D1D]"
    >
      {<img className="w-8 h-8 dark:hidden object-contain  block" src={item.icon} alt="" />}

      <div className="space-y-2">
        <h3 className="dark:text-white text-2xl font-semibold">
          {item?.title}
        </h3>
        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
          {item?.des}
        </p>
      </div>
    </div>
  );
};
export default AboutCard;
