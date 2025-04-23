import React, { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services/UiComponents/DocumentationAssistance";
import Languagelab from "./pages/Services/UiComponents/languagelab";
import Country from "./pages/Services/UiComponents/country";
import Germany from "./pages/Services/UiComponents/country/Redirected_country/germany";
import France from "./pages/Services/UiComponents/country/Redirected_country/france";
import Australia from "./pages/Services/UiComponents/country/Redirected_country/australia";
import Canada from "./pages/Services/UiComponents/country/Redirected_country/canada";
import Uk from "./pages/Services/UiComponents/country/Redirected_country/uk";
import Netherlands from "./pages/Services/UiComponents/country/Redirected_country/netherlands";
import USA from "./pages/Services/UiComponents/country/Redirected_country/USA";
import Sweden from "./pages/Services/UiComponents/country/Redirected_country/sweden";
import NewZealand from "./pages/Services/UiComponents/country/Redirected_country/newzealand";
import Switzerland from "./pages/Services/UiComponents/country/Redirected_country/switzerland";
import Finland from "./pages/Services/UiComponents/country/Redirected_country/finland";
import Italy from "./pages/Services/UiComponents/country/Redirected_country/italy";
import Latvia from "./pages/Services/UiComponents/country/Redirected_country/latvia";
import Malta from "./pages/Services/UiComponents/country/Redirected_country/malta";
import Poland from "./pages/Services/UiComponents/country/Redirected_country/poland";
import Slovakia from "./pages/Services/UiComponents/country/Redirected_country/slovakia";
import Spain from "./pages/Services/UiComponents/country/Redirected_country/spain";
import Aboutus from "./pages/Aboutus";
import Testimonials from "./pages/Testimonial";
import Blog from "./pages/Blog/MainPage";
import BlogDetailed from "./pages/Blog/DetailedPage";
import Gallery from "./pages/Gallery-1";
import NewsAndEvents from "./pages/NewsAndEvents";
import GalleryGermanyIntake from "./pages/Gallery-1/DedicatedGalleryPage/GalleryGermanyIntake";
import GalleryFranceIntake from "./pages/Gallery-1/DedicatedGalleryPage/GalleryFranceIntake";
import ContactUs from "./pages/Contactus";
import FreeEducationGermany from "./pages/FreeEducation/Germany";
import FreeEducationAustria from "./pages/FreeEducation/Austria";
import FreeEducationSlovakia from "./pages/FreeEducation/Slovakia";
import FreeEducationSlovania from "./pages/FreeEducation/Slovania";
import FreeEducationItaly from "./pages/FreeEducation/Italy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/services/documentation-assistance" element={<Services />} />
        <Route path="/services/language-lab" element={<Languagelab />} />
        <Route path="/services/education/country" element={<Country />} />
        <Route path="/services/education/country/germany" element={<Germany />} />
        <Route path="/services/education/country/france" element={<France />} />
        <Route path="/services/education/country/australia" element={<Australia />} />
        <Route path="/services/education/country/canada" element={<Canada />} />
        <Route path="/services/education/country/uk" element={<Uk />} />
        <Route path="/services/education/country/usa" element={<USA />} />
        <Route path="/services/education/country/netherlands" element={<Netherlands />} />
        <Route path="/services/education/country/new-zealand" element={<NewZealand />} />
        <Route path="/services/education/country/switzerland" element={<Switzerland />} />
        <Route path="/services/education/country/finland" element={<Finland />} />
        <Route path="/services/education/country/sweden" element={<Sweden />} />
        <Route path="/services/education/country/italy" element={<Italy />} />
        <Route path="/services/education/country/latvia" element={<Latvia />} />
        <Route path="/services/education/country/malta" element={<Malta />} />
        <Route path="/services/education/country/poland" element={<Poland />} />
        <Route path="/services/education/country/slovakia" element={<Slovakia />} />
        <Route path="/services/education/country/spain" element={<Spain />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/Blogs/:slug" element={<BlogDetailed />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Gallery/Germany" element={<GalleryGermanyIntake/>} />
        <Route path="/Gallery/France" element={<GalleryFranceIntake/>} />
        <Route path="/news" element={<NewsAndEvents />} />
        <Route path="/Contact-Us" element={<ContactUs/>} />
        <Route path="/Freeeducation/Germany" element={<FreeEducationGermany/>} />
        <Route path="/Freeeducation/Austria" element={<FreeEducationAustria/>} />
        <Route path="/Freeeducation/Slovakia" element={<FreeEducationSlovakia/>} />
        <Route path="/Freeeducation/Slovania" element={<FreeEducationSlovania/>} />
        <Route path="/Freeeducation/Italy" element={<FreeEducationItaly/>} />

      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;
