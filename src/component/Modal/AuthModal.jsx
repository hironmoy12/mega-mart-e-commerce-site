import React, { useState } from "react";
import "./Modal.css";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

function AuthModal({ show, onClose }) {
  const [activeTab, setActiveTab] = useState("signin");

  if (!show) return null;

  return (
    <div className="auth-modal">
      <div className="auth-content">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="auth-tabs">
          <button
            className={activeTab === "signin" ? "active" : ""}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "signin" ? (
          <SignIn onSwitch={() => setActiveTab("signup")} />
        ) : (
          <SignUp onSwitch={() => setActiveTab("signin")} />
        )}
      </div>
    </div>
  );
}

export default AuthModal;
