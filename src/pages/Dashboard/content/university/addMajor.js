import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actPutMajorAsync, actUpdateMajorAsync } from "../../../../store/user/actions";
import { NotificationManager } from "react-notifications";

function AddMajor({ formMajor, setFormMajor, allMajor }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  function onFinish(evt) {
    evt.preventDefault();
    if (!formMajor.name) {
      return;
    }
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    dispatch(
      formMajor.status !== "UPDATE"
        ? actPutMajorAsync(formMajor, allMajor)
        : actUpdateMajorAsync(formMajor, allMajor)
    ).then((res) => {
      if (res.ok) {
        NotificationManager.success(`${formMajor.status} ngành học thành công`);
        setFormMajor({ name: "", status: "ADD" });
      } else {
        NotificationManager.error(`${formMajor.status} ngành học thất bại`);
        setFormMajor({ name: "", status: "ADD" });
      }
      setIsLoading(false);
    });
  }

  function handleChange(key) {
    return (evt) => {
      setFormMajor({
        ...formMajor,
        [key]: evt.target.value,
      });
    };
  }

  return (
    <div className="col-lg-6 col-md-6 col-xs-12 padding-left-30">
      <div className="dashboard-list-box">
        <h4 className="gray">Thêm ngành học</h4>
        <form onSubmit={onFinish} className="dashboard-list-box-static">
          <div className="my-profile">
            <label>Tên ngành học *</label>
            <input
              type="text"
              placeholder="Điền ngành học"
              value={formMajor.name}
              onChange={handleChange("name")}
            />
          </div>
          <button className="button">
            Lưu thay đổi {formMajor.status !== "UPDATE" ? "" : "(update)"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMajor;
