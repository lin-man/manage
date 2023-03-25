import instance from "./index";

export const getLogin = (data) =>
  instance({
    url: "/auth/manager_login",
    data,
    method: "post",
    headers: {
      token: window.sessionStorage["token"],
    },
  });
