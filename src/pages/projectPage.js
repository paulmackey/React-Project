import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";
import data from "../data/projects.json";
import {Animated} from "react-animated-css"; //include animate.css

class projectPage extends Component {

  render() {
    return (
      <div className="wrapper about">
        <div className="container">
          <div className="row">
            <NavBar />
            <div className="col-sm-12">
              <h1 className="w-100">Projects</h1>
            </div>
            {

              data.map(function(data) {

              return (
                <div className="col-sm-4">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                  <div className="mt-5 project-wrap">
                    <div className="card p-3 shadow-lg">
                    <div className={'ribbon ribbon-top-right ' + data.colour}>
                        <span className={data.colour}>{data.status} </span>
                        </div>
                      <img className="card-img-top py-5" src={ data.thumbnail }></img>
                      <div className="card-body">
                        <h3 className="card-title">{data.title}</h3>
                        <p className="card-text">{data.description}</p>
                        <p className="text-right"><a href={data.url}>View <i className="fa fa-link"></i></a></p>
                      </div>
                    </div>
                  </div>
                  </Animated>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default projectPage;
