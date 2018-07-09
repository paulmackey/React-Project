import React, { Component } from 'react';
import homeIcon from '../home.png';
import aboutIcon from '../user.png';
import projects from '../folder.png';
import { Link } from 'react-router-dom';

class topNav extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            <nav className="top-nav">
            <ul id="headerButtons">
              <li className="navButton"><Link to="/"><img src={homeIcon}></img></Link></li>
                <li className="navButton"><Link to="/about"><img src={aboutIcon}></img></Link></li>
                  <li className="navButton"><Link to="/projects"><img src={projects}></img></Link></li>
            </ul>
            </nav>
            </div>
      </div>
      </div>
    )
  }
}

export default topNav;
