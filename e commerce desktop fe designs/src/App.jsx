import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirect root to signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
