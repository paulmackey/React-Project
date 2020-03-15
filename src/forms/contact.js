

import React, { Component } from "react";
class contactForm extends Component {
render() {
return (
<div>
   <div className="row flex">
      <div className="col-sm-6">
         <h3 className="text-center">Get in touch</h3>
         <h6 className="text-center my-4">Project suggestions, feedback or just to say hello..</h6>
         <p className="text-center mailme">
            <a href="pmackey@deveire.com"><i className="fa fa-envelope text-dark"></i>pmackey@deveire.com</a>
         </p>
         <div className="social-icons text-center">
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://www.linkedin.com/in/paul-mackey-25543098/">
            <i className="fa fa-linkedin text-dark" />
            </a>
         </div>
      </div>
      <div className="col-sm-6">
         <form action="/page/success" className="form-horizontal" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden" hidden>
               <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div className="form-group">
               <label>Your Name </label>
               <input className="form-control" type="text" name="name" required/>
            </div>
            <div className="form-group">
               <label>Your Email</label>
               <input className="form-control" type="email" name="email" required/>
            </div>
            <div className="form-group">
               <label>Message</label>
               <textarea className="form-control" name="message" required></textarea>
            </div>
            <div className="form-group">
               <button className="btn btn-info" type="submit">Send <span className="underline"></span></button>
            </div>
         </form>
      </div>
   </div>
</div>
);
}
}
export default contactForm;
