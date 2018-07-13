import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import { browserHistory } from "react-router";

/** Pages **/ 
import HomePage from "./pages/homePage.js";
import BlogHome from "./pages/blogHome.js";
import About from "./pages/aboutPage.js";
import Projects from "./pages/projectPage.js";

import BlogPost from "./pages/blogPost.js";

/** Components  **/
import NavBar from "./headerComponent/navBar.js";

/** Include styles */
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
  
          <Route path="/blog" component={BlogHome} />
          <Route path="/post/:slug" component={BlogPost} />
        </div>
      </Router>
    );
  }
}
export default App;
