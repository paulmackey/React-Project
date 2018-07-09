import React, {
  Component
} from 'react';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router';


import HomePage from './pages/homePage.js';
import About from './pages/aboutPage.js';
import NavBar from './headerComponent/navBar.js';

import Footer from './footerComponent/footer.js';
import Projects from './pages/projectPage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id = "app">
      <Router>
        <div>
          <NavBar />

                      <Route name="home" exact path="/" component={HomePage} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
