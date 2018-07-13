import React, { Component } from "react";

import Slider from "react-slick"; // Include slick slider
import logo from "../images/bg.jpg"; //include background logo
import { Link } from "react-router-dom"; // need this for going to different links ie /projects or /about
import homeIcon from "../images/home.png"; //include nav icons
import aboutIcon from "../images/user.png";
import blogIcon from "../images/blog.png";
import projects from "../images/folder.png";
import { Animated } from "react-animated-css"; //inlude animate.css

class SimpleSlider extends Component {

  render() {

    //slider settings
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>

        <div>
          <img className="hero" src={logo} />

          <aside>

            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
              <h1 className="mt-3">Paul Mackey</h1>
              <p>Web Developer</p>
              <p className="">Irish Web Headquarters</p>

              <div className="social-icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulmackey"
                >
                  <i className="fa fa-github" />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/paul-mackey-25543098/"
                >
                  <i className="fa fa-linkedin" />
                </a>

              </div>

              <p className="text-emoji">\ (•◡•) /</p>

              <Link to="/about">
                <img src={aboutIcon} /> About Me
            </Link>

              <Link to="/projects">
                <img src={projects} /> Projects
            </Link>

              <Link to="/blog">
                <img src={blogIcon} /> Blog
            </Link>

            </Animated>
          </aside>

        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
