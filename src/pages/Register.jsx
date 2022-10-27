import React from 'react'
import Footer from '../component/Footer/Footer'
import {Link} from 'react-router-dom'
function Register() {
  return (
    <div>
    <div className="login_image">
      <h2>Signup</h2>
    </div>
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