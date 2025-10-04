import { useHeader } from "../context/useHeaderContext";
import Navbar from "./Navbar";

function Header() {
  const { title, description, image } = useHeader();
  return (
    <div className="relative h-50 md:h-70 ">
      {" "}
      {/* Background Image */}
      <div
        className="absolute inset-0 h-50 md:h-70 bg-cover bg-center "
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      {/* Solid Color Overlay */}
      <div className="absolute inset-0 h-50 md:h-70 bg-black/50 "></div>
      <Navbar bgImage={image} />
      <div className="absolute top-24 md:top-30 lg:top-40 h-screen flex flex-col gap-2 md:gap-4 lg:gap-6 text-white font-family-heading px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">{title}</h1>
        <h5 className="lg:text-2xl text-lg md:text-xl break-words">
          {description}
        </h5>
      </div>
    </div>
  );
}

export default Header;
