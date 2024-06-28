<script setup lang="ts">
import {useMenu} from './useMenu'
const {items} = useMenu();

</script>

<template>
  <el-aside width="200px" class="aside">
    <el-menu  
      default-active="2"  
      class="el-menu-vertical-demo"  
      router  
    >  
      <el-menu-item  
        v-for="item in items"  
        :key="item.url"  
        :index="item.url"  
      >  
      <el-icon :name="item.icon"></el-icon> 
        <span>{{ item.name }}</span>  
      </el-menu-item>  
    </el-menu>  
  </el-aside>
</template>

<style scoped>

</style>