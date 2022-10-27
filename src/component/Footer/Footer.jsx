import React from "react";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className=" footer test_logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur accusamus
          </p>
        </div>
        <div className="footer footer_delivery_time">
          <h5 className="footer_label">Delivery Time</h5>
          <span className="footer_lable_day sunday">Sunday - Thursday</span>
          <span>10:00am - 11:00pm</span>
          <br /> <br />
          <span className="footer_lable_day">Friday - Saturday</span>
          <span>Off day</span>
        </div>
        <div className="footer footer_contact">
          <h5 className="footer_label">Contact</h5>
          <p className="subtitle">
            Location: ZindaBazar,
            <br /> Sylhet-3100, Bangladesh
          </p>
          <br />
          <span className="footer_lable_day">Phone: 01712345678</span>
          <br />
          <span className="footer_lable_day">Email: example@gmail.com</span>
        </div>
        <div className=" footer footer_news">
          <h5 className="footer_label">NewsLetter</h5>
          <p className="subtitle">Subscribe our newsletter</p>
          <input type="text" placeholder="Enter your email" />
        </div>
      </div>
      <div className="footer_icons">
        <p>
          Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.
        </p>
        <div className="footer_social">
          <span>Follow:</span>
          <div className="socials_icons">
            <FaFacebookF className="footer_icon_soical" />
            <FaTwitter className="footer_icon_soical" />
            <FaLinkedinIn className="footer_icon_soical" />
            <FaGithubAlt className="footer_icon_soical" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
