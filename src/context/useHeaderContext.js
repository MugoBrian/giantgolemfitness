import { createContext, useContext } from "react";

const HeaderContext = createContext({
  title: "",
  setTitle: () => {},
  description: "",
  setDescription: () => {},
  image: "",
  setImage: () => {},
});

export const HeaderProvider = HeaderContext.Provider;

export const useHeader = () => useContext(HeaderContext);
