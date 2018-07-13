import React, { Component } from "react";

import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'


import homeIcon from "../images/home.png"; //include nav icons
import aboutIcon from "../images/user.png";
import blogIcon from "../images/blog.png";
import projects from "../images/folder.png";

class topNav extends Component {

  render() {
    return (
      <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <nav className="top-nav">
              <ul id="headerButtons">
                <li className="navButton">
                  <NavLink exact activeClassName="selected" to="/">
                    <img src={homeIcon} />
                  </NavLink>
                </li>
                <li className="navButton">
                  <NavLink activeClassName="selected" to="/about">
                    <img src={aboutIcon} />
                  </NavLink>
                </li>
                <li className="navButton">
                  <NavLink activeClassName="selected" to="/projects">
                    <img src={projects} />
                  </NavLink>
                </li>
                <li className="navButton">
                  <NavLink activeClassName="selected" to="/blog">
                    <img src={blogIcon} />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default topNav;
