import { BiCheck } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";

function MembershipCard() {
  return (
    <div className="bg-white p-8 rounded-2xl">
      {/* Frequency */}
      <div className="flex flex-col gap-4">
        <h4 className="font-semibold text-2xl font-family-heading text-center">
          Daily
        </h4>
        {/* Price */}
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-0.5">
            <div className="text-3xl flex flex-row">
              <p className="align-super text-sm font-family-body font-bold">KES</p>
              <p className="text-4xl font-family-body font-semibold"> 200</p>
            </div>
            <p className="font-family-body text-base text-black">
              {" "}
              / per session
            </p>
          </div>
        </div>
        {/* Features */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center text-gray-300">
            <BiCheck className="h-6 w-6" />
            <p className="font-family-body ">Access to equipments</p>
          </div>
          <div className="flex flex-row gap-2 items-center text-gray-300">
            <BiCheck className="h-6 w-6" />
            <p className="font-family-body ">Access to equipments</p>
          </div>
          <div className="flex flex-row gap-2 items-center text-gray-300">
            <BiCheck className="h-6 w-6" />
            <p className="font-family-body ">Access to equipments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;
