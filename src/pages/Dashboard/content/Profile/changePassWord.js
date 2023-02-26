import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actChangePasswordAsync } from "../../../../store/user/actions";
import { NotificationManager } from "react-notifications";
import EyePass from "../../../../common/EyePass";
function ChangePassWord() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    passwordReg: "",
  });
  function onFinish(evt) {
    evt.preventDefault();
    if (!formData.oldPassword || !formData.newPassword) {
      return;
    }
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    dispatch(actChangePasswordAsync(formData)).then((res) => {
      if (res.ok) {
        NotificationManager.success("đổi mật khẩu thành công");
        setFormData({ oldPassword: "", newPassword: "", passwordReg: "" });
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
    <div className="col-lg-6 col-md-6 col-xs-12 padding-left-30">
      <div className="dashboard-list-box margin-top-0">
        <h4 className="gray">Thay đổi mật khẩu</h4>
        <form onSubmit={onFinish} className="dashboard-list-box-static">
          <div className="my-profile">
            <label className="margin-top-0">Mật khẩu củ *</label>
            <EyePass
              placeholder="Điền mật khẩu củ"
              value={formData.oldPassword}
              onChange={handleChange("oldPassword")}
            />
            <label>Mất khẩu mới *</label>
            <EyePass
              placeholder="Điền mật khẩu mới"
              value={formData.newPassword}
              onChange={handleChange("newPassword")}
            />
            <label>Nhập lại mật khẩu *</label>
            <EyePass
              placeholder="xác nhận mật khẩu mới"
              value={formData.passwordReg}
              onChange={handleChange("passwordReg")}
            />
          </div>
          <button className="button" disabled={isLoading}>
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassWord;
