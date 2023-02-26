import React, { useState } from "react";
import {
  GlobalOutlined,
  LineChartOutlined,
  TeamOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actGetAllAsync } from "../../../store/user/actions";
import PaginationRe from "../../../common/Paging";
function ContentDashboard() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.User.allUser);
  const [page, setPage] = useState(0);
  useEffect(
    () => {
      dispatch(actGetAllAsync());
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div className="dashboard-content">
      <div className="row">
        {/* Item */}
        <div className="col-lg-3 col-md-6 col-xs-6">
          <div className="dashboard-stat color-1">
            <div className="dashboard-stat-content">
              <h4>6</h4>
              <span>Danh sách hoạt động</span>
            </div>
            <div className="dashboard-stat-icon">
              <GlobalOutlined />
            </div>
            <div className="dashboard-stat-item">
              <p>Ai đó đã đánh dấu danh sách của bạn!</p>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="col-lg-3 col-md-6 col-xs-6">
          <div className="dashboard-stat color-2">
            <div className="dashboard-stat-content">
              <h4>726</h4>
              <span>Tổng số bài viết</span>
            </div>
            <div className="dashboard-stat-icon">
              <LineChartOutlined />
            </div>
            <div className="dashboard-stat-item">
              <p>Ai đó đã đánh dấu danh sách của bạn!</p>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="col-lg-3 col-md-6 col-xs-6">
          <div className="dashboard-stat color-3">
            <div className="dashboard-stat-content">
              <h4>95</h4>
              <span>Tổng số đánh giá</span>
            </div>
            <div className="dashboard-stat-icon">
              <TeamOutlined />
            </div>
            <div className="dashboard-stat-item">
              <p>Ai đó đã đánh dấu danh sách của bạn!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-6">
          <div className="dashboard-stat color-4">
            <div className="dashboard-stat-content">
              <h4>126</h4>
              <span>Dấu trang</span>
            </div>
            <div className="dashboard-stat-icon">
              <HeartOutlined />
            </div>
            <div className="dashboard-stat-item">
              <p>Ai đó đã đánh dấu danh sách của bạn!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12 traffic">
          <div className="dashboard-list-box">
            <h4 className="gray">Bài viết gần đây</h4>
            <div className="table-box">
              <table className="basic-table">
                <thead>
                  <tr>
                    <th>Ngày</th>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Không có bài viết</th>
                    <th>Xem</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01/01/2017</td>
                    <td className="t-id">C001</td>
                    <td>Dubai</td>
                    <td>5</td>
                    <td>245</td>
                  </tr>
                  <tr>
                    <td>01/01/2017</td>
                    <td className="t-id">C081</td>
                    <td>Grece - Zakynthos</td>
                    <td>5</td>
                    <td>245</td>
                  </tr>
                  <tr>
                    <td>01/01/2017</td>
                    <td className="t-id">C001</td>
                    <td>Bulgary - Sunny Beach</td>
                    <td>5</td>
                    <td>245</td>
                  </tr>
                  <tr>
                    <td>01/01/2017</td>
                    <td className="t-id">C001</td>
                    <td>France - Paris</td>
                    <td>5</td>
                    <td>245</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-12 col-xs-12 traffic">
          <div className="dashboard-list-box with-icons margin-top-20">
            <h4 className="gray">Các hoạt động gần đây</h4>
            <ul>
              <li>
                <i className="list-box-icon sl sl-icon-layers" /> Your listing
                <strong>
                  <Link to="#">Hotel Govendor</Link>
                </strong>{" "}
                has been approved!
                <Link to="#" className="close-list-item">
                  <i className="fa fa-close" />
                </Link>
              </li>
              <li>
                <i className="list-box-icon sl sl-icon-star" /> Kathy Brown left
                a review
                <div className="numerical-rating high" data-rating={5.0} />
                on{" "}
                <strong>
                  <Link to="#">Burger House</Link>
                </strong>
                <Link to="#" className="close-list-item">
                  <i className="fa fa-close" />
                </Link>
              </li>
              <li>
                <i className="list-box-icon sl sl-icon-heart" /> Someone
                bookmarked your
                <strong>
                  <Link to="#">Burger House</Link>
                </strong>{" "}
                listing!
                <Link to="#" className="close-list-item">
                  <i className="fa fa-close" />
                </Link>
              </li>
              <li>
                <i className="list-box-icon sl sl-icon-star" /> Kathy Brown left
                a review
                <div className="numerical-rating mid" data-rating={3.0} />
                on{" "}
                <strong>
                  <Link to="#">Airport</Link>
                </strong>
                <Link to="#" className="close-list-item">
                  <i className="fa fa-close" />
                </Link>
              </li>
              <li>
                <i className="list-box-icon sl sl-icon-heart" /> Someone
                bookmarked your
                <strong>
                  <Link to="#">Burger House</Link>
                </strong>{" "}
                listing!
                <Link to="#" className="close-list-item">
                  <i className="fa fa-close" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-xs-12 traffic">
          <div className="dashboard-list-box margin-top-20 user-list">
            <h4 className="gray">Danh sách người dùng</h4>
            <ul>
              {allUser && (
                <>
                  {allUser.slice(page, page + 5).map((user, index) => (
                    <li key={index}>
                      <div className="user-list-item">
                        <div className="user-list-image">
                          <img
                            src={
                              user.avatar === null
                                ? `https://source.unsplash.com/random/?book,post,${user.id}`
                                : user.avatar
                            }
                            alt=""
                          />
                        </div>
                        <div className="user-list-content">
                          <h4>{user.fullname}</h4>
                          <span>{user.status}</span>
                        </div>
                        <div className="user-btns">
                          <Link to="#" className="button">
                            View
                          </Link>
                          <Link to="#" className="button">
                            Edit
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                  <PaginationRe
                    page={page}
                    setPage={setPage}
                    count={5}
                    totalPages={allUser.length}
                  />
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard;
