<template>
  <div class="main"  style="height: 100%">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAside from "../components/CommonAside.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: { CommonAside },
  created(){
  //  console.log(this.$router,this.$route)
  }
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
}
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0px;
}
</style>
