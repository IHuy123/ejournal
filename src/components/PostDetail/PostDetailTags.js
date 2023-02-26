import {
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
  MailFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function PostDetailTags(props) {
  return (
    <>
      <div>
        <div className="follow_us">
          <ul className="social_icons">
            <li className="facebook">
              <Link to="https://www.facebook.com/">
                <FacebookFilled />
              </Link>
            </li>
            <li className="instagram">
              <Link to="https://www.instagram.com/">
                <InstagramFilled />
              </Link>
            </li>
            <li className="mail">
              <Link to="@gmail.com">
                <MailFilled />
              </Link>
            </li>
            <li className="github">
              <Link to="https://github.com">
                <GithubFilled />
              </Link>
            </li>
          </ul>
        </div>
        <div className="tag mar-top-30">
          <div className="widget-tags-main">
            {/* <h5 className="bg-orange">Tags:</h5> */}
            <Link
              to="/"
              style={{
                background:
                  "linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",
              }}
            >
              Tags:
            </Link>
            <Link to="/">Beach</Link>
            <Link to="/">Dress</Link>
            <Link to="/">Food</Link>
            <Link to="/">Fashion</Link>
            <Link to="/">Gadget</Link>
            <Link to="/">Holiday</Link>
            <Link to="/">Nature</Link>
            <Link to="/">Photography</Link>
            <Link to="/">Tips</Link>
            <Link to="/">Travel</Link>
          </div>
        </div>
        <div className="author_box">
          <div className="author_img">
            <img
              src="https://avatars.githubusercontent.com/u/98083474?v=4"
              alt="Author"
            />
          </div>
          <div className="author_bio">
            <h5>Jhon Snow</h5>
            <p>
              Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit
              tempus in semper an neque auctor. Aenean ligula mi, auctor sed
              tempus.Duis a enim vel mauris ultrices. Nullam aliquet velit ac
              velit tempus in semper an neque auctor. Aenean ligula mi, auctor
              sed tempus.
            </p>
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-google-plus" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="comments">
          <div className="comments-wrap">
            <h3 className="single-post_heading blog_heading_border">
              Comments (4)
            </h3>
            <ol className="comments-lists">
              <li className="comment">
                <div className="activity_rounded">
                  <img
                    src="https://avatars.githubusercontent.com/u/98083474?v=4"
                    alt=""
                  />{" "}
                </div>
                <div className="comment-body">
                  <h4 className="text-left">
                    {" "}
                    NIKLOS DELSON &nbsp;&nbsp;
                    <small className="date-posted pull-right">
                      18th Mar, 2018
                    </small>
                  </h4>
                  <p>
                    {" "}
                    Duis a enim vel mauris ultrices. Nullam aliquet velit ac
                    velit tempus in semper neque auctor. Etiam pellentesque,
                    magna eget lobortis placerat, leo leo consequat ante, non
                    iaculis turpis augue ac ligula. Duis a enim vel mauris
                    ultrices, leo.{" "}
                  </p>
                  <Link to="/" className="pull-left btn-blog">
                    Reply
                  </Link>
                  <div className="clearfix" />
                </div>
                <ol className="children">
                  <li className="comment">
                    <div className="activity_rounded">
                      <img
                        src="https://avatars.githubusercontent.com/u/98083474?v=4"
                        alt=""
                      />{" "}
                    </div>
                    <div className="comment-body">
                      <h4 className="text-left">
                        {" "}
                        NIKLOS DELSON &nbsp;&nbsp;
                        <small className="date-posted pull-right">
                          18th Mar, 2018
                        </small>
                      </h4>
                      <p>
                        {" "}
                        Duis a enim vel mauris ultrices. Nullam aliquet velit ac
                        velit tempus in semper neque auctor. Etiam pellentesque,
                        magna eget lobortis placerat, leo leo consequat ante,
                        non iaculis turpis augue ac ligula. Duis a enim vel
                        mauris ultrices, leo.{" "}
                      </p>
                      <Link to="/" className="pull-left btn-blog">
                        Reply
                      </Link>
                      <div className="clearfix" />
                    </div>
                  </li>
                </ol>
              </li>
              <li className="comment">
                <div className="activity_rounded">
                  <img
                    src="https://avatars.githubusercontent.com/u/98083474?v=4"
                    alt=""
                  />{" "}
                </div>
                <div className="comment-body">
                  <h4 className="text-left">
                    {" "}
                    NIKLOS DELSON &nbsp;&nbsp;
                    <small className="date-posted pull-right">
                      18th Mar, 2018
                    </small>
                  </h4>
                  <p>
                    {" "}
                    Duis a enim vel mauris ultrices. Nullam aliquet velit ac
                    velit tempus in semper neque auctor. Etiam pellentesque,
                    magna eget lobortis placerat, leo leo consequat ante, non
                    iaculis turpis augue ac ligula. Duis a enim vel mauris
                    ultrices, leo.{" "}
                  </p>
                  <Link to="/" className="pull-left btn-blog">
                    Reply
                  </Link>
                  <div className="clearfix" />
                </div>
              </li>
            </ol>
            <div className="leave_comment" style={{ paddingBottom: "20px" }}>
              <h3 className="blog_heading_border"> Leave a Comment </h3>
              <form action="#" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        placeholder="Name"
                        className="form-control"
                        type="text"
                        required
                      />{" "}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        placeholder="Email"
                        className="form-control"
                        type="email"
                        required
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <textarea
                      placeholder="Message"
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button type="submit" className="btn-blog">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetailTags;
