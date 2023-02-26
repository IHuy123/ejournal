import { api } from ".";

export const AuthService = {
  logout: () => api.call().post(`/logout`,),
  login: ({ username, password }) =>
    api.call().post(
      `/login`,
      {
        username,
        password,
      },
    ),
  register: ({ email, phone, usernameRe, name, passwordRe }) =>
    api.call().post(`/login/register`, {
      email,
      phone,
      username: usernameRe,
      fullname: name,
      password: passwordRe,
      avatar: null,
      gender: false,
    }),
};
