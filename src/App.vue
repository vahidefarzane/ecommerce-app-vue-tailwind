<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';

const allCategories = ref([]);
const allProducts = ref([]);
const baseURL = "https://limitless-lake-55070.herokuapp.com"
axios.get(`${baseURL}/category/`).then((response) => {
  allCategories.value = response.data.slice(407)
}).catch((err) => {
  console.log(err);
})
axios.get(`${baseURL}/product/`).then((response) => {
  allProducts.value = response.data
}).catch((err) => {
  console.log(err);
})

</script>
<template>
  <Header />
  <RouterView :baseURL="baseURL" :allCategories="allCategories" :allProducts="allProducts"></RouterView>
</template>

