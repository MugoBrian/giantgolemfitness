import { useEffect } from "react";
import MembershipHero from "../assets/images/MembershipHero.png";
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
  }, [setImage, setTitle, setDescription]);
  return <div> Memebership</div>;
}

export default Memebership;
