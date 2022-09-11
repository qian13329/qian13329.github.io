import Vue from 'vue'
import VueRouter from 'vue-router'
import insert from '../views/insert.vue'

// 登入
import Login from '../views/Login.vue'
import AdminLogin from '../views/AdminLogin.vue'
import UserLogin from '../views/UserLogin.vue'

// 今日事務
import CheckIndex from '../views/CheckIndex.vue'

// 首頁
import Index from '../views/Index.vue'
import PatientList from '../views/PatientList.vue'

// 新增資料
import insertPInform from '../views/insertPInform.vue'
import insertPInformBasic from '../views/insertPInformBasic.vue'
import insertPInformBiochemical from '../views/insertPInformBiochemical.vue'
import insertPInformCancer from '../views/insertPInformCancer.vue'

// 憂鬱症專區
import DepressionIndex from '../views/DepressionIndex.vue'

// 設定
import setting from '../views/setting.vue';
import settingUpdatePwd from '../views/settingUpdatePwd.vue';
import settingSchedule from '../views/settingSchedule.vue';
import settingProfile from '../views/settingProfile.vue';

// 編輯頁面
import editPInformBasic from '../views/editPInformBasic.vue';
import editPInformCancer from '../views/editPInformCancer.vue'

Vue.use(VueRouter)

const routes = [
  // 登入
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  {
    path: '/AdminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },

  {
    path: '/UserLogin',
    name: 'UserLogin',
    component: UserLogin
  },

  // 今日事務
  {
    path: '/CheckIndex',
    name: 'CheckIndex',
    component: CheckIndex
  },

  // 首頁
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/PatientList/:pid',
    name: 'PatientList',
    component: PatientList,
    props: true
  },

  // 新增資料
  {
    path: '/insert',
    name: 'insert',
    component: insert,

  },
  {
    path: '/insertPInform',
    name: 'insertPInform',
    component: insertPInform
  },
  {
    path: '/insertPInformBasic',
    name: 'insertPInformBasic',
    component: insertPInformBasic
  },
  {
    path: '/insertPInformBiochemical',
    name: 'insertPInformBiochemical',
    component: insertPInformBiochemical
  },
  {
    path: '/insertPInformCancer',
    name: 'insertPInformCancer',
    component: insertPInformCancer
  },


  // 憂鬱症專區
  {
    path: '/DepressionIndex',
    name: 'DepressionIndex',
    component: DepressionIndex
  },

  // 設定
  {
    path: '/setting',
    name: 'setting',
    component: setting,
  },
  {
    path: '/settingUpdatePwd',
    name: 'settingUpdatePwd',
    component: settingUpdatePwd,
  },
  {
    path: '/settingSchedule',
    name: 'settingSchedule',
    component: settingSchedule,
  },
  {
    path: '/settingProfile',
    name: 'settingProfile',
    component: settingProfile,
  },

  // 編輯
  {
    path: '/editPInformBasic',
    name: 'editPInformBasic',
    component: editPInformBasic
  },
  {
    path: '/editPInformCancer',
    name: 'editPInformCancer',
    component: editPInformCancer
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
