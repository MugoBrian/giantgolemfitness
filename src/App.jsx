import { useState } from "react";

import { HeaderProvider } from "./context/useHeaderContext";
import HomeHero from "./assets/images/HomeHero.png";
import Layout from "./Layout";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(HomeHero);

  return (
    <HeaderProvider
      value={{ title, setTitle, description, setDescription, image, setImage }}
    >
      <Layout />
    </HeaderProvider>
  );
}

export default App;
