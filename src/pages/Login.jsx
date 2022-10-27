import React from "react";
import Footer from "../component/Footer/Footer";

function Login() {
  return (
    <div>
      <div className="login_image">
        <h2>Login</h2>
      </div>
      <form action="" className="login">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="auth_btn">Login</button>
      </form>
      <p className="login_para">Don't have an account? Create an account</p>
      <Footer />
    </div>
  );
}

export default Login;
