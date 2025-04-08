import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router";
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
          <Route path="/germany" element={<Germany/>} />
          <Route path="/france" element={<France/>} />
          <Route path="/australia" element={<Australia/>} />
          <Route path="/canada" element={<Canada/>} />
          <Route path="/uk" element={<Uk/>} />
          <Route path="/usa" element={<USA/>} />
          <Route path="/netherlands" element={<Netherlands/>} />
          <Route path="/new-zealand" element={<NewZealand/>} />
          <Route path="/switzerland" element={<Switzerland/>} />
          <Route path="/finland" element={<Finland/>} />
          <Route path="/sweden" element={<Sweden/>} />
          <Route path="/italy" element={<Italy/>} />
          <Route path="/latvia" element={<Latvia/>} />
          <Route path="/malta" element={<Malta/>} />
          <Route path="/poland" element={<Poland/>} />
          <Route path="/slovakia" element={<Slovakia/>} />
          <Route path="/spain" element={<Spain/>} />


        </Route>
      </>
    )
  );
 
  return <RouterProvider router={router} />;
}
 
export default App;