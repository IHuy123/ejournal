import axios from "axios";

const baseURL = "http://localhost:5000/";

export const api = {
  call: () => {
    return axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  },
  callWithAuth: () => {
    return axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  },
};