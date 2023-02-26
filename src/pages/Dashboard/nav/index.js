import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from "./profileNav";
import Notify from "./notify";
import Bell from "./bell";
function NavDashboard() {
  return (
    <div className="dashboard-sticky-nav">
      <div className="content-left pull-left">
        <Link to="/">eJounal</Link>
      </div>
      <div className="content-right pull-right">
        <div className="search-bar">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search Now"
            />
            <Link to="#">
              <span className="search_btn">
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
        <ProfileNav />
        <Notify />
        <Bell />
      </div>
    </div>
  );
}

export default NavDashboard;
