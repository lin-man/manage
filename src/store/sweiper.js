import { ref, onMounted, reactive } from "vue";
import {
  getGongGao,
  getGongGaoAdd,
  delGongGong,
  getUpdateGongGao,
  getSearchGongGao,
} from "../services/swiper.js";
import { defineStore } from "pinia";

export const useGongGao = defineStore("getswiper", () => {
  let getGongGaoList = ref("");
  let total = ref("");
  let setGongGao = async (page) => {
    let { data } = await getGongGao(page);
    // console.log(data);
    getGongGaoList.value = data.data;
    total.value = data.total;
  };
  let addList = reactive({
    name: "",
    desc: "",
    coverImage: "",
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
  let setSearchGongGao = async (value) => {
    let { data } = await getSearchGongGao(value);
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
  };
});
