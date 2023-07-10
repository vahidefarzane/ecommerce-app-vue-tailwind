<script >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="flex p-2 bg-emerald-300	">
        <RouterLink to="/admin/category/add" class="btn-header">Add Category</RouterLink><br>
        <RouterLink to="/admin/category" class="btn-header">Category</RouterLink><br>
        <RouterLink to="/admin" class="btn-header">Admin</RouterLink>
    </header>
</template>
<style>
.btn-header {
    background-color: rgb(5 150 105);
    border-radius: 0.5rem;
    padding: 0.4rem 0.7rem;
    margin: 0.3rem;
    color: white;
}
</style>