import logo from "../assets/img/logo.png";
import backgroundLogo from "../assets/img/background-logo.png";
import { useState } from "react";
import { MdOutlineEmail, MdOutlineLock, MdOutlinePerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { signUp } from "../utils/firebase_auth";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSignUp = async () => {
    if (!isValidEmail(email)) {
      alert("Please use a valid Gmail address.");
      return;
    }
    try {
      const result = await signUp(name, email, password);
      if (result) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  const isValidEmail = (email) => {
    const googleEmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return googleEmailRegex.test(email);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url('${backgroundLogo}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          position: "absolute",
          top: 40,
          left: 34,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", margin: "0 auto 20px" }}
        />
        <h2 style={{ textAlign: "center", fontWeight: "600" }}>Create Account</h2>
        <div style={{ marginTop: "20px" }}>
          <label style={{ fontSize: "14px" }}>Name</label>
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
            <MdOutlinePerson style={{ marginRight: "0.5rem" }} />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "14px",
              }}
            />
          </div>
          <label style={{ fontSize: "14px" }}>Email</label>
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
            <MdOutlineEmail style={{ marginRight: "0.5rem" }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "14px",
              }}
            />
          </div>
          <label style={{ fontSize: "14px" }}>Password</label>
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
            <MdOutlineLock style={{ marginRight: "0.5rem" }} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
        <button
          onClick={onSignUp}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Sign Up
        </button>
        <div style={{ textAlign: "center", marginTop: "10px", color: "#666" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Log in here.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

