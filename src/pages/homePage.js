import React, { Component } from "react";
import SimpleSlider from "../headerComponent/slider.js";
import ProjectPage from "../pages/projectPage";
import BlogPage from "../pages/blogHome";
import ContactForm from "../forms/contact";

class HomePage extends Component {

  render() {
    return (
      <div className="home">

        <SimpleSlider />

        <ProjectPage total="3" title="Projects"/>

<ContactForm/>

        <BlogPage total="3"/>


      </div>
    );
  }
}

export default HomePage;
