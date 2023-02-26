import { Link, useHistory } from "react-router-dom";
import {
  LogoutOutlined
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actLogout } from "../../../store/auth/actions";
function SidebarDashBoard({ ROUTES }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isActive = (path) => {
    if (window.location.pathname === path) return "active";
    else return "false";
  };
    function handleLogout(evt) {
      evt.preventDefault();
      dispatch(actLogout({ history }));
    }
  return (
    <div className="dashboard-nav">
      <div className="dashboard-nav-inner">
        <ul>
          {ROUTES.map((r) => {
            return (
              <li key={r.href} className={`${isActive(r.href)}`}>
                <Link to={r.href}>
                  {r.icon} {r.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="#" onClick={handleLogout}>
              <LogoutOutlined /> Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarDashBoard;
