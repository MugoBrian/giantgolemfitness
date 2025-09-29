import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Programs from "./pages/Programs.jsx";
import Home from "./pages/Home.jsx";
import Memebership from "./pages/Memebership.jsx";
import Contact from "./pages/Contact.jsx";

// import Layout from "./Layout.jsx";
import App from "./App.jsx";
import Gallery from "./pages/Gallery.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="programs" element={<Programs />} />
      <Route path="membership" element={<Memebership />} />
      <Route path="gallery" element={<Gallery />} />

      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
