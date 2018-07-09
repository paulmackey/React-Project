import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";

class projectPage extends Component {
  render() {
    return (
      <div className="wrapper about">
        <div className="container">
          <div className="row">
            <NavBar />
            <div className="col-sm-12">
              <div className="well  m-5">
                <div className="card">
                  <div className="card-body">
                    <h1>Projects</h1>
                    <p>Sample Projects</p>
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
