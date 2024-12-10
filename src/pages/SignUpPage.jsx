import logo from "../assets/img/logo.png";
import backgroundLogo from "../assets/img/background-logo.png";
import { useState } from "react";
import { MdOutlineEmail, MdOutlineLock, MdOutlinePerson } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { signUp, signInWithGoogle } from "../utils/firebase_auth";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  //no used
  const onGoogleLogin = async () => {
    var result = await signInWithGoogle();
    if(result){
      //로그인 페이지 이동
      navigate("/");
    }
  };
  
  const onSignUp = async () => {
    if(!isValidEmail(email)){
      alert("Only Email Format is allowed.");
      return;
    }

    if(password.length == 0){
      alert("type your password");
      return;
    }

    var result = await signUp(name,email, password);
    if(result){
      //로그인 페이지 이동
      navigate("/");
    }
  };

  const isValidEmail = (email) => {
    const googleEmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return googleEmailRegex.test(email);
  };

  return (
    <>
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
        ></img>
        <div
          style={{
            display: "flex",
            width: "882px",
            padding: "94px 45px 23px 45px",
            borderRadius: "30px",
            border: "1px solid",
            borderColor: "#000",
            position: "relative",
            gap: "56px",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              width: "308px",
            }}
          >
            <img
              style={{ width: "139px", marginBottom: "21px" }}
              src={logo}
              alt="logo"
            ></img>
            <div
              style={{
                fontSize: "30px",
                marginBottom: "21px",
                fontWeight: "600",
              }}
            >
              Create Account
            </div>
            <div 
              onClick={() => navigate("/")} 
              style={{ 
                color: "#666", 
                marginTop: "10px", 
                cursor: "pointer", 
                textDecoration: "underline" 
              }}
            >
              If you already have an<br/>
              account, you can login here.
            </div>
          </div>
          <div>
            {/* Rest of the component remains the same */}
            <div style={{}}>
              <label style={{ fontSize: "14px" }}>Name</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ccc",
                  padding: "0.5rem 0",
                  width: "428px",
                }}
              >
                <MdOutlinePerson style={{ marginRight: "0.5rem" }} />
                <input
                  type="name"
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
            </div>
            {/* Rest of the input fields and button */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
