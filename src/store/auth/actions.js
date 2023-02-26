import { AuthService } from "../../services/auth";
import { actGetMeAsync } from "../user/actions";

export const ACT_LOGIN = "ACT_LOGIN";
export const ACT_SET_TOKEN = "ACT_SET_TOKEN";
export const ACT_LOGOUT = "ACT_LOGOUT";

export function actLogoutAsync() {
  return {
    type: ACT_LOGOUT,
  };
}
export function actLogin(value) {
  return {
    type: ACT_LOGIN,
    payload: {
      isLogin: value,
    },
  };
}

export function actSetToken(token) {
  return {
    type: ACT_SET_TOKEN,
    payload: {
      token,
    },
  };
}

export function actLogout({ history }) {
  return async (dispatch) => {
    try {
      history.push("/");
      await AuthService.logout();
      dispatch(actLogoutAsync());
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


export function actLoginAsync({ username, password }) {
  return async (dispatch) => {
    try {
      const response = await AuthService.login({
        username,
        password,
      });
      const data = response.data;
      const id = data.id;
      dispatch(actGetMeAsync({ id }));
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

export function actRegisterAsync({ email, phone, usernameRe, name, passwordRe }) {
 return async (dispatch) => {
    try {
        await AuthService.register({
        email,
        phone,
        usernameRe,
        name,
        passwordRe,
      });
      // dispatch(actGetMeAsync());
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
