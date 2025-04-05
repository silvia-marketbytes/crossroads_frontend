import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services/UiComponents/DocumentationAssistance";
import Languagelab from "./pages/Services/UiComponents/languagelab";
import Country from "./pages/Services/UiComponents/country";
 
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path="/services/documentation-assistance" element={<Services />} />
          <Route path="/services/language-lab" element={<Languagelab />} />
          <Route path="/services/education/country" element={<Country/>} />

        </Route>
      </>
    )
  );
 
  return <RouterProvider router={router} />;
}
 
export default App;