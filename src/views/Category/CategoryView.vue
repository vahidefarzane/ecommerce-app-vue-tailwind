<template>
  <h1 class="text-center font-semibold	text-xl	my-4">Categories</h1>
  <div class="flex justify-center mb-4">
    <button class="bg-stone-400 text-white py-1 px-3 rounded-lg	">Add Category</button>
  </div>

  <div class="flex flex-wrap justify-center">
    <div v-for="category in allCategories " :key="category.id">
      <CategoryBox :category-id="category.id" :category-title="category.categoryName"
        :category-body="category.description" :category-img="category.imageUrl"
        @edit-category="editCategoryHandler(category.id)" />
    </div>


  </div>
</template>

<script setup>
import CategoryBox from "../../components/CategoryBox.vue"
import { defineProps } from 'vue'

const props = defineProps({
  allCategories: String,

})

const editCategoryHandler = (id) => {
  console.log(id);
}

</script>

<style scoped></style>