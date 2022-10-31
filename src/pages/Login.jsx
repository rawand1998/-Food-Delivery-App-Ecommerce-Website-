import React from "react";
import Title from "../component/common/Title";

import Footer from "../component/Footer/Footer";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
     <Title title="Login"/>
      <form action="" className="auth">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="auth_btn">Login</button>
      </form>
      <Link className="login_para" to="/register">Don't have an account? Create an account</Link>
      <Footer />
    </div>
  );
}

export default Login;
