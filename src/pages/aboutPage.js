import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";

class aboutPage extends Component {
  render() {
    return (
      <div className="wrapper about">
        <div className="container">
          <div className="row">
            <NavBar />

            <div className="col-sm-12">
              <h1>About me</h1>
            </div>

            <div className="col-sm-12">
              <div className="well mt-5">
                <div className="card">
                  <div className="card-body">
                    <p>
                      Web developer / Programmer @ Irish Web Headquarters based
                      in Thurles Co. Tipperary
                    </p>
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

export default aboutPage;
