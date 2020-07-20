<template>
  <el-row class="navmenu">
    <el-col>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <span>vuex学习</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link :to="{path:'/state'}">State状态获取</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link :to="{path:'/getter'}">Getter</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link :to="{path:'/mutation'}">Mutation</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link :to="{path:'/action'}">Action</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.navmenu {
  width: 200px;
}
</style>