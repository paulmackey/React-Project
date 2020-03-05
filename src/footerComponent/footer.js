import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <footer className="flex">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-right">
              <a target="_blank" href="https://www.linkedin.com/in/paul-mackey-25543098/">
                <i className="fa fa-2x fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        </footer>
      </div>
    );
  }
}

export default footer;
