import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import {
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
  MailFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="col-md-3 width30" style={{ width: "30%" }}>
      <div className="sidebar">
        <div className="widget widget-author text-center">
          <div className="widget-image">
            <img
              src="https://avatars.githubusercontent.com/u/98083474?v=4"
              alt="..."
            />
          </div>
          <div className="widget-author-content">
            <div className="widget-author mar-bottom-15">
              <h3 className="mar-bottom-5">Blork Lewson</h3>
              <span className="author-profession">Author Blogger</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="follow_us mar-bottom-15">
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
                  <Link to="1@gmail.com">
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
            {/* <div className="widget-author-signature">
                      <img src="images/blog/signature.png" alt="..." />
                    </div> */}
          </div>
        </div>
        <div className="widget widget-category">
          <div className="widget-content">
            <div className="widget-title">
              <h3 className="white">Thể Loại</h3>
            </div>
            <div className="widget-category-main">
              <ul className="widget-category-list">
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Cách sống</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Sức khỏe</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Bài báo</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Du lịch</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Chưa được phân loại</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Phổ biến</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Thế giới</Link>
                </li>
                <li>
                  <DoubleRightOutlined />
                  <Link to="/">Phong cách</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="widget widget-popular-post">
          <div className="widget-content">
            <div className="widget-title">
              <h3 className="white">Bài viết phổ biến</h3>
            </div>
            <div className="widget-popular-post-main">
              <div className="widget-posts">
                <div className="post-thumb">
                  <img
                    src="https://media.istockphoto.com/id/1136667774/vector/health-insurance-vector-illustration-medical-protection-medical-insurance-concepts-flat.jpg?s=170667a&w=0&k=20&c=DesJyS8SKr7rXWrdd-Jadljle2XcLEMeTjyij0s0nms="
                    alt="....."
                  />
                </div>
                <div className="post-title">
                  <div className="widget-cats">
                    <Link to="/">Technology</Link>
                    <Link to="/">Travel</Link>
                  </div>
                  <h4>
                    <Link to="/">
                      That Evening At Bali Beach Was Wounderful
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="widget-posts">
                <div className="post-thumb">
                  <img
                    src="https://media.istockphoto.com/id/589567718/vector/form-of-health-insurance.jpg?s=612x612&w=0&k=20&c=OR9_28ZuTnKF4KJyZ9tJWFHO8ruOegun1qoL4-Cn6HE="
                    alt="....."
                  />
                </div>
                <div className="post-title">
                  <div className="widget-cats">
                    <Link to="/">Technology</Link>
                    <Link to="/">Travel</Link>
                  </div>
                  <h4>
                    <Link to="/">
                      5 Reasons Why Ladies Prefer To Have red Hair
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="widget-posts">
                <div className="post-thumb">
                  <img
                    src="https://media.istockphoto.com/id/1159457428/vector/health-insurance-claim-form.jpg?s=170667a&w=0&k=20&c=Y6lvdoLKBt29KRo1__mDOmUhZTkdyUQPkb_HLEzoqZA="
                    alt="....."
                  />
                </div>
                <div className="post-title">
                  <div className="widget-cats">
                    <Link to="/">Technology</Link>
                    <Link to="/">Travel</Link>
                  </div>
                  <h4>
                    <Link to="/">
                      This post has just gone viral with many views
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* widget tags */}
        <div className="widget widget-tags">
          <div className="widget-content">
            <div className="widget-title">
              <h3 className="white">Thẻ xu hướng</h3>
            </div>
            <div className="widget-tags-main">
              <Link to="/">Bãi biển</Link>
              <Link to="/">Đầm</Link>
              <Link to="/">Đồ ăn</Link>
              <Link to="/">Thời trang</Link>
              <Link to="/">Tiện ích</Link>
              <Link to="/">Ngày lễ</Link>
              <Link to="/">Thiên nhiên</Link>
              <Link to="/">Nhiếp ảnh</Link>
              <Link to="/">Lời khuyên</Link>
              <Link to="/">Du lịch</Link>
            </div>
          </div>
        </div>
      </div>
      {/* widget popular post */}
      <div className="widget widget-popular-post">
        <div className="widget-content">
          <div className="widget-title">
            <h3 className="white">Trending Posts</h3>
          </div>
          <div className="widget-popular-post-main">
            <div className="widget-posts">
              <div className="post-thumb">
                <img
                  src="https://media.istockphoto.com/id/682211990/vector/man-at-the-table-fills-in-the-form-of-health-insurance-healthcare-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=uCLWKBCI8iG3YMXXBePN59Q7QF8wC4rwWPP63Sn3lM8="
                  alt="....."
                />
              </div>
              <div className="post-title">
                <div className="widget-cats">
                  <Link to="/">Technology</Link>
                  <Link to="/">Travel</Link>
                </div>
                <h4>
                  <Link to="/">
                    Is It Safe to Have These Things Listening to Us?
                  </Link>
                </h4>
              </div>
            </div>
            <div className="widget-posts">
              <div className="post-thumb">
                <img
                  src="https://media.istockphoto.com/id/1136667774/vector/health-insurance-vector-illustration-medical-protection-medical-insurance-concepts-flat.jpg?s=170667a&w=0&k=20&c=DesJyS8SKr7rXWrdd-Jadljle2XcLEMeTjyij0s0nms="
                  alt="....."
                />
              </div>
              <div className="post-title">
                <div className="widget-cats">
                  <Link to="/">Technology</Link>
                  <Link to="/">Travel</Link>
                </div>
                <h4>
                  <Link to="/">8 Most Awesome Gadgets For 2019</Link>
                </h4>
              </div>
            </div>
            <div className="widget-posts">
              <div className="post-thumb">
                <img
                  src="https://media.istockphoto.com/id/589567718/vector/form-of-health-insurance.jpg?s=612x612&w=0&k=20&c=OR9_28ZuTnKF4KJyZ9tJWFHO8ruOegun1qoL4-Cn6HE="
                  alt="....."
                />
              </div>
              <div className="post-title">
                <div className="widget-cats">
                  <Link to="/">Technology</Link>
                  <Link to="/">Travel</Link>
                </div>
                <h4>
                  <Link to="/">
                    Top 15 Social Network App You Need To Travel
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget widget-advertisement">
        <div className="widget-content">
          <div className="widget-title">
            <h3 className="white">Advertisement</h3>
          </div>
          <div className="widget-ads-image text-center">
            <img src="images/blog-listing/blog_07.jpg" alt="ads" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
