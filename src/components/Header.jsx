import { useHeader } from "../context/useHeaderContext";
import Navbar from "./Navbar";

function Header() {
  const { title, description, image } = useHeader();
  return (
    <div className="relative h-70">
      {" "}
      {/* Background Image */}
      <div
        className="absolute inset-0 h-70 bg-cover bg-center "
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      {/* Solid Color Overlay */}
      <div className="absolute inset-0 h-70 bg-black/50 "></div>
      <Navbar bgImage={image}  />
      <div className="absolute top-40 h-screen lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30 flex flex-col gap-6 text-white font-family-heading px-4">
        <h1 className="text-4xl">{title}</h1>
        <h5 className="lg:text-2xl text-xl break-words">{description}</h5>
      </div>
    </div>
  );
}

export default Header;
