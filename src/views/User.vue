<template>
  <!-- 轮播图管理/ 轮播图分类   index的子路由 -->
  <div class="ament-box">
    <div class="header">
      <span>用户管理</span> / 用户列表
      <h3>用户列表</h3>
    </div>
    <!-- 搜索框 -->
    <div class="content">
      <div class="input-box">
        <el-form-item label="名字:">
          <el-input placeholder="请输入" clearable />
        </el-form-item>
      </div>
      <div class="btn-box">
        <el-button>重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <!-- 列表内容 -->
    <div class="main">
      <!-- 表头 -->
      <div class="title">
        <p style="margin-top: 8px">用户列表</p>
        <div class="add" style="margin-top: 8px">
          <el-tooltip content="刷新" placement="top">
            <el-icon><RefreshRight /></el-icon>
          </el-tooltip>
          <el-tooltip content="密度" placement="top">
            <el-icon><Operation /></el-icon>
          </el-tooltip>
          <el-tooltip content="列设置" placement="top">
            <el-icon><Setting /></el-icon
          ></el-tooltip>
        </div>
      </div>
      <!-- 列表 -->
      <div class="list">
        <el-table :data="getUser" style="width: 100%">
          <el-table-column label="序号" type="index" width="100px" />
          <el-table-column prop="userName" label="用户名" />
          <el-table-column prop="nickName" label="昵称" />
          <el-table-column prop="avatar" label="头像">
            <template #default="{ row }">
              <el-image :src="row.avatar" />
            </template>
          </el-table-column>
          <el-table-column prop="gender" label="性别" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="score" label="积分" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button
                size="small"
                style="padding: 2px 5px; margin: 2px"
                type="primary"
                v-if="row.isLocked"
                @click="row.isLocked = 0"
                ><el-icon><Unlock /></el-icon
              ></el-button>
              <el-button
                size="small"
                style="padding: 2px 5px; margin: 2px"
                type="primary"
                v-if="!row.isLocked"
                @click="row.isLocked = 1"
                ><el-icon><Lock /></el-icon
              ></el-button>
              <el-button
                size="small"
                style="padding: 2px 5px; margin: 2px"
                type="danger"
                ><el-icon><Delete /></el-icon
              ></el-button>
              <el-button
                size="small"
                style="padding: 2px 5px; margin: 2px"
                @click="dialogTableVisible = true"
                ><el-icon><ShoppingTrolley /></el-icon
              ></el-button>
              <el-button
                size="small"
                style="padding: 2px 5px; margin: 2px"
                @click="showJ = true"
                ><el-icon><Clock /></el-icon
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog v-model="dialogTableVisible" title="购物车">
          <el-table>
            <el-table-column property="date" label="序号" />
            <el-table-column property="name" label="名字" />
            <el-table-column property="name" label="价格" />
            <el-table-column property="name" label="数量" />
            <el-table-column property="address" label="Address" />
          </el-table>
        </el-dialog>
        <el-dialog v-model="showJ" title="用户积分">
          <el-table>
            <el-table-column property="date" label="序号" />
            <el-table-column property="name" label="备注" />
            <el-table-column property="name" label="时间" />
          </el-table>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, toRefs } from "vue";
import { getUserStore } from "../store/UserList";
// 弹出框的展示
let dialogTableVisible = ref(false);
let showJ = ref(false);
let userStore = getUserStore();
let { setUserList } = userStore;
let { getUser } = toRefs(userStore);

onMounted(async () => {
  await setUserList();
});
</script>
<style lang="scss" scoped>
.ament-box {
  .header {
    background-color: white;
    height: 100px;
    line-height: 40px;
    text-indent: 20px;
    font-size: 14px;
    h3 {
      font-size: 20px;
    }
    span {
      color: #999;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    margin: 20px 30px;
    padding: 10px 50px;
    align-items: center;
    height: 50px;
    .input-box {
      height: 30px;
    }
  }
}
.main {
  background-color: #fff;
  padding: 10px 50px;
  margin: 30px 30px 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .add {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100px;
      font-size: 20px;
      .el-icon:hover {
        color: #43a2ff;
      }
    }
  }
  .list {
    margin-top: 10px;
  }
}

.edit-box {
  padding: 20px;
}
</style>
