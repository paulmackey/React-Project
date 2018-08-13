import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";
import data from "../data/projects.json";
import {Animated} from "react-animated-css"; //include animate.css

class projectPage extends Component {

  render() {
    var total=-1;
    if (this.props.total>0) {
total = this.props.total;
    }
    
    return (
      <div className="wrapper about">
      <NavBar />
        <div className="container">
          <div className="row">
            
            <div className="col-sm-12">
              <h1 className="w-100">Projects I've worked on ... </h1>
            </div>
            {


              data.slice(0, total).map(function(data) {

              return (
                <div className="col-sm-4">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                  <div className="mt-5 project-wrap">
                    <div className="card shadow-lg">
                    {/* <div className={'ribbon ribbon-top-right ' + data.colour}>
                        <span className={data.colour}>{data.status} </span>
                        </div> */}
                      <img className="card-img-top py-5" src={ data.thumbnail }></img>
                      <div className="card-body">
                        <h3 className="card-title">{data.title}</h3>
                        <p className="card-text">{data.description}</p>

                      </div>
                      <div className="card-footer text-right">
                  <a className="btn btn-info" href={data.url}>Visit Site</a>
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
