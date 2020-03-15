import React, { Component } from "react";
import TopNav from "../headerComponent/topNav.js";
import data from "../data/projects.json";
import { Animated } from "react-animated-css"; //include animate.css
import ScrollAnimation from 'react-animate-on-scroll';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class projectPage extends Component {

  render() {
    var total = -1;
    var projectPage = "project-page";
    if (this.props.total > 0) {
      total = this.props.total;
      projectPage = "";
    }

    return (
      <div className="wrapper about_">
        <TopNav />
        <section id="projects">
        <div className="container">
          <div className="row">

            <div className="col-sm-12">
              <h2 class="pull-left">Projects</h2>
              <a className={'pull-right view-all ' + projectPage} href="/projects">View All</a>

            </div>
            {

              data.slice(0, total).map(function (data) {
                return (
                  <div className="col-sm-4">
                   <ScrollAnimation animateIn="fadeInLeft" isVisible={true}>
                      <div className="mt-3 project-wrap">
                        <div className="card shadow-lg">
                          {<div className={'ribbon ribbon-top-right orange'}>
                        <span className='orange'>{data.status}</span>
                        </div>}
                          <img className="card-img-top py-5" src={data.thumbnail}></img>
                          <div className="card-body">
                            <h3 className="card-title">{data.title}</h3>
                            <p className="card-text">{data.description}</p>

                          </div>
                          <div className="card-footer text-right">
                          <AwesomeButton type="primary" target="_blank" href={data.url}>Visit Site <span className="underline"></span></AwesomeButton>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                );
              })}

          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default projectPage;
