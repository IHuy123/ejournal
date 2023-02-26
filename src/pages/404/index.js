import { Link } from "react-router-dom";
import "./err.css";
export default function PageNotFound() {
  return (
    <section className="error bg-navy">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="error-content text-center">
              <div className="error-box">
                <div className="error-box-inner">
                  <h1 className="white">404</h1>
                </div>
              </div>
              <h2 className="page-title white">
                Rất tiếc, nó trông giống như một con ma!
              </h2>
              <p className="white mar-0">
                Trang bạn đang tìm kiếm không thể tìm thấy. Về lại trang chủ{" "}
                <Link to="/"> Nhấp vào đây. </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
