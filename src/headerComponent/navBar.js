import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../home.png';
import aboutIcon from '../user.png';
import logo from '../profiler.jpg';
import projects from '../folder.png';
import { pushRotate as Menu } from 'react-burger-menu'

class NavBar extends Component {
  render() {
    return (
      <Menu noOverlay pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
    <div className="sidenav">

        <ul id="headerButtons">
          <li className="navButton"><Link to="">  <img className="img-fluid img-profile rounded-circle mx-auto mb-2 logo" src={logo}></img></Link></li>
            <li className="navButton"><Link to="/about"><img src={aboutIcon}></img> About Me</Link></li>
              <li className="navButton"><Link to="/projects"><img src={projects}></img> Projects</Link></li>
        </ul>
      </div>
      </Menu>
    )
  }
}

export default NavBar;
