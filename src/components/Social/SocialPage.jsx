import React from "react";
import "./styles/styles.css";

export default function SocialPage() {
  return (
    <div className="social-container animate__animated animate__fadeIn">
      <div className="social-link">
        <a
          className="twitter-link"
          href="https://twitter.com/AzzezEd"
          target="_blank"
        >
          <i className="bi bi-twitter"></i>
          Twitter
        </a>
        <a
          className="github-link"
          href="https://github.com/rizrmdhn"
          target="_blank"
        >
          <i className="bi bi-github"></i>
          Github
        </a>
        <a
          className="linkedin-link"
          href="http://linkedin.com/in/noor-rizki-ramadhan-036aaa24b/"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>
          Linkedin
        </a>
      </div>
    </div>
  );
}
