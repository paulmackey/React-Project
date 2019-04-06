import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";

class aboutPage extends Component {
  render() {
    return (

<div className="wrapper about">
	<NavBar />
	<div className="container">
		<div className="row">
			<div className="col-sm-12">
				<h1>About me</h1>
			</div>
			<div className="col-sm-12">
				<div className="well mt-2">
					<div className="card p-3">
						<div className="mainDetails">
							<div id="name" className="pull-left">
								<h3 className="">Paul Mackey</h3>
								<h4 className="">Software Engineer</h4>
							</div>
							<div id="contactDetails" className="pull-right">
								<ul>
									<li>e:
										<a href="mailto:mackey.paul.23@gmail.com" target="_blank"> mackey.paul.23@gmail.com</a>
									</li>
									<li>m: 0870662917</li>
								</ul>
							</div>
							<div className="clear"></div>
						</div>
						<div id="mainArea" className="">
							<section>
								<article>
									<div className="row">
										<div className="col-sm-3">
											<div className="sectionTitle">
												<h3>Personal Profile</h3>
											</div>
										</div>
										<div className="col-sm-9">
											<div className="sectionContent">
												<p>A competent and committed web developer. Eager to learn, easy going by nature and able to get along with both work colleagues and senior managers.</p>
											</div>
										</div>
									</div>
								</article>
								<div className="clear"></div>
							</section>
							<section>
								<div className="row">
									<div className="col-sm-3">
										<div className="sectionTitle">
											<h3>Employment History</h3>
										</div>
									</div>
									<div className="col-sm-9">
										<div className="sectionContent">
											<article>
												<h4>Software Engineer at DevEire</h4>
												<p className="subDetails">April 2019 - Present</p>
												<p>Working as part of a team designing and developing web based applications in an agile environment</p>
											</article>
											<article>
												<h4>Web Developer / Programmer at Irish Web Headquarters</h4>
												<p className="subDetails">August 2015 - April 2019</p>
												<p>Working on a wide range of web development projects to ensure the project meets the clients requirements. </p>
												<ul className="keySkills">
													<li>Coding using HTML, PHP, JavaScript, jQuery, WordPress API</li>
													<li>Working on back end technology – MySQL</li>
													<li>Developing custom Payment systems in Stripe, Realex, PayPal & Elavon</li>
												</ul>
											</article>
											<article>
												<h4>Junior Software Developer at Limerick Institute of Technology</h4>
												<p className="subDetails">June 2015 - August 2015</p>
												<p>Working with a team of software developers & energy engineers to develop an online retrofitting guide for the A2PBEER European Research Project</p>
												<ul className="keySkills">
													<li>Testing functionality, identifying bug fixes and errors</li>
													<li>Coding using HTML, PHP, JavaScript, jQuery</li>
													<li>Working on back end technology - MySQL</li>
													<li>Worked with the team lead to understand and clarify client requirements</li>
													<li>Participated in weekly reporting meetings to track status of work</li>
												</ul>
											</article>
											<article>
												<h4>Junior Software Developer at Carlow Kilkenny Energy Agency</h4>
												<p className="subDetails">June 2015 - August 2015</p>
												<p>Sole developer working with business units in order to develop an energy monitoring system which gathers data from portable meters, also maintaining company websites and working on change requests</p>
												<ul className="keySkills">
													<li>Development of an energy monitoring system</li>
													<li>Coding using Java & JavaFX</li>
													<li>Working with the company manager in order to understand and clarify requirements</li>
													<li>Participated in weekly meetings to identify and review business requirements</li>
													<li>Maintaining company websites</li>
													<li>Worked on change requests</li>
													<li>Functional testing, identifying bug fixes and errors</li>
													<li>Participated in weekly reporting meetings to identify work status and potential issues affecting delivery</li>
												</ul>
											</article>
										</div>
									</div>
								</div>
								<div className="clear"></div>
							</section>
							<section>
								<div className="row">
									<div className="col-sm-3">
										<div className="sectionTitle">
											<h3>Skills & Attributes</h3>
										</div>
									</div>
									<div className="col-sm-9">
										<div className="sectionContent">
											<ul className="keySkills">
												<li>Proven ability to code and build web sites</li>
												<li>Proficient in database design & implementation</li>
												<li>Ability to work in a fast paced environment & complete projects to schedule</li>
												<li>Can multi-task effectively, pay attention to detail and meet tight deadlines</li>
												<li>A strong sense of initiative, self-motivated & work well under pressure</li>
												<li>Ability to explain technical issues clearly to non-technical colleagues</li>
												<li>Flexible and adaptable in my approach to work, enjoying new challenges</li>
												<li>Hands on experience in the WordPress API, PHP, JavaScript, jQuery, MySql</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="clear"></div>
							</section>
							<section>
								<div className="row">
									<div className="col-sm-3">
										<div className="sectionTitle">
											<h3>Education</h3>
										</div>
									</div>
									<div className="col-sm-9">
										<div className="sectionContent">
											<article>
												<h4>BSc (Honours) in Computing (Level 8) in Smart Energy Systems from LIT</h4>
												<p className="subDetails">First Class Honours</p>
											</article>
											<article>
												<h4>Fetac Level 5 in Information Technology from CTI CLonmel</h4>
												<p className="subDetails">Honours</p>
											</article>
										</div>
									</div>
								</div>
								<div className="clear"></div>
							</section>
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
