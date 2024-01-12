import React from "react";
import "./FullWidthImage.css";
import TypewriterText from "../typewriter/TypewriterText";
import { Link } from "react-scroll";

const FullWidthImage = () => {
  return (
    <>
      <section className="full-width-image">
        <h5 className="banner-txt-position">Hi, I am</h5>
        <h1 className="text-uppercase">Naimath Baig</h1>
        <div className="d-flex hero-subtitle">
          <div style={{ marginRight: "5px" }}> I am </div>
          <div className="typist-text">
            <TypewriterText />
          </div>
        </div>
        {/* <div className="social-icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
        </div> */}
        <div className="social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>

        <div class="go-down wow bounceInUp">
          <Link className="mouse" href="/about"></Link>
          {/* <a href="/path/to/page" title="Link to Page">Go to Page</a> */}
        </div>
      </section>
    </>
  );
};

export default FullWidthImage;
