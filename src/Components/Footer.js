import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Health<span className="ft-sign">Care</span>
            </p>
            <p className="ft-description">
            Access healthcare professionals online for quick medical advice, prescriptions, refills, and medical notes in minutes. Get on-demand medical services right at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Heart Disease</a>
            </li>
            <li>
              <a href="#services">Dental Care</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthcare.com">support@healthcare.com</a>
            </li>
            <li>
              <a href="mailto:appointment@healthcare.com">
                appointment@healthcare.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">+91 xxxxx 98234</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">+91 xxxxx 09348</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 HealthCare All Rights Reserved</p>

      </div>
    </div>
  );
}

export default Footer;
