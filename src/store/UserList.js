import { getUserList } from "../services/UerList";

import { ref } from "vue";
import { defineStore } from "pinia";
export const getUserStore = defineStore("getUserList", () => {
  let getUser = ref(null);
  let setUserList = async () => {
    let { data } = await getUserList();
    console.log(data.data);
    getUser.value = data.data;
  };

  return { getUser, setUserList };
});
