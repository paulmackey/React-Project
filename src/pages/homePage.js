import React, { Component } from 'react';
import logo from '../profiler.jpg';

class HomePage extends Component {
  render() {
    return (
<div className="home">
      <div className="wrapper m-5">

      <h1 className="mt-3">Paul Mackey</h1>
      <p>Web Developer</p>
      <p className="">Irish Web Headquarters</p>
      <div className="social-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/paulmackey"><i className="fa fa-github"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paul-mackey-25543098/" ><i className="fa fa-linkedin"></i></a>
</div>
      <p className="text-emoji">\ (•◡•) /</p>
      </div>
      </div>
    )
  }
}

export default HomePage;
