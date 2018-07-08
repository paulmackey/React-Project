import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../home.png';
import aboutIcon from '../user.png';

class NavBar extends Component {
  render() {
    return (
    <div className="sidenav">
        <ul id="headerButtons">
          <li className="navButton"><Link to=""><img src={homeIcon}></img> Home</Link></li>
            <li className="navButton"><Link to="/about"><img src={aboutIcon}></img> About</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
