<template>
  <!-- 登录页面 -->
  <div class="login-box">
    <el-form status-icon class="demo-ruleForm">
      <el-form-item>
        <el-input
          type="username"
          placeholder="请输入用户名"
          v-model="userName"
        />
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="login"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs } from "vue";
import { getLogin } from "../services/Login.js";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
let router = useRouter();
let LoginParams = reactive({
  userName: "",
  password: "",
});
let { userName, password } = toRefs(LoginParams);
let token = ref(null);
let login = async () => {
  if (!userName.value.trim() || !password.value.trim()) {
    ElMessage.warning("请输入内容");
    return false;
  }
  let { data } = await getLogin(LoginParams);
  console.log(data);
  if (data.code == 1) {
    token.value = data.data;
    window.sessionStorage.setItem("token", token.value);
    router.push("/");
  } else {
    ElMessage.warning("请输入正确的账号,密码");
  }
};
</script>
<style lang="scss" scoped>
.login-box {
  width: 300px;
  height: 130px;
  position: absolute;
  padding: 40px 20px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f2f5;
  border-radius: 30px;
}
</style>
