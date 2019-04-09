import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";
class formSuccess extends Component {
render() {
return (
<div className="wrapper about">
   <NavBar />
   <div className="container">
      <div className="row">
         <div className="col-sm-12">
            <h1>Success</h1>
            <div className="alert alert-success">Thank you for your submission</div>
         </div>
      </div>
   </div>
</div>
);
}
}
export default formSuccess;
