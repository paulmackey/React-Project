import React, { Component } from "react";
import Slider from "react-slick";
import logo from "../bg.jpg";
import { Link } from "react-router-dom";
import homeIcon from "../home.png";
import aboutIcon from "../user.png";
import projects from "../folder.png";

class SimpleSlider extends Component {
  render() {
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
          <img src={logo} />
          <aside>
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
          </aside>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
