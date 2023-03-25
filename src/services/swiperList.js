import instance from "./index";
// 获取公共管理
export const getGongGao = (page) =>
  instance({
    url: "admin/banner",
    method: "get",
    params: { page },
  });
export const getFenlei = (page) =>
  instance({
    url: "admin/bannercategory",
    method: "get",
    params: { page },
  });
// 获取新增
export const getGongGaoAdd = (data) =>
  instance({
    url: "/admin/banner",
    method: "post",
    data,
  });

// 修改公共管理
export const getUpdateGongGao = (id, data) =>
  instance({
    url: "/admin/banner/" + id,
    method: "put",
    data,
  });

// 删除公共管理的内容
export const delGongGong = (id) =>
  instance({
    url: "/admin/banner/" + id,
    method: "delete",
  });
// 查询信息
export const getSearchGongGao = (val, val2) =>
  instance({
    url: "/admin/banner?name=" + val + "&category=" + val2,
    method: "get",
  });
