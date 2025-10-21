import React, { useState } from "react";
import "./Auth.css";

function SignIn({ onSwitch }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";

    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful!");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <div className="form-group">
          <label>Email ID</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" className="signin-btn">Login</button>

        <p className="switch-text">
          Don’t have an account? <span className="switch-link" onClick={onSwitch}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
