import { api } from ".";

export const UserService = {
  getMeInfo({ id }) {
    return api.callWithAuth().post("/account/info/", { id });
  },
  getAllUser() {
    return api.callWithAuth().get("/account/");
  },
  getAllUniversity() {
    return api.callWithAuth().get("/university/");
  },
  putUniversity({ name, email, mailtype }) {
    return api
      .callWithAuth()
      .put("/university/add/", { name, email, mailtype });
  },
  activeUniversity({ id }) {
    return api.callWithAuth().put("/university/active/", { id });
  },
  activeMajor({ id }) {
    return api.callWithAuth().put("/major/active/", { id });
  },
  deactiveUniversity({ id }) {
    return api.callWithAuth().put("/university/deactive/", { id });
  },
  deactiveMajor({ id }) {
    return api.callWithAuth().put("/major/deactive/", { id });
  },
  putMajor({ name }) {
    return api.callWithAuth().put("/major/add/", { name });
  },
  getAllMajor() {
    return api.callWithAuth().get("/major/");
  },
  updateUniversity({ name, email, mailtype }) {
    return api
      .callWithAuth()
      .put("/university/update/", { name, email, mailtype });
  },
  updateMajor({ name }) {
    return api.callWithAuth().put("/major/update/", { name });
  },
  changePassword({ oldPassword, newPassword }) {
    return api.callWithAuth().put("profile/changepassword/", {
      oldPassword,
      newPassword,
    });
  },
};
