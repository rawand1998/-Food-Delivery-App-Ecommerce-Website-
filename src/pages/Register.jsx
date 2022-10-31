import React from 'react'
import Footer from '../component/Footer/Footer'
import {Link} from 'react-router-dom'
import Title from '../component/common/Title'
function Register() {
  return (
    <div>
        <Title title="Sign Up"/>
    <form action="" className="auth register">
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button className="auth_btn">Register</button>
    </form>
    <Link className="login_para" to="/login">Already have an account? Login</Link>
    <Footer />
  </div>
  )
}

export default Register