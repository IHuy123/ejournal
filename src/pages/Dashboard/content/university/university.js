import React, { useState } from "react";
import PaginationRe from "../../../../common/Paging";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import {
  actActiveUniversityAsync,
  actDeActiveUniversityAsync,
} from "../../../../store/user/actions";
function University({ allUniversity, setFormUniversity }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const onActive = (id) => {
    setIsLoading(true);
    dispatch(actActiveUniversityAsync(id, allUniversity)).then((res) => {
      if (res.ok) {
        NotificationManager.success("Active thành công");
      } else {
        NotificationManager.error("Active thất bại");
      }
      setIsLoading(false);
    });
  };
  const onDeActive = (id) => {
    setIsLoading(true);
    dispatch(actDeActiveUniversityAsync(id, allUniversity)).then((res) => {
      if (res.ok) {
        NotificationManager.success("Deactive thành công");
      } else {
        NotificationManager.error("Deactive thất bại");
      }
      setIsLoading(false);
    });
  };
  return (
    <div className="col-lg-6 col-md-12 col-xs-12 traffic">
      <div className="dashboard-list-box with-icons margin-top-20">
        <h4 className="gray">Danh sách các trường học</h4>
        <ul>
          {allUniversity && (
            <>
              {allUniversity.slice(page, page + 5).map((university, index) => (
                <li key={index}>
                  <div className="user-list-item">
                    <div className="user-list-content">
                      <h4>{university.name}</h4>
                      <span>{university.email}</span>
                      <div
                        class="numerical-rating high"
                        style={{
                          backgroundColor: "#666",
                          width: "65px",
                          marginLeft: "10px",
                        }}
                      >
                        {university.status}
                      </div>
                    </div>
                    <div className="user-btns">
                      {university.status !== "ACTIVE" ? (
                        <button
                          className="button"
                          onClick={() => onActive(university.id)}
                          disabled={isLoading}
                        >
                          Active
                        </button>
                      ) : (
                        <button
                          className="button"
                          onClick={() => onDeActive(university.id)}
                          disabled={isLoading}
                        >
                          DeActive
                        </button>
                      )}
                      <button
                        className="button"
                        onClick={() =>
                          setFormUniversity({
                           ...university,
                            status: "UPDATE",
                          })
                        }
                        disabled={isLoading}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              <PaginationRe
                page={page}
                setPage={setPage}
                count={5}
                totalPages={allUniversity.length}
              />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default University;
