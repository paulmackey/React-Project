import React, { Component } from "react";
import Butter from "buttercms";
import { Helmet } from "react-helmet";
import NavBar from "../headerComponent/topNav.js";

const butter = Butter("ba90a6c951de625d6bd4f9da7255f12cfd228ded");

class BlogPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    console.log(this.props);
    let slug = this.props.match.params.slug;
    butter.post.retrieve(slug).then(resp => {
      this.setState({
        loaded: true,
        post: resp.data.data
      });
    });
  }

  render() {

    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div className="wrapper about">
            <NavBar />
          <div className="container">
            <div className="row">


              <div className="col-sm-12">
                <h1>{post.seo_title}</h1>
              </div>

              <div className="col-sm-12">
                <div className="well mt-5">
                  <div className="card">
                    <div className="card-body">
                      <p>
                        <div>
                          <Helmet>
                            <meta
                              name="description"
                              content={post.meta_description}
                            />
                            <meta
                              name="og:image"
                              content={post.featured_image}
                            />
                          </Helmet>

                          <div
                            dangerouslySetInnerHTML={{ __html: post.body }}
                          />
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default BlogPost;
