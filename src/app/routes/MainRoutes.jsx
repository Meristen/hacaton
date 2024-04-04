import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../../features/auth/register/RegisterPage";

import Contact from "../../pages/contact/Contact";
import LoginPage from "../../features/auth/login/LoginPage";
import HomePage from "../../pages/home/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;
