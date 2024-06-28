<script setup lang="ts">
import NavMenu from './navMenu.vue'

</script>

<template>
  <div id="module">
    <el-container>
      <NavMenu />
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>