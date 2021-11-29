import axios from "axios";
import { baseUrl } from "../utils/urls";

export const postLogin = (email, password) => {
  const data = {
    email,
    password,
  };
  debugger;
  return axios.post(`${baseUrl}api/user/subLicenseeUserLogin`, data);
};
