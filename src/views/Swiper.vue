<template>
  <div class="header">
    <h1>轮播图分类</h1>
  </div>
  <div class="content">
    <div class="left">
      <el-form-item label="名字：">
        <el-input v-model="inputVal" clearable />
      </el-form-item>
    </div>
    <div class="right">
      <el-form-item>
        <el-button type="primary" @click="submitForm()">查询</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </div>
  </div>
  <div class="footer">
    <h3>轮播图分类</h3>
    <div class="footer-right">
      <el-button type="primary" @click="(dialogFormVisible = true), (index = 0)"
        >+&emsp;新建</el-button
      >
      <el-tooltip class="box-item" effect="dark" content="刷新" placement="top"
        ><el-icon><RefreshRight /></el-icon>
      </el-tooltip>

      <el-tooltip class="box-item" effect="dark" content="密度" placement="top"
        ><el-icon><Operation /></el-icon
      ></el-tooltip>
      <el-tooltip class="box-item" effect="dark" content="设置" placement="top"
        ><el-icon><Setting /></el-icon
      ></el-tooltip>
      <el-dialog v-model="dialogFormVisible" title="公共编辑">
        <el-form
          ref="ruleFormRef"
          label-width="50px"
          class="demo-ruleForm"
          status-icon
          label-position="top"
        >
          <el-form-item label="标题" prop="name">
            <el-input v-model="name" />
          </el-form-item>
          <el-form-item label="简介" prop="desc">
            <el-input v-model="desc" type="textarea" style="resize: none" />
          </el-form-item>
          <el-form-item label="图片">
            <el-upload
              action="http://localhost:1337/api/v1/common/upload_file"
              list-type="picture-card"
              :auto-upload="true"
              :on-success="shangchuan"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="详情">
            <div style="border: 1px solid #ccc; width: 100%">
              <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
              />
              <Editor
                style="height: 500px; overflow-y: hidden"
                v-model="content"
                @onCreated="handleCreated"
              />
            </div>
          </el-form-item>
        </el-form>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="add()"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div class="jio">
      <el-table :data="getGongGaoList" style="width: 100%; height: 350px">
        <el-table-column type="index" label="序号" width="200" />
        <el-table-column prop="name" label="名字" />
        <el-table-column prop="coverImage" label="主图">
          <template #default="{ row }">
            <img :src="row.coverImage" alt="" style="width: 60px" />
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="描述" />
        <el-table-column prop="address" label="操作">
          <template #default="{ row }">
            <el-button
              size="small"
              type="primary"
              @click="
                UpdateGongGao(row), (dialogFormVisible = true), (index = 1)
              "
              >修改</el-button
            >
            <el-button size="small" type="danger" @click="Shan(row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="background-color: white">
        <div style="width: 250px; margin: auto">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total * 1"
            @current-change="change"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  onMounted,
  toRefs,
  reactive,
  onBeforeUnmount,
  shallowRef,
  nextTick,
  onBeforeMount,
} from "vue";
import { useGongGao } from "../store/sweiper";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { ElMessage } from "element-plus";

const editorRef = shallowRef();
const valueHtml = ref("");
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const dialogFormVisible = ref(false);
// 修改的id
let id = ref(null);
// 老王编辑器的
const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
// 查询框的值
let inputVal = ref("");
// 拿到pinia中的useGongGao
let GongGaoStore = useGongGao();
let { getGongGaoList } = toRefs(GongGaoStore);
let { setGongGao, setGongGaoAdd, del, setUpdateGongGao, setSearchGongGao } =
  GongGaoStore;
let { name, desc, coverImage, content } = toRefs(GongGaoStore.addList);
let index = ref(null);
let add = async () => {
  if (!name.value) {
    ElMessage.warning("内容不能为空");
    return false;
  } else {
    if (index.value == 0) {
      // console.log(1);
      setGongGaoAdd();
      setGongGao(page.value);
    } else {
      console.log(1);
      await setUpdateGongGao(id.value, GongGaoStore.addList);
      setGongGao();
    }
  }
  dialogFormVisible.value = false;
  name.value = desc.value = coverImage.value = content.value = "";
};
// 上传文件
let shangchuan = (a) => {
  console.log(a);
  if (a.code == 1) coverImage.value = a.data;
};

// 修改部分
let UpdateGongGao = (a, addList) => {
  id.value = a.id;
  console.log(a);
  name.value = a.name;
  desc.value = a.desc;
  content.value = a.content;
  // setUpdateGongGao(id, addList);
};

let Shan = async (id) => {
  await del(id);
  setGongGao(page.value);
};
let { total } = toRefs(GongGaoStore);
let page = ref(1);
let change = (page) => {
  setGongGao(page);
};
// 重置按钮
let resetForm = () => {
  inputVal.value = "";
  setGongGao(page.value);
};
// 查询按钮
let submitForm = async () => {
  if (!inputVal.value) {
    return false;
  } else {
    // alert(inputVal.value);
    setSearchGongGao(inputVal.value);
  }
};
onBeforeMount(() => {
  setGongGao();
});
onMounted(async () => {
  await setGongGao(page.value);
});
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: white;
  h1 {
    line-height: 60px;
    font-size: 18px;
    margin-left: 20px;
  }
}
.content {
  height: 100px;
  width: 90%;
  margin: 20px auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    height: 50px;
    width: 300px;
    line-height: 60px;
    margin-left: 50px;
  }
  .right {
    height: 40px;
    width: 300px;
    line-height: 60px;
  }
}
.footer {
  width: 90%;
  height: 50px;
  margin-top: 20px;
  margin: auto;
  background-color: white;
  h3 {
    margin-top: 10px;
    float: left;
    margin-left: 10px;
  }
  .footer-right {
    margin-top: 10px;
    float: right;
    display: flex;
    width: 200px;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
  }
  .jio {
    margin: auto;
  }
}
</style>
