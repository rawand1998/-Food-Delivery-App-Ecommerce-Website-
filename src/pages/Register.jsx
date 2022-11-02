import React, { useState } from "react";
import Footer from "../component/Footer/Footer";
import { Link } from "react-router-dom";
import Title from "../component/common/Title";

import { auth, db } from "../firebase/firebase";
import { updateProfile } from "firebase/auth";
function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const register = (e) => {
    e.preventDefault();
    try {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((user) => {
          console.log(user, "user");
          updateProfile(user.user, {
            displayName: data.name,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Title title="Sign Up" />
      <form action="" className="auth register">
        <input
          type="text"
          placeholder="Full Name"
          value={data.name}
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
        />
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
        <button className="auth_btn" onClick={register}>
          Register
        </button>
      </form>
      <Link className="login_para" to="/login">
        Already have an account? Login
      </Link>
      <Footer />
    </div>
  );
}

export default Register;
