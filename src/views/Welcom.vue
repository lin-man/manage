<template>
  <div class="header">
    <h1>欢迎</h1>
  </div>
  <div class="content">
    <MapContainer />
  </div>
</template>
<script setup>
import MapContainer from "../components/MapContainer.vue";
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
  margin: 30px auto;
  width: 90%;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
}
</style>
