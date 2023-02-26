import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";

function ProfileNav() {
  const { currentUser } = useIsLogin();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div
      ref={dropdownRef}
      className={`dropdown ${isActive && "open"}`}
      onClick={onClick}
    >
      <div className="dropdown-toggle">
        <div className="profile-sec">
          <div className="dash-image">
            <img
              src={
                currentUser.avatar === null
                  ? `https://source.unsplash.com/random/?book,post,${currentUser.id}`
                  : currentUser.avatar
              }
              alt=""
            />
          </div>
          <div className="dash-content">
            <h4>{currentUser.username}</h4>
            <span>Quản lý bài</span>
          </div>
        </div>
      </div>
      <ul className="dropdown-menu">
        <li>
          <Link to="#">
            <i className="sl sl-icon-settings" />
            Cài đặt
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="sl sl-icon-user" />
            Hồ sơ
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="sl sl-icon-lock" />
            Đổi mật khẩu
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="sl sl-icon-power" />
            Đăng xuất
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileNav;
