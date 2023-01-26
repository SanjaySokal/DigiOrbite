import "./App.css";
import React, { lazy, Suspense } from "react";
import Head from "./inc/Head";
import Run from "./Run";
import Lazy from "./Lazy";
import { Route, Routes } from "react-router-dom";
const Service = lazy(() => import("./Pages/Service"));;
const HomePage = lazy(() => import("./Pages/HomePage"));
const About = lazy(() => import("./Pages/About"));
const Footer = lazy(() => import("./inc/Footer"));
const Contact = lazy(() => import("./Pages/Contact"));
const WebDevelopment = lazy(() => import("./Pages/Services/WebDevelopment"));;
const ServiceLocation = lazy(() => import("./Pages/ServiceLocation"));;

function App() {
  return (
    <>
      <Head />
      <Suspense fallback={<Lazy />}>
        <Routes>
          <Route path="*" element={<Lazy />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-location" element={<ServiceLocation />} />
        </Routes>
      </Suspense>
      <Footer />
      <Run />
    </>
  );
}

export default App;
