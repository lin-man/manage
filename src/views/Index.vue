<template>
  <div class="common-layout">
    <el-container style="height: 85vh">
      <el-header class="head">
        <div class="left">
          <img src="http://localhost:1337/manager/hh-log.png" alt="" />
          <a href="#">HomeHoney</a>
        </div>
        <div class="right">
          <el-icon style="font-size: 34px"><icon-Search /></el-icon>
          <el-icon style="font-size: 34px"><icon-QuestionFilled /></el-icon>
          <div class="touXiang">
            <el-avatar :icon="UserFilled"></el-avatar>&nbsp;
            <span style="cursor: pointer" class="span"
              >Arvin
              <div class="back">
                <el-button
                  style="position: absolute; top: 20px; left: 5px"
                  @click="back"
                  type="danger"
                  >退出登录</el-button
                >
              </div>
            </span>
          </div>
          <p
            style="
              background-color: white;
              line-height: 50px;
              width: 60px;
              text-align: center;
            "
          >
            prod
          </p>
        </div>
      </el-header>

      <el-container>
        <el-aside class="aside" width="show" style="height: 85vh">
          <el-col>
            <el-menu
              class="el-menu-vertical-demo"
              :collapse="show"
              :router="true"
              :default-active="$route.path"
            >
              <el-menu-item index="/">
                <el-icon><icon-position /></el-icon>
                <span>欢迎</span>
              </el-menu-item>
              <el-menu-item index="/gg">
                <el-icon><icon-Bell /></el-icon>
                <span>公告管理</span>
              </el-menu-item>
              <el-sub-menu index="3">
                <template #title>
                  <el-icon><icon-menu /></el-icon>
                  <span>轮播图管理</span>
                </template>
                <el-menu-item index="/swiper">轮播图分类</el-menu-item>
                <el-menu-item index="/swiperlist">轮播图列表</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="4">
                <template #title>
                  <el-icon><icon-User /></el-icon>
                  <span>用户管理</span>
                </template>
                <el-menu-item index="/user">用户列表</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="5">
                <template #title>
                  <el-icon><icon-Handbag /></el-icon>
                  <span>商品管理</span>
                </template>
                <el-menu-item index="/shoplist">商品列表</el-menu-item>
                <el-menu-item index="/shop">商品分类</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="/order">
                <el-icon><icon-ShoppingCartFull /></el-icon>
                <span>订单管理</span>
              </el-menu-item>
              <el-sub-menu index="7">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>论坛管理</span>
                </template>
                <el-menu-item index="/forum">板块管理</el-menu-item>
                <el-menu-item index="/discuss">讨论管理</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="8">
                <template #title>
                  <el-icon><icon-FolderChecked /></el-icon>
                  <span>咨询管理</span>
                </template>
                <el-menu-item index="/classify">分类管理</el-menu-item>
                <el-menu-item index="/message">咨询管理</el-menu-item>
              </el-sub-menu>
            </el-menu>
            <el-radio-group style="margin-top: 20px">
              <el-radio-button @click="show = false" v-if="show"
                ><el-icon><ArrowRightBold /></el-icon
              ></el-radio-button>
              <el-radio-button @click="show = true" v-if="!show"
                ><el-icon><ArrowLeftBold /></el-icon
              ></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-aside>
        <el-container>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import {
  Location,
  Menu as IconMenu,
  Position as iconPosition,
  Bell as iconBell,
  User as iconUser,
  Handbag as iconHandbag,
  ShoppingCartFull as iconShoppingCartFull,
  FolderChecked as iconFolderChecked,
  QuestionFilled as iconQuestionFilled,
  UserFilled,
  Search as iconSearch,
  ArrowRightBold,
  ArrowLeftBold,
} from "@element-plus/icons-vue";
import { ref } from "vue";

let show = ref(true);

let back = () => {
  window.sessionStorage.removeItem("token");
  location.reload();
};
</script>

<style lang="scss" scoped>
.back {
  width: 100px;
  height: 70px;
  position: absolute;
  right: 110px;
  top: 50px;
  display: none;
  z-index: 9999;
}
.head {
  width: 100%;
  height: 100px;
  background-color: #dedede;
  display: flex;
  justify-content: space-between;

  .left {
    line-height: 100px;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      margin-right: 20px;
    }
    a {
      font-weight: bolder;
      font-size: 32px;
    }
  }
  .right {
    width: 400px;
    // background-color: aqua;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 100px;
  }
}
.span:hover .back {
  display: block;
}
.main {
  background-color: #dedede;
  padding: 0;
}
</style>
