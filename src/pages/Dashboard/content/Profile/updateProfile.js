import {
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { actChangePasswordAsync } from "../../../../store/user/actions";
import { NotificationManager } from "react-notifications";

function UpdateProfile() {
  const dispatch = useDispatch();
  const { currentUser } = useIsLogin();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: currentUser.fullname,
    email: currentUser.email,
    phone: currentUser.phone,
  });
  function onFinish(evt) {
    evt.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    dispatch(actChangePasswordAsync(formData)).then((res) => {
      if (res.ok) {
        NotificationManager.success("đổi mật khẩu thành công");
        setFormData({
          oldPassword: "",
          newPassword: "",
          passwordReg: "",
        });
      } else {
        NotificationManager.error("đổi mật khẩu thất bại");
      }
      setIsLoading(false);
    });
  }

  function handleChange(key) {
    return (evt) => {
      setFormData({
        ...formData,
        [key]: evt.target.value,
      });
    };
  }
  return (
    <div className="col-lg-6 col-md-6 col-xs-12 padding-right-30">
      <div className="dashboard-list-box">
        <h4 className="gray">Chi tiết hồ sơ</h4>
        <form onSubmit={onFinish} className="dashboard-list-box-static">
          <div className="edit-profile-photo">
            <img
              src={
                currentUser.avatar === null
                  ? `https://source.unsplash.com/random/?book,post,${currentUser.id}`
                  : currentUser.avatar
              }
              alt=""
            />
            <div className="change-photo-btn">
              <div className="photoUpload">
                <span>
                  <PlusCircleOutlined /> Tải ảnh lên
                </span>
                <input type="file" className="upload" />
              </div>
            </div>
          </div>
          {/* Details */}
          <div className="my-profile">
            <label>Tên của bạn *</label>
            <input
              type="text"
              placeholder="Điền tên đầy đủ"
              value={formData.fullname}
              onChange={handleChange("fullname")}
            />
            <label>Số điện thoại *</label>
            <input
              type="text"
              placeholder="Điền số  điện thoại"
              value={formData.phone}
              onChange={handleChange("phone")}
            />
            <label>Địa chỉ Email *</label>
            <input
              type="email"
              placeholder="Điền địa chỉ email"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <label>Tiểu sử *</label>
            <textarea
              name="notes"
              id="notes"
              cols={30}
              rows={10}
              defaultValue={
                "Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper"
              }
            />
          </div>
          <button className="button">Lưu thay đổi</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
