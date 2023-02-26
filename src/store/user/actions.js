import { UserService } from "../../services/user";
// import { actSetToken } from "../auth/actions";

export const ACT_GET_ME = "ACT_GET_ME";
export const ACT_ALL_USER = "ACT_ALL_USER";
export const ACT_ALL_UNIVERSITY = "ACT_ALL_UNIVERSITY";
export const ACT_ALL_MAJOR = "ACT_ALL_MAJOR";
export const ACT_CHANGE_PASSWORD = "ACT_CHANGE_PASSWORD";

export function actGetMe(currentUser) {
  return {
    type: ACT_GET_ME,
    payload: {
      currentUser,
    },
  };
}

export function actAllUser(allUser) {
  return {
    type: ACT_ALL_USER,
    payload: {
      allUser,
    },
  };
}

export function actAllUniversity(allUniversity) {
  return {
    type: ACT_ALL_UNIVERSITY,
    payload: {
      allUniversity,
    },
  };
}

export function actAllMajor(allMajor) {
  return {
    type: ACT_ALL_MAJOR,
    payload: {
      allMajor,
    },
  };
}

export function actChangePassword({
  password,
  new_password,
  confirm_new_password,
}) {
  return {
    type: ACT_CHANGE_PASSWORD,
    payload: {
      password,
      new_password,
      confirm_new_password,
    },
  };
}

export function actGetMeAsync({ id }) {
  return async (dispatch) => {
    try {
      const response = await UserService.getMeInfo({ id });
      localStorage.setItem("access_login", JSON.stringify(response.data[0]));
      dispatch(actGetMe(response.data[0]));
    } catch (e) {
      // dispatch(actSetToken(""));
      localStorage.removeItem("access_login", "");
    }
  };
}

export function actPutUniversityAsync({ name, email, mailtype }, allUniversity) {
  return async (dispatch) => {
    try {
      const response = await UserService.putUniversity({
        name,
        email,
        mailtype,
      });
      dispatch(actAllUniversity([...response.data, ...allUniversity]));
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actGetAllAsync() {
  return async (dispatch) => {
    try {
      const response = await UserService.getAllUser();
      dispatch(actAllUser(response.data.list));
    } catch (e) {
      console.log(e);
    }
  };
}

export function actGetAllUniversity() {
  return async (dispatch) => {
    try {
      const response = await UserService.getAllUniversity();
      dispatch(actAllUniversity(response.data.list));
    } catch (e) {
      console.log(e);
    }
  };
}

export function actGetAllMajor() {
  return async (dispatch) => {
    try {
      const response = await UserService.getAllMajor();
      dispatch(actAllMajor(response.data.list));
    } catch (e) {
      console.log(e);
    }
  };
}

export function actPutMajorAsync({ name }, allMajor) {
  return async (dispatch) => {
    try {
      const response = await UserService.putMajor({
        name,
      });
      dispatch(actAllMajor([...response.data, ...allMajor]));
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actActiveUniversityAsync(id, allUniversity) {
  return async (dispatch) => {
    try {
      await UserService.activeUniversity({
        id,
      });
       let indexUpdate = "";
       indexUpdate = allUniversity.findIndex(
         (u) => u.id === id
       );
      allUniversity[indexUpdate] = {
        ...allUniversity[indexUpdate],
        status: "ACTIVE",
      };
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actActiveMajorAsync(id, allMajor) {
  return async (dispatch) => {
    try {
      await UserService.activeMajor({
        id,
      });
      let indexUpdate = "";
      indexUpdate = allMajor.findIndex((u) => u.id === id);
      allMajor[indexUpdate] = {
       ...allMajor[indexUpdate],
       status: "ACTIVE",
     };
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actDeActiveUniversityAsync(id, allUniversity) {
  return async (dispatch) => {
    try {
      await UserService.deactiveUniversity({
        id,
      });
       let indexUpdate = "";
       indexUpdate = allUniversity.findIndex((u) => u.id === id);
       allUniversity[indexUpdate] = {
         ...allUniversity[indexUpdate],
         status: "DEACTIVE",
       };
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actDeActiveMajorAsync(id, allMajor) {
  return async (dispatch) => {
    try {
      await UserService.deactiveMajor({
        id,
      });
      let indexUpdate = "";
      indexUpdate = allMajor.findIndex((u) => u.id === id);
      allMajor[indexUpdate] = {
        ...allMajor[indexUpdate],
        status: "DEACTIVE",
      };
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actUpdateUniversityAsync(
  { id , name, email, mailtype },
  allUniversity
) {
  return async (dispatch) => {
    try {
      await UserService.updateUniversity({
        id,
        name,
        email,
        mailtype,
      });
     let indexUpdate = "";
     indexUpdate = allUniversity.findIndex((u) => u.id === id);
     allUniversity[indexUpdate] = {
       ...allUniversity[indexUpdate],
       name,
       email,
       mailtype,
     };
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actUpdateMajorAsync({ id, name }, allMajor) {
  return async (dispatch) => {
    try {
      await UserService.updateMajor({
        name,
      });
      let indexUpdate = "";
      indexUpdate = allMajor.findIndex((u) => u.id === id);
      allMajor[indexUpdate] = {
        ...allMajor[indexUpdate],
        name,
      };
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
      };
    }
  };
}

export function actChangePasswordAsync({ oldPassword, newPassword }) {
  return async (dispatch) => {
    try {
      const response = await UserService.changePassword({
        oldPassword,
        newPassword,
      });
      console.log("response", response);
      return {
        ok: true,
      };
    } catch (err) {
      const errRes = err.response;
      const mapError = {
        default: "Có lỗi xảy ra, vui lòng thử lại sau!",
        rest_user_invalid_password: "Mật khẩu cũ không đúng",
        rest_user_invalid_new_password:
          "Mật khẩu mới không được trùng với mật khẩu cũ",
      };

      if (errRes.data && errRes.data.code && mapError[errRes.data.code]) {
        return {
          ok: false,
          message: mapError[errRes.data.code],
        };
      }

      return {
        ok: false,
        message: mapError.default,
      };
    }
  };
}
