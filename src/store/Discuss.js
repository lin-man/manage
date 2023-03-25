import { ref, onMounted, reactive } from "vue";
import {
  getGongGao,
  getGongGaoAdd,
  delGongGong,
  getUpdateGongGao,
  getSearchGongGao,
  getFenlei,
} from "../services/Discuss";
import { defineStore } from "pinia";

export const useGongGao = defineStore("getDiscussList", () => {
  let getGongGaoList = ref("");
  let total = ref("");
  let setGongGao = async (page) => {
    let { data } = await getGongGao(page);
    console.log(data);
    getGongGaoList.value = data.data;
    total.value = data.total;
  };
  let swiperlist = ref([]);
  let setFenlei = async (page) => {
    let { data } = await getFenlei(page);
    console.log(data.data);
    swiperlist.value = data.data;
  };

  let addList = reactive({
    name: "",
    desc: "",
    coverImage: "",
    link: "",
    url: "",
    category: "",
    content: "",
  });
  // 修改
  let setUpdateGongGao = async (id, addList) => {
    let { data } = await getUpdateGongGao(id, addList);
    console.log(data);
  };
  // 新增
  let setGongGaoAdd = async () => {
    let { data } = await getGongGaoAdd(addList);
    console.log(data);
  };
  // 删除
  let del = async (id) => {
    await delGongGong(id);
  };

  // 查询
  let setSearchGongGao = async (value, value2) => {
    let { data } = await getSearchGongGao(value, value2);
    console.log(data);
    getGongGaoList.value = data.data;
  };

  return {
    getGongGaoList,
    setGongGao,
    addList,
    setGongGaoAdd,
    total,
    del,
    setUpdateGongGao,
    setSearchGongGao,
    setFenlei,
    swiperlist,
  };
});
