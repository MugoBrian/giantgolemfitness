import React from "react";

const SectionHeader = ({ heading, subheading }) => {
  return (
    <div className=" pt-8 md:pt-10">
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex flex-col items-center">
          <div className="bg-primary-75 h-1 w-40 rounded"></div>
          <p className="font-family-heading font-bold text-xl md:text-2xl pt-2.5">
            {heading}
          </p>
        </div>
        <p className="font-family-body text-md md:text-lg">{subheading}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
