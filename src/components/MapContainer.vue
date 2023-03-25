<template>
  <div class="header">
    <el-button @click="change(latLng[index])" v-for="(item, index) in citys">{{
      item
    }}</el-button>
  </div>
  <div id="container"></div>
</template>
<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef, ref } from "@vue/reactivity";
import { onMounted } from "vue";

const map = shallowRef("");
let citys = ref(["郑州", "北京", "武汉", "成都", "上海", "杭州"]);
let initMap = () => {
  AMapLoader.load({
    key: "b51e02ba69521c38693987e07688d526", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      let map = new AMap.Map("container", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        zoom: 17, //初始化地图级别
        center: [113.562741, 34.824174], //初始化地图中心点位置
      });

      //   console.log(AMap.Map);
      map.add(
        new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: map.getCenter(),
        })
      );
      AMap.plugin(
        [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.HawkEye",
          "AMap.Geolocation",
          "AMap.StationSearch",
          "AMap.MapType",
          "AMap.MouseTool",
        ],
        function () {
          map.addControl(new AMap.ToolBar()); // 工具条控件;范围选择控件
          map.addControl(new AMap.Scale()); // 显示当前地图中心的比例尺
          map.addControl(new AMap.HawkEye()); // 显示缩略图
          map.addControl(new AMap.Geolocation()); // 定位当前位置
          map.addControl(new AMap.MapType()); // 实现默认图层与卫星图,实时交通图层之间切换
        }
      );
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {
  initMap();
});

let latLng = ref([
  [113.562741, 34.824174],
  [116.370541, 40.037282],
  [114.428269, 30.458207],
  [104.041092, 30.630201],
  [121.491422, 31.378655],
  [120.264619, 30.305451],
]);
let change = (latLng) => {
  AMapLoader.load({
    key: "b51e02ba69521c38693987e07688d526", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    let map = new AMap.Map("container", {
      //设置地图容器id
      viewMode: "3D", //是否为3D地图模式
      zoom: 17, //初始化地图级别
      center: latLng, //初始化地图中心点位置
    });
    map.add(
      new AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: map.getCenter(),
      })
    );
    AMap.plugin(
      [
        "AMap.ToolBar",
        "AMap.Scale",
        "AMap.HawkEye",
        "AMap.Geolocation",
        "AMap.StationSearch",
        "AMap.MapType",
        "AMap.MouseTool",
      ],
      function () {
        map.addControl(new AMap.ToolBar()); // 工具条控件;范围选择控件
        map.addControl(new AMap.Scale()); // 显示当前地图中心的比例尺
        map.addControl(new AMap.HawkEye()); // 显示缩略图
        map.addControl(new AMap.Geolocation()); // 定位当前位置
        map.addControl(new AMap.MapType()); // 实现默认图层与卫星图,实时交通图层之间切换
      }
    );
  });
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 5vh;
  display: flex;
  flex-wrap: nowrap;
  justify-items: space-around;
  align-items: center;
}

#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  border: 1px solid #999;
  height: 58vh;
  /* background-color: red; */
}
</style>
