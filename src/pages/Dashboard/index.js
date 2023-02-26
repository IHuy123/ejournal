import "antd/dist/antd.css";
import { Link } from "react-router-dom";
// import { useAuthenticated } from "../../hooks/useAuthenticated";
import {
  UserOutlined,
  SettingOutlined,
  PlusCircleOutlined,
  AppstoreOutlined,
  BarsOutlined,
  ReadOutlined
} from "@ant-design/icons";
import "./dashboard.css";
// import DashboardLayout from "./DashboardLayout";
import NavDashboard from "./nav";
import SidebarDashBoard from "./sideBarDashBoard";
import ContentDashboard from "./content";
import DashboardLayout from "./DashboardLayout";
import Profile from "./content/Profile";
import AddPost from "./content/addPost";
import ListingPost from "./content/listingPost";
import University from "./content/university";
import { NotificationContainer } from 'react-notifications';
import { useIsLogin } from "../../hooks/useIsLogin";
import ListPost from "./content/listPost";

export default function Dashboard() {
  // useAuthenticated();
  const { admin } = useIsLogin();
  const ROUTE = [
    {
      title: "bảng điều khiển",
      icon: <SettingOutlined />,
      href: "/dashboard",
      exact: true,
      Component: ContentDashboard,
    },
    {
      title: "Chỉnh sửa hồ sơ",
      icon: <UserOutlined />,
      href: "/dashboard/profile",
      exact: true,
      Component: Profile,
    },
    {
      title: "Thêm bài đăng",
      icon: <PlusCircleOutlined />,
      href: "/dashboard/addPost",
      exact: false,
      Component: AddPost,
    },
    {
      title: "danh sách bài đăng",
      icon: <AppstoreOutlined />,
      href: "/dashboard/postListing",
      exact: false,
      role: "ADMIN",
      Component: ListingPost,
    },
    {
      title: "Danh sách bài",
      icon: <BarsOutlined />,
      href: "/dashboard/postList",
      exact: false,
      Component: ListPost,
    },
    {
      title: "Trường Học",
      icon: <ReadOutlined />,
      href: "/dashboard/university",
      exact: false,
      role: "ADMIN",
      Component: University,
    },
  ];
  const ROUTES =
    admin !== "ADMIN" ? ROUTE.filter((item) => item.role !== "ADMIN") : ROUTE;
  return (
    <div className="dashboard">
      <Link to="#" className="dashboard-responsive-nav-trigger">
        <i className="fa fa-reorder" /> Điều hướng bảng điều khiển
      </Link>
      <NavDashboard />
      <SidebarDashBoard ROUTES={ROUTES} />
      <DashboardLayout ROUTES={ROUTES} />
      <NotificationContainer />
    </div>
  );
}
