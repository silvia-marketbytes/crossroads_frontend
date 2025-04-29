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
import News1 from "./pages/NewsAndEvents/DedicatedPage/News1";
import News2 from "./pages/NewsAndEvents/DedicatedPage/News2";
import News3 from "./pages/NewsAndEvents/DedicatedPage/News3";
import News4 from "./pages/NewsAndEvents/DedicatedPage/News4";
import News5 from "./pages/NewsAndEvents/DedicatedPage/News5";
import News6 from "./pages/NewsAndEvents/DedicatedPage/News6";
import News7 from "./pages/NewsAndEvents/DedicatedPage/News7";
import News8 from "./pages/NewsAndEvents/DedicatedPage/News8";
import Course from "./pages/Services/UiComponents/Course";
 
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
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/services/documentation-assistance" element={<Services />} />
        <Route path="/services/language-lab" element={<Languagelab />} />
        <Route path="/services/education/course" element={<Course />} />
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
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetailed />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/germany" element={<GalleryGermanyIntake/>} />
        <Route path="/gallery/france" element={<GalleryFranceIntake/>} />
        <Route path="/news" element={<NewsAndEvents />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/freeeducation/germany" element={<FreeEducationGermany/>} />
        <Route path="/freeeducation/austria" element={<FreeEducationAustria/>} />
        <Route path="/freeeducation/slovakia" element={<FreeEducationSlovakia/>} />
        <Route path="/freeeducation/slovania" element={<FreeEducationSlovania/>} />
        <Route path="/freeeducation/italy" element={<FreeEducationItaly/>} />
        <Route path="/news/uk-admission-day-kochi" element={<News1/>} />
        <Route path="/news/international-education-fair-delhi" element={<News2/>} />
        <Route path="/news/international-education-fair-trivandrum" element={<News3/>} />
        <Route path="/news/austria-admission-day-kochi" element={<News4/>} />
        <Route path="/news/international-education-fair-mumbai" element={<News5/>} />
        <Route path="/news/italy-admission-day-kochi" element={<News6/>} />
        <Route path="/news/international-education-fair-kerala" element={<News7/>} />
        <Route path="/news/france-admission-day-kochi" element={<News8/>} />
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