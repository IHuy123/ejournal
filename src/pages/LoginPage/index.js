import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actLoginAsync, actRegisterAsync } from "../../store/auth/actions";
import { Trans } from "@lingui/macro";
// import { t } from "@lingui/macro";
import { useNotAuthenticated } from "../../hooks/useNotAuthenticated";
import { NotificationManager } from "react-notifications";
import { NotificationContainer } from "react-notifications";
export default function LoginPage() {
  const isLogin = useNotAuthenticated();

  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    username: "",
    password: "",
    usernameRe: "",
    passwordRe: "",
    passwordReg: "",
  });

  function handleSubmitLogin(evt) {
    evt.preventDefault();

    if (!formData.username || !formData.password) {
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);
    dispatch(actLoginAsync(formData)).then((res) => {
      if (res.ok) {
        history.push("/");
      } else {
         NotificationManager.error("Đăng nhập thất bại");
      }

      setLoading(false);
    });
  }
  function handleSubmitRegister(evt) {
    evt.preventDefault();
    if (!formData.usernameRe || !formData.passwordRe) {
      return NotificationManager.error("Đăng nhậps thất bại");
    }

    if (loading) {
      return;
    }

    setLoading(true);
    dispatch(actRegisterAsync(formData)).then((res) => {
      if (res.ok) {
        // history.push("/");
       NotificationManager.success("Đăng kí thành công");
      } else {
        NotificationManager.error("Đăng kí thất bại");
      }
      setLoading(false);
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

  if (isLogin) {
    return null;
  }

  return (
    <>
      <section className="breadcrumb-outer text-center bg-red">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Đăng nhập / Đăng ký</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Đăng nhập / Đăng ký
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="login-form">
                <form onSubmit={handleSubmitLogin}>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-title">
                        <h2>
                          <Trans>Đăng nhập</Trans>
                        </h2>
                        <p>Đăng ký nếu bạn không có tài khoản.</p>
                      </div>
                    </div>
                    <div className="form-group col-xs-12">
                      <label>{<Trans>Tên đăng nhập</Trans>}</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name1"
                        placeholder="Điền tên đăng nhập"
                        value={formData.username}
                        onChange={handleChange("username")}
                      />
                    </div>
                    <div className="form-group col-xs-12">
                      <label>Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        id="email1"
                        placeholder="Nhập mật khẩu chính xác"
                        value={formData.password}
                        onChange={handleChange("password")}
                      />
                    </div>
                    <div className="col-xs-12">
                      <div className="comment-btn mar-bottom-20">
                        <button className="btn-blog" disabled={loading}>
                          Đăng nhập
                        </button>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="checkbox-outer pull-left">
                        <input
                          type="checkbox"
                          name="vehicle2"
                          defaultValue="Car"
                        />{" "}
                        Nhớ tôi?
                      </div>
                      <div className="login-accounts pull-right">
                        <a href="forgot-password.html" className="forgotpw">
                          Quên mật khẩu?
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="register-form">
                <form onSubmit={handleSubmitRegister}>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-title">
                        <h2>Đăng ký</h2>
                        <p>Nhập chi tiết của bạn để trở thành thành viên.</p>
                      </div>
                    </div>
                    <div className="form-group col-xs-12">
                      <label>Tên đăng nhập:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="usernameRe"
                        placeholder="Nhập tên đăng nhập"
                        value={formData.usernameRe}
                        onChange={handleChange("usernameRe")}
                      />
                    </div>
                    <div className="form-group col-xs-12">
                      <label>Họ và Tên:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Nhập tên đầy đủ"
                        value={formData.name}
                        onChange={handleChange("name")}
                      />
                    </div>
                    <div className="form-group col-xs-12">
                      <label>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="abc@xyz.com"
                        value={formData.email}
                        onChange={handleChange("email")}
                      />
                    </div>
                    <div className="form-group col-xs-12">
                      <label>Số điện thoại:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="date1"
                        placeholder="0123"
                        value={formData.phone}
                        onChange={handleChange("phone")}
                      />
                    </div>
                    <div className="form-group col-xs-6">
                      <label>Chọn mật khẩu :</label>
                      <input
                        type="password"
                        className="form-control"
                        id="date"
                        placeholder="Nhập mật khẩu"
                        value={formData.passwordRe}
                        onChange={handleChange("passwordRe")}
                      />
                    </div>
                    <div className="form-group col-xs-6 col-left-padding">
                      <label>Xác nhận mật khẩu :</label>
                      <input
                        type="password"
                        className="form-control"
                        id="phnumber"
                        placeholder="Nhập lại mật khẩu"
                        value={formData.passwordReg}
                        onChange={handleChange("passwordReg")}
                      />
                    </div>
                    <div className="col-xs-12">
                      <div className="checkbox-outer">
                        <input
                          type="checkbox"
                          name="vehicle2"
                          defaultValue="Car"
                        />{" "}
                        Tôi đồng ý với các{" "}
                        <Link to="/">Điều khoản và Điều kiện.</Link>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="comment-btn mar-top-30">
                        <button className="btn-blog" disabled={loading}>
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </section>
    </>
  );
}
