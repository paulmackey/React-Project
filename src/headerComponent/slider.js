import React, { Component } from 'react';
import Slider from "react-slick";
import logo from '../bg.jpg';

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
        <img src={logo}></img>
        <aside>
        <h1 className="mt-3">Paul Mackey</h1>
        <p>Web Developer</p>
        <p className="">Irish Web Headquarters</p>
        <div className="social-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/paulmackey"><i className="fa fa-github"></i></a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paul-mackey-25543098/" ><i className="fa fa-linkedin"></i></a>
  </div>
        <p className="text-emoji">\ (•◡•) /</p>
        </aside>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
