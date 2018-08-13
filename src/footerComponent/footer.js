import React, { Component } from "react";
import butterCMSIcon from "../images/butterCMSIcon.png";

class footer extends Component {
  render() {
    return (
      <div className="container footer">
        <div className="row">
          <div className="col-sm-12 text-right">
          <small>Blog posts are powered by</small>
          <a href="https://buttercms.com" target="_blank"><img className="butter-icon" src={butterCMSIcon} /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
