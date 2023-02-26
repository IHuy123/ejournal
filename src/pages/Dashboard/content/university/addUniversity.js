import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actPutUniversityAsync, actUpdateUniversityAsync } from "../../../../store/user/actions";
import { NotificationManager } from "react-notifications";
function AddUniversity({ formUniversity, setFormUniversity, allUniversity }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  function onFinish(evt) {
    evt.preventDefault();
    if (!formUniversity.name || !formUniversity.email) {
      return;
    }
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    dispatch(
      formUniversity.status !== "UPDATE"
        ? actPutUniversityAsync(formUniversity, allUniversity)
        : actUpdateUniversityAsync(formUniversity, allUniversity)
    ).then((res) => {
      if (res.ok) {
        NotificationManager.success(
          `${formUniversity.status} trường thành công`
        );
        setFormUniversity({
          name: "",
          email: "",
          mailtype: "",
          status: "ADD",
        });
      } else {
        NotificationManager.error(`${formUniversity.status} trường thất bại`);
        setFormUniversity({
          name: "",
          email: "",
          mailtype: "",
          status: "ADD",
        });
      }
      setIsLoading(false);
    });
  }

  function handleChange(key) {
    return (evt) => {
      setFormUniversity({
        ...formUniversity,
        [key]: evt.target.value,
      });
    };
  }

  return (
    <div className="col-lg-6 col-md-6 col-xs-12 padding-right-30">
      <div className="dashboard-list-box">
        <h4 className="gray">Thêm trường học</h4>
        <form onSubmit={onFinish} className="dashboard-list-box-static">
          <div className="my-profile">
            <label>Tên trường học *</label>
            <input
              type="text"
              placeholder="Điền tên trường"
              value={formUniversity.name}
              onChange={handleChange("name")}
            />
            <label>Email trường *</label>
            <input
              type="email"
              placeholder="Điền email trường"
              value={formUniversity.email}
              onChange={handleChange("email")}
            />
            <label>Kiểu Email *</label>
            <input
              type="text"
              placeholder="Điền kiểu email"
              value={formUniversity.mailtype}
              onChange={handleChange("mailtype")}
            />
          </div>
          <button className="button">
            Lưu thay đổi {formUniversity.status !== "UPDATE" ? "":"(update)"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUniversity;
