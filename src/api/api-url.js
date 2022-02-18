import axios from "axios";
const DOMAIN = "http://localhost:8080/";

// url-list
export const SIGNIN = DOMAIN + "/login";
export const SIGNUP = DOMAIN + "/register";
export const ACCOUNT = DOMAIN + "/account";

export default axios.create({
    baseURL: DOMAIN,
});