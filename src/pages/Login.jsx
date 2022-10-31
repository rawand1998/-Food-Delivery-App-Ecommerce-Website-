import React from "react";
import Title from "../component/common/Title";

import Footer from "../component/Footer/Footer";

function Login() {
  return (
    <div>
     <Title title="Login"/>
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
