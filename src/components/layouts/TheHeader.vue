<template>
  <el-row :gutter="20">
    <el-col :span="3">
        <h1 class="web-title">预算明细</h1>
    </el-col>
    <el-col :span="19">
            <el-radio-group class="nav-fold" v-model="isCollapse">
            <el-button type="text" :label="false" @click="setCollapse()" v-show="isCollapse">
                <i class="el-icon-s-unfold fold-icon"></i>
            </el-button>
            <el-button type="text" :label="true" @click="setCollapse()" v-show="!isCollapse">
                <i class="el-icon-s-fold fold-icon"></i>
            </el-button>
        </el-radio-group>
        </el-col>
        <el-col :span="1" :offset="1">
            <el-button @click="goPage('/')" type="text" class="user-icon">
                <i class="el-icon-user-solid fold-icon" />
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
import Bus from '../../assets/js/Bus'

export default {
  name: 'TheHeader',
  data() {
    return {
      isCollapse: false
    }
  },
  methods:{
    //缩进侧边导航
    setCollapse(){
      Bus.$emit("getCollapse", this.isCollapse = !this.isCollapse);
    },
    goPage(url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #f7f8f9;
  line-height: 80px;
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