import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';
import Footer from "./footerComponent/footer.js";

/** Components  **/
import NavBar from "./headerComponent/navBar.js";

/** Include styles */
import "./App.css";

function Loading({ error }) {
    return <div className="loading">Loading&#8230;</div>;
}

const HomePage = Loadable({
  loader: () => import('./pages/homePage.js'),
  loading: Loading
});

const About = Loadable({
  loader: () => import('./pages/aboutPage.js'),
  loading: Loading
});

const Projects = Loadable({
  loader: () => import('./pages/projectPage.js'),
  loading: Loading
});

const FormSuccess = Loadable({
  loader: () => import('./pages/success.js'),
  loading: Loading
});

const BlogHome = Loadable({
  loader: () => import('./pages/blogHome.js'),
  loading: Loading
});

const BlogPost = Loadable({
  loader: () => import('./pages/blogPost.js'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
<Route path="/success" component={FormSuccess} />
          <Route path="/blog" component={BlogHome} />
          <Route path="/post/:slug" component={BlogPost} />
           <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
