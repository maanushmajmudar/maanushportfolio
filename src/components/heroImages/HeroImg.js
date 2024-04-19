import "./HeroImgStyles.css";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import IntroImg from "../../assets/intro-bg.jpg";

export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src={IntroImg}
          alt="Hero Image"
          width="100%"
          style={{ height: "100vh" }}
        />
      </div>

      <div className="content">
        <p>HI, I'M Microsoft Certified Developer.</p>
        <h1>Power Platform Developer / FrontEnd Developer</h1>
        <div>
          <a
            href={require("../../assets/maanush-resume.pdf")}
            className="btn"
            download="maanush-resume.pdf"
          >
            Resume
          </a>
          <a
            href={require("../../assets/maanush-cover-letter.pdf")}
            className="btn btn-light"
            download="maanush-cover-letter.pdf"
          >
            Cover Letter
          </a>
        </div>
        <div>
          <br />
          <div className="social">
            <a href="https://www.linkedin.com/in/maanush98" target="_blank">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/maanushmajmudar" target="_blank">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
