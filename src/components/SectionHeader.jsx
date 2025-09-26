import React from "react";

const SectionHeader = ({ heading, subheading }) => {
  return (
    <div className=" pt-12">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="bg-primary-75 h-1 w-40 rounded"></div>
          <p className="font-family-heading font-bold text-2xl md:text-3xl pt-2.5">
            {heading}
          </p>
        </div>
      </div>
      <div className="pt-6">
        <p className="font-family-body text-lg">{subheading}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
