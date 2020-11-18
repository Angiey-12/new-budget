import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "hash",
  //自动获取根目录路径
  // base:process.env.BASE_URL, 
  routes: [
    {
      path: '/signed-table',
      name: 'SignedTable',
      component: ()=>import("../pages/index/SignedTable")
    },
    {
      path: '/new-added-table',
      name: 'NewAddedTable',
      component: ()=>import("../pages/index/NewAddedTable")
    },
    {
      path: '/view-all',
      name: 'ViewAll',
      component: ()=>import("../pages/index/ViewAll")
    },
    {
      path: '/',
      name: 'Login',
      component: ()=>import("../pages/index/login")
    },
  ]
})
