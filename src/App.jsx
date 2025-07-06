import { useState } from "react";
import { Outlet } from "react-router-dom";
// import Layout from "./Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HeaderContextProvider } from "./context/useHeaderContext";
import HomeHero from "./assets/images/HomeHero.png";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(HomeHero);

  return (
    <HeaderContextProvider
      value={{ title, setTitle, description, setDescription, image, setImage }}
    >
      <Header />
      <Outlet />
      <Footer />
    </HeaderContextProvider>
  );
}

export default App;
