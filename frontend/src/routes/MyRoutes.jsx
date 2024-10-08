import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Hire from "../components/Hire";
import Portfolio from "../components/Portfolio";
import Footer from "../components/features/Footer";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route index element={<Portfolio />}></Route>
          <Route path="hire" element={<Hire />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
