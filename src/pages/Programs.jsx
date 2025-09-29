import { useEffect } from "react";
import { useHeader } from "../context/useHeaderContext";

import ProgramsHero from "../assets/images/ProgramsHero.png";



function Programs() {
  const { setTitle, setDescription, setImage } = useHeader();
  const title = "Our Programs";
  const description =
    "Transform your body and mind with our specialized fitness program designed for all levels and goals.";

  useEffect(() => {
    setTitle(title);
    setDescription(description);
    setImage(ProgramsHero);
  }, [setImage, setTitle, setDescription]);

  return (
    <div>
      
    </div>
  );
}

export default Programs;
