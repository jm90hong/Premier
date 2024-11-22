import login2 from "../assets/img/login2.png";
import backgroundLogo from "../assets/img/background-logo.png";
import login2Logo from "../assets/img/login2-logo.png";

import { signInWithGoogle, login } from "../firebase";
import { useState } from "react";

function Login2Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    await login(email, password);
  };

  const onGoogleLogin = async () => {
    await signInWithGoogle();
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <img
        src={login2}
        style={{ aspectRatio: "1080 / 1087", flex: 1 }}
        alt="a"
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#0B1828",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            textAlign: "center",
            backgroundImage: `url(${backgroundLogo})`,
            backgroundBlendMode: "exclusion",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p style={{ marginBottom: "0.5rem", fontSize: "24px" }}>Login</p>
          <p style={{ marginBottom: "1.5rem", fontSize: "16px" }}>
            Welcome back to Premier!
          </p>
          <input
            type="text"
            id="username"
            placeholder="Email or username"
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "16px",
              border: "none",
              borderRadius: "30px",
              marginBottom: "25px",
              backgroundColor: "#FFF6F6",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              fontSize: "16px",
              padding: "0.75rem",
              border: "none",
              borderRadius: "30px",
              backgroundColor: "#FFF6F6",
            }}
          />
          <button
            type="button"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem",
              backgroundColor: "#ffffff",
              color: "#000",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              marginTop: "1rem",
              fontSize: "16px",
            }}
            onClick={onLogin}
          >
            Login
          </button>
          <a
            href="#"
            style={{
              display: "block",
              margin: "1rem 0",
              fontSize: "14px",
              color: "#b8c7d9",
              textDecoration: "none",
              textAlign: "left",
              width: "100%",
            }}
          >
            Forgot Password?
          </a>
          <div>or</div>
          <button
            type="button"
            style={{
              width: "393px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem",
              backgroundColor: "#ffffff",
              color: "#000",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              marginTop: "1rem",
              fontSize: "16px",
            }}
            onClick={onGoogleLogin}
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google logo"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Login with Google
          </button>
          <div
            style={{ marginTop: "2rem", color: "#c5c5c5", fontSize: "14px" }}
          ></div>
        </div>
        <img src={login2Logo} style={{ width: "100%" }}></img>
      </div>
    </div>
  );
}

export default Login2Page;
