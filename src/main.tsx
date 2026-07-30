import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import App from "./app/App.tsx";
import Home from "./app/pages/Home.tsx";
import About from "./app/pages/About.tsx";
import Services from "./app/pages/Services.tsx";
import Portfolio from "./app/pages/Portfolio.tsx";
import Booking from "./app/pages/Booking.tsx";
import Contact from "./app/pages/Contact.tsx";
import NotFound from "./app/pages/NotFound.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
);
