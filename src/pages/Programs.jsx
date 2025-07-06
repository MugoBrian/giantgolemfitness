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

  return <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, magnam sapiente deleniti minus aspernatur harum debitis, ratione nostrum facilis laudantium quae, molestiae praesentium? Nisi non in eum dignissimos nesciunt est?
  Odio aperiam nostrum, veritatis, optio magnam quidem, hic repudiandae tempore quae labore id vitae. Minus, quis est corrupti fugiat incidunt optio deserunt necessitatibus obcaecati aut atque possimus, cumque magni aliquid.
  Ducimus ipsum ullam sed inventore rem, aperiam repellat cumque velit blanditiis odio! Quo ea, fugiat nisi amet itaque ut, unde sequi, tempora molestias labore minus possimus veritatis. Esse, aliquid voluptatum?
  Eius sit quos alias quaerat expedita, voluptates ipsum officiis nihil explicabo dolore, quas excepturi quasi animi magni recusandae commodi voluptatum eveniet soluta labore totam sequi tempora velit eaque? Labore, laudantium!
  Aliquam cumque, voluptatibus id similique laborum, incidunt tenetur nesciunt accusamus quaerat consequuntur, cum amet in? In nesciunt sint laboriosam minus quis voluptates deleniti ipsam vitae excepturi, natus cum vero unde.</div>;
}

export default Programs;
