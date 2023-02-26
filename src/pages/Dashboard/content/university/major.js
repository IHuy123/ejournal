import React, { useState } from 'react'
import PaginationRe from '../../../../common/Paging';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { actActiveMajorAsync, actDeActiveMajorAsync } from '../../../../store/user/actions';

function Major({ allMajor, setFormMajor }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const onActive = (id) => {
    setIsLoading(true);
    dispatch(actActiveMajorAsync(id, allMajor)).then((res) => {
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
    dispatch(actDeActiveMajorAsync(id, allMajor)).then((res) => {
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
      <div className="dashboard-list-box margin-top-20">
        <h4 className="gray">Danh sách các ngành học</h4>
        <ul>
          {allMajor && (
            <>
              {allMajor.slice(page, page + 5).map((major, index) => (
                <li key={index}>
                  <div className="user-list-item">
                    <div className="user-list-content">
                      <h4>{major.name}</h4>
                      <span>{major.status}</span>
                    </div>
                    <div className="user-btns">
                      {major.status !== "ACTIVE" ? (
                        <button
                          className="button"
                          onClick={() => onActive(major.id)}
                          disabled={isLoading}
                        >
                          Active
                        </button>
                      ) : (
                        <button
                          className="button"
                          onClick={() => onDeActive(major.id)}
                          disabled={isLoading}
                        >
                          DeActive
                        </button>
                      )}
                      <button
                        className="button"
                        onClick={() =>
                          setFormMajor({
                            ...major,
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
                totalPages={allMajor.length}
              />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Major