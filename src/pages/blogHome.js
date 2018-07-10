import React, { Component } from "react";
import NavBar from "../headerComponent/topNav.js";
import Butter from "buttercms";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css"; //include animate.css

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
    let page = this.props.match.page || 1;
    this.fetchPosts(page);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loaded: false });
    let page = nextProps.match.page || 1;
    this.fetchPosts(page);
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="wrapper about">
          <NavBar />
          <div className="container">
            <div className="row">

              <div className="col-sm-12">
                <h1 className="w-100">Blog Posts</h1>
              </div>

                  {
                    this.state.resp.data.map(post => {
                    return (
                      <div className="col-sm-4">
                      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <div className="mt-5 project-wrap">
                          <div className="card p-3 shadow-lg">
                            <img className="card-img-top" src={ post.featured_image }></img>
                            <div className="card-body">
                              <h4 className="card-title">  <Link to={`/post/${post.slug}`}>{post.title}</Link></h4>
                              <div className="author">By Paul Mackey on {post.published}</div>
                              <p className="card-text">{post.summary}</p>


                            </div>
                            <div className="card-footer text-right">

                            <Link to={`/post/${post.slug}`}><button type="button" className="btn btn-info">Read More</button></Link>


                          </div>
                          </div>
                        </div>
                        </Animated>
                      </div>
                    );
                  })
                }

            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default BlogHome;
