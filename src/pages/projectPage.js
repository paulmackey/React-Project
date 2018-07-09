import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";

class projectPage extends Component {
  render() {
    return (
      <div className="wrapper about">
        <div className="container">
          <div className="row">
            <NavBar />
            <h1 className="w-100">Projects</h1>

            <div className="col-sm-4 project-wrap">
              <div className="mt-5">
                <div className="card">
                  <div className="card-body">
                    <p>Sample Project</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 project-wrap">
              <div className="mt-5">
                <div className="card">
                  <div className="card-body">
                    <p>Sample Project</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 project-wrap">
              <div className="mt-5">
                <div className="card">
                  <div className="card-body">
                    <p>Sample Project</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default projectPage;
