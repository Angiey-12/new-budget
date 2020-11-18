<template>
  <el-aside>
    <el-menu
        class="el-menu-vertical"
        :default-active="activeIndex"
        :collapse="collapse">
        <el-menu-item @click="goPage('/signed-table')" index="1">
            <i class="el-icon-document-checked"></i>
            <span slot="title">已签订合同维保</span>
        </el-menu-item>
        <el-menu-item @click="goPage('/new-added-table')" index="2">
            <i class="el-icon-document-add"></i>
            <span slot="title">新增购买合同维保</span>
        </el-menu-item>
        <el-menu-item @click="goPage('/view-all')" index="3">
            <i class="el-icon-document"></i>
            <span slot="title">总览所有合同维保</span>
        </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import Bus from '../../assets/js/Bus'

export default {
  name: "NavBar",
  data() {
    return {
      collapse: false,
      activeIndex: '1',
      isshow: true,
    };
  },
  created(){
    Bus.$on("getCollapse",(isCollapse)=>{
        this.collapse=isCollapse;
    });
  },
  methods: {
    goPage(url){
        this.$router.push(url)
    }
  }
};
</script>
<style scoped>
.el-menu {
  margin-top: 40px;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  min-height: 1000px;
}
.el-header {
  background-color: #f7f8f9;
  line-height: 60px;
}
.el-aside {
  background-color: #f7f8f9;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: auto !important;
}
.el-menu {
  background-color: #f7f8f9;
  border-right: none;
}

.fold-icon {
    font-size: 22px;
}
.nav-fold{
    display: inline;
}
.web-title{
    padding-left:15px;
}
</style>
