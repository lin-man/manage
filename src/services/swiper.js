import instance from "./index";
// 获取公共管理
export const getGongGao = (page) =>
  instance({
    url: "admin/bannercategory",
    method: "get",
    params: { page },
  });
// 获取新增
export const getGongGaoAdd = (data) =>
  instance({
    url: "/admin/bannercategory",
    method: "post",
    data,
  });

// 修改公共管理
export const getUpdateGongGao = (id, data) =>
  instance({
    url: "/admin/bannercategory/" + id,
    method: "put",
    data,
  });

// 删除公共管理的内容
export const delGongGong = (id) =>
  instance({
    url: "/admin/bannercategory/" + id,
    method: "delete",
  });
// 查询信息
export const getSearchGongGao = (val) =>
  instance({
    url: "/admin/bannercategory?name=" + val,
    method: "get",
  });
