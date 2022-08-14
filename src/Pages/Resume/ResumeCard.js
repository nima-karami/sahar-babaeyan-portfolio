import React from "react";

const ResumeCard = ({ arrayObject, local }) => {

  const Icon = arrayObject.icon;
  const type = arrayObject.type;

  return (
      <div>
        <div className="flex items-center space-x-2 mb-4 ">
          <Icon className="text-6xl text-[#F95054]" />
          <h4 className="text-5xl dark:text-white font-medium">{type}</h4>
        </div>
        
        {arrayObject.array.map( (item, i) => (
          <div style={{
                    background: `${
                      local === "dark" ? "" : item?.bg
                    }`,
                  }}
            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:bg-[#1D1D1D] dark:border-[#212425] dark:border-2"
            >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {item.date}
            </span>
            <h3 className="text-xl dark:text-white">{item.title}</h3>
            <p className="dark:text-[#b7b7b7]">{item.place}</p>
          </div>
        )
        
        )}
        
      </div>
  );
};

export default ResumeCard;
