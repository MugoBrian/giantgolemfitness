import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();


export const HeaderContextProvider = HeaderContext.Provider;

export const useHeader = () => useContext(HeaderContext);
