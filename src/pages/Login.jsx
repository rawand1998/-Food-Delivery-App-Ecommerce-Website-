import React, { useState } from "react";
import Title from "../component/common/Title";

import Footer from "../component/Footer/Footer";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const login = async () => {
    try {
      auth.signInWithEmailAndPassword(data.email, data.password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Title title="Login" />
      <form action="" className="auth">
        <input
          type="text"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />
        <button className="auth_btn" onClick={login}>
          Login
        </button>
      </form>
      <Link className="login_para" to="/register">
        Don't have an account? Create an account
      </Link>
      <Footer />
    </div>
  );
}

export default Login;
