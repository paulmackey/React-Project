import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../home.png';
import aboutIcon from '../user.png';
import logo from '../profiler.jpg';
import projects from '../folder.png';
import { pushRotate as Menu } from 'react-burger-menu'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: true
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (

      <Menu noOverlay pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
        <div className="sidenav">

            <ul id="headerButtons">
              <li className="navButton"><Link to="" onClick={() => this.closeMenu()}>  <img className="img-fluid img-profile rounded-circle mx-auto mb-2 logo" src={logo}></img></Link></li>
                <li className="navButton"><Link to="/about" onClick={() => this.closeMenu()}><img src={aboutIcon}></img> About Me</Link></li>
                  <li className="navButton"><Link to="/projects" onClick={() => this.closeMenu()}><img src={projects}></img> Projects</Link></li>
            </ul>

        </div>
      </Menu>

    )
  }
}

export default NavBar;
