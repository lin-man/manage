import instance from "./index";

// 获取用户列表
export const getUserList = (params) =>
  instance({
    url: "/admin/user",
    method: "get",
    params,
  });
