import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";
import butterCMSIcon from "../images/butterCMSIcon.png";

import Butter from "buttercms";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css"; //include animate.css
import ScrollAnimation from 'react-animate-on-scroll';
const butter = Butter("ba90a6c951de625d6bd4f9da7255f12cfd228ded");

class BlogHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  fetchPosts(page) {
    butter.post.list({ page: page, page_size: 10 }).then(resp => {
      this.setState({
        loaded: true,
        resp: resp.data
      });
    });
  }

  componentWillMount() {
    //let page = this.props.match.page || 1;
    let page = 1;
    this.fetchPosts(page);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loaded: false });
    //  let page = nextProps.match.page || 1;
    let page = 1;
    this.fetchPosts(page);
  }

  render() {
    if (this.state.loaded) {

      var total = -1;
      var blogPage = "blog-page";
      if (this.props.total > 0) {
        total = this.props.total;
        blogPage = "";
      }
      return (
        <div className={'wrapper ' + blogPage}>
          <NavBar />
          <section id="blog">
            <div className="container">
              <div className="row">


                <div className="col-sm-12">
                  <h2 class="pull-left">Recent Posts</h2>
                  <a className={'pull-right view-all ' + blogPage} href="/blog">View All</a>
                </div>

                {
                  this.state.resp.data.map(post => {
                    return (
                      <div className="col-sm-4">
                        <ScrollAnimation animateIn="fadeInLeft" isVisible={true}>
                          <div className="mt-3 project-wrap">
                            <div className="card shadow-lg">
                              <img className="card-img-top" src={post.featured_image}></img>
                              <div className="card-body">
                                <h4 className="card-title">  <Link to={`/post/${post.slug}`}>{post.title}</Link></h4>
                                <div className="author">By Paul Mackey on {post.published}</div>
                                <p className="card-text">{post.summary}</p>


                              </div>
                              <div className="card-footer text-right">

                                <Link to={`/post/${post.slug}`}><button type="button" className="btn btn-info">Read More <span className="underline"></span></button></Link>


                              </div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </div>
                    );
                  })
                }

              </div>
            </div>
          </section>
          <div className="container footer">
            <div className="row">
              <div className="col-sm-12 text-right">
                <small>Blog posts are powered by</small>
                <a href="https://buttercms.com" target="_blank"><img className="butter-icon" src={butterCMSIcon} /></a>
              </div>
            </div>
          </div>
        </div>

      );
    } else {
      return <div></div>;
    }
  }
}

export default BlogHome;
