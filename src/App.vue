<template>
  <div id="app">
    <el-container>
      <el-header><TheHeader /></el-header>
      <el-container>
        <NavBar/>
        <router-view></router-view>
      </el-container>
    </el-container>
      <el-backtop>
    <el-button icon="el-icon-arrow-up" circle></el-button>
  </el-backtop>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import NavBar from '@/components/layouts/NavBar';

export default {
  name: 'App',
  components: {
    TheHeader,
    NavBar,
  },
  data() {
    return {
    }
  },
}
</script>

<style>
</style>
