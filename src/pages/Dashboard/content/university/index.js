import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllMajor, actGetAllUniversity } from "../../../../store/user/actions";
import Major from "./major";
import AddMajor from "./addMajor";
import AddUniversity from "./addUniversity";
import University from "./university";
function UniversityAndMajor() {
  const dispatch = useDispatch();
  const allUniversity = useSelector((state) => state.User.allUniversity);
  const allMajor = useSelector((state) => state.User.allMajor);
  const [formUniversity, setFormUniversity] = useState({
    id:"",
    name: "",
    email: "",
    mailtype: "",
    status:"ADD"
  });
    const [formMajor, setFormMajor] = useState({
      id: "",
      name: "",
      status: "ADD",
    });
  useEffect(
    () => {
      dispatch(actGetAllUniversity());
      dispatch(actGetAllMajor());
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div className="dashboard-content">
      <div className="dashboard-form" style={{ marginBottom: "30px" }}>
        <div className="row">
          <AddUniversity
            formUniversity={formUniversity}
            setFormUniversity={setFormUniversity}
            allUniversity={allUniversity}
          />
          <AddMajor
            formMajor={formMajor}
            setFormMajor={setFormMajor}
            allMajor={allMajor}
          />
        </div>
      </div>
      <div className="row">
        <University
          allUniversity={allUniversity}
          setFormUniversity={setFormUniversity}
        />
        <Major allMajor={allMajor} setFormMajor={setFormMajor} />
      </div>
    </div>
  );
}

export default UniversityAndMajor;