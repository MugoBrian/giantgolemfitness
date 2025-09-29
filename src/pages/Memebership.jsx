import { useEffect } from "react";
import MembershipHero from "../assets/images/MembershipHero.png";

import { MembershipCard, MemebershipSectionHeader } from "../components";
import { PaymentSection } from "../components/membership";

import membershipData from "../lib/data/memberships.json";

import { useHeader } from "../context/useHeaderContext";
function Memebership() {
  const { setTitle, setDescription, setImage } = useHeader();
  const title = "Membership";
  const description =
    "Discover our different membership options tailored for you.";

  useEffect(() => {
    setTitle(title);
    setDescription(description);
    setImage(MembershipHero);

    return () => {
      setTitle("");
      setDescription("");
    };
  }, [setImage, setTitle, setDescription]);
  return (
    <div className="flex-col gap-6 bg-white-50 pt-14 pb-12 text-center px-4 lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <MemebershipSectionHeader heading="INDIVIDUAL" />
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
            {membershipData
              .filter((membership) => membership.type == "individual")
              .map((membership, index) => (
                <MembershipCard key={index} {...membership} isPage="true" />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <MemebershipSectionHeader heading="COUPLES" />
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
            {membershipData
              .filter((membership) => membership.type == "couple")
              .map((membership, index) => (
                <MembershipCard key={index} {...membership} isPage="true" />
              ))}
          </div>
        </div>
      </div>
      <div className="bg-white-50 mt-16">
        <PaymentSection />
      </div>
    </div>
  );
}

export default Memebership;
