import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
 
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
        </Route>
      </>
    )
  );
 
  return <RouterProvider router={router} />;
}
 
export default App;