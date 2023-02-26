import React, { useEffect, useState } from "react";
import {
  FacebookFilled,
  TwitterOutlined,
  GooglePlusOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
// import { useDispatch } from "react-redux";
import { validateAddPost } from "../../../../components/Validate/validateInput";
import { storeImageToFireBase } from "../../../../utils/storeImageToFirebase.";

function AddPost() {
  // const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log("🚀 ~ file: index.js:18 ~ AddPost ~ isLoading", isLoading);
  const [postImageUrl, setPostImageUrl] = useState(
    "https://avatars.githubusercontent.com/u/98083474?v=4"
  );
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateAddPost
  );

  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } = await storeImageToFireBase(
          selectedFile
        );
        if (isSuccess) {
          setPostImageUrl(imageUrl);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  function login() {
    console.log(values.title, values.description);
    // dispatch(postLogin(values.title));
  }
  return (
    <div className="dashboard-content">
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <form id="add-listing" onSubmit={handleSubmit} noValidate>
            <div className="add-listing-section">
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-doc" /> Thông tin cơ bản
                </h3>
              </div>
              <div className="row with-forms">
                <div className="col-md-12">
                  <label>
                    Danh sách tiêu đề{" "}
                    <i className="tip" data-tip-content="Name of your business">
                      <div className="tip-content">
                        Tên doanh nghiệp của bạn
                      </div>
                    </i>
                  </label>
                  <input
                    className="search-field"
                    type="text"
                    name="title"
                    placeholder="Listing Title ..."
                    onChange={handleChange}
                    value={values.title || ""}
                    required
                  />
                  {errors.title}
                </div>
              </div>
              <div className="row with-forms">
                <div className="col-md-6">
                  <label>Category</label>
                  <select className="chosen-select-no-single">
                    <option label="blank">Chọn danh mục</option>
                    <option>Eat &amp; Drink</option>
                    <option>Shops</option>
                    <option>Hotels</option>
                    <option>Restaurants</option>
                    <option>Fitness</option>
                    <option>Events</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label>
                    Keywords{" "}
                    <i
                      className="tip"
                      data-tip-content="Maximum of 15 keywords related with your business"
                    >
                      <div className="tip-content">
                        Maximum of 15 keywords related with your business
                      </div>
                    </i>
                  </label>
                  <input
                    type="text"
                    placeholder="Keywords should be separated by commas"
                  />
                </div>
              </div>
            </div>
            <div className="add-listing-section">
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-map" /> Location
                </h3>
              </div>
              <div className="submit-section">
                <div className="row with-forms">
                  <div className="col-md-6">
                    <label>City</label>
                    <select
                      className="chosen-select-no-single"
                      style={{
                        background: "rgb(53, 54, 58)",
                      }}
                    >
                      <option label="blank">Lựa chọn thành phố</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                      <option>Chicago</option>
                      <option>Houston</option>
                      <option>Phoenix</option>
                      <option>San Diego</option>
                      <option>Austin</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Address</label>
                    <input type="text" placeholder="e.g. 964 School Street" />
                  </div>
                  <div className="col-md-6">
                    <label>State</label>
                    <input type="text" />
                  </div>
                  <div className="col-md-6">
                    <label>Zip-Code</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="add-listing-section">
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-picture" /> Hình ảnh
                </h3>
              </div>
              <div className="submit-section">
                <div className="edit-profile-photo">
                  <img src={postImageUrl} alt="" />
                  <div className="change-photo-btn">
                    <div className="photoUpload">
                      <span>
                        <PlusCircleOutlined /> Tải ảnh lên
                      </span>
                      <input
                        type="file"
                        name="profileImageUrl"
                        accept="image/*"
                        onChange={onSelectFile}
                        id="upload"
                        className="upload"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-listing-section">
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-docs" /> Chi tiết
                </h3>
              </div>
              <div className="form">
                <label>Miêu tả</label>
                <textarea
                  className="WYSIWYG"
                  cols={40}
                  rows={3}
                  id="summary"
                  spellCheck="true"
                  name="description"
                  placeholder="miêu tả ..."
                  onChange={handleChange}
                  value={values.description || ""}
                  required
                />
                {errors.description}
              </div>
              <div className="row with-forms">
                <div className="col-md-4">
                  <label>
                    Phone <span>(optional)</span>
                  </label>
                  <input type="text" />
                </div>
                <div className="col-md-4">
                  <label>
                    Website <span>(optional)</span>
                  </label>
                  <input type="text" />
                </div>
                <div className="col-md-4">
                  <label>
                    E-mail <span>(optional)</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="row with-forms">
                <div className="col-md-4">
                  <label className="fb-input">
                    <FacebookFilled /> Facebook <span>(optional)</span>
                  </label>
                  <input type="text" placeholder="https://www.facebook.com/" />
                </div>
                <div className="col-md-4">
                  <label className="twitter-input">
                    <TwitterOutlined /> Twitter <span>(optional)</span>
                  </label>
                  <input type="text" placeholder="https://www.twitter.com/" />
                </div>
                <div className="col-md-4">
                  <label className="gplus-input">
                    <GooglePlusOutlined /> Google Plus <span>(optional)</span>
                  </label>
                  <input type="text" placeholder="https://plus.google.com/" />
                </div>
              </div>
              <label className="margin-top-30 margin-bottom-10">
                Amenities <span>(optional)</span>
              </label>
              <div className="checkboxes in-row margin-bottom-20">
                <input id="check-a" type="checkbox" name="check" />
                <label htmlFor="check-a">Elevator in building</label>
                <input id="check-b" type="checkbox" name="check" />
                <label htmlFor="check-b">Friendly workspace</label>
                <input id="check-c" type="checkbox" name="check" />
                <label htmlFor="check-c">Instant Book</label>
                <input id="check-d" type="checkbox" name="check" />
                <label htmlFor="check-d">Wireless Internet</label>
                <input id="check-e" type="checkbox" name="check" />
                <label htmlFor="check-e">Free parking on premises</label>
                <input id="check-f" type="checkbox" name="check" />
                <label htmlFor="check-f">Free parking on street</label>
                <input id="check-g" type="checkbox" name="check" />
                <label htmlFor="check-g">Smoking allowed</label>
                <input id="check-h" type="checkbox" name="check" />
                <label htmlFor="check-h">Events</label>
              </div>
            </div>
            <div className="add-listing-section switcher-on">
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-book-open" /> Pricing
                </h3>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
              <div className="switcher-content">
                <div className="row">
                  <div className="col-md-12">
                    <table id="pricing-list-container">
                      <tbody>
                        <tr className="pricing-list-item pattern">
                          <td>
                            <div className="fm-move">
                              <i className="sl sl-icon-cursor-move" />
                            </div>
                            <div className="fm-input pricing-name">
                              <input type="text" placeholder="Title" />
                            </div>
                            <div className="fm-input pricing-ingredients">
                              <input type="text" placeholder="Description" />
                            </div>
                            <div className="fm-input pricing-price">
                              <input
                                type="text"
                                placeholder="Price"
                                data-unit="USD"
                              />
                            </div>
                            <div className="fm-close">
                              <Link className="delete" to="#">
                                <i className="fa fa-remove" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Link to="#" className="button add-pricing-list-item">
                      Add Item
                    </Link>
                    <Link to="#" className="button add-pricing-submenu">
                      Add Category
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button className="button preview">Add Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
