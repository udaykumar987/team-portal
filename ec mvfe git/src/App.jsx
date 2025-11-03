import React from "react";
import { Routes, Route } from "react-router-dom";
import LogoPage from "./pages/LogoPage";
import StartPage from "./pages/StartPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import VerificationPage from "./pages/VerificationPage";
import NewPasswordPage from "./pages/NewPasswordPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LogoPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/verify" element={<VerificationPage />} />
      <Route path="/newpassword" element={<NewPasswordPage />} />

    </Routes>
  );
}
