<template>
  <h1 class="text-center font-semibold	text-xl	my-4">Categories</h1>

  <button class="bg-stone-400 text-white py-1 px-3 rounded-lg	">Add Category</button>
  <div class="flex flex-wrap justify-center">
    <div v-for="category in allCategories " :key="category.id">
      <CategoryBox :category-id="category.id" :category-title="category.categoryName"
        :category-body="category.description" :category-img="category.imageUrl"
        @edit-category="editCategoryHandler(category.id)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from "axios";
import CategoryBox from "../../components/CategoryBox.vue"

const editCategoryHandler = (id) => {
  console.log(id);
}
const baseURL = "https://limitless-lake-55070.herokuapp.com"
const allCategories = ref([]);
axios.get(`${baseURL}/category/`).then((response) => {
  allCategories.value = response.data.slice(398)
})


</script>

<style scoped></style>