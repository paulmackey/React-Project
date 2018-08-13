import React, { Component } from "react";
import SimpleSlider from "../headerComponent/slider.js";
import ProjectPage from "../pages/projectPage";
class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <SimpleSlider />

        <ProjectPage total="3" title="Projects"/>
      </div>
    );
  }
}

export default HomePage;
