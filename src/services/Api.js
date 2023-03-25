import instance from "./index";
// 获取公共管理
export const getGongGao = (page) =>
  instance({
    url: "/admin/notice",
    headers: {},
    method: "get",
    params: { page },
  });
// 获取新增
export const getGongGaoAdd = (data) =>
  instance({
    url: "/admin/notice",
    method: "post",
    data,
  });

// 修改公共管理
export const getUpdateGongGao = (id, data) =>
  instance({
    url: "/admin/notice/" + id,
    method: "put",
    data,
  });

// 删除公共管理的内容
export const delGongGong = (id) =>
  instance({
    url: "/admin/notice/" + id,
    method: "delete",
  });
// 查询信息
export const getSearchGongGao = (val) =>
  instance({
    url: "/admin/notice?name=" + val,
    method: "get",
  });
