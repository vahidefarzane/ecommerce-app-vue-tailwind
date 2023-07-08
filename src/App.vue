<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>
<template>
  <RouterLink to="/admin/category/add">Add Category</RouterLink><br>
  <RouterLink to="/admin/category">Category</RouterLink><br>
  <RouterLink to="/admin">Admin</RouterLink>
  <RouterView/>
</template>

