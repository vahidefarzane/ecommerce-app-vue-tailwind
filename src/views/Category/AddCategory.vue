<template>
  <h1>Add Category</h1>
  <form @submit.prevent="addCategory">
    <div>
      <label for="category-name">name</label>
      <input id="category-name" type="text" v-model="categoryName"/>
    </div>
    <div>
      <label for="category-desc">description</label>
      <textarea id="category-desc" v-model="categoryDescription"/>
    </div>
    <div>
      <label for="category-image">url image</label>
      <input id="category-image" type="text" v-model="categoryUrlImage"/>
    </div>
    <input type="submit" value="add category"/>

  </form>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios"

const categoryName = ref("")
const categoryDescription = ref("")
const categoryUrlImage = ref("")

const addCategory = () => {
  console.log(categoryName.value, categoryDescription.value, categoryUrlImage.value)
  const newCategory = {
    categoryName: categoryName.value,
    categoryDescription: categoryDescription.value,
    categoryUrlImage: categoryUrlImage.value,
  }
  // const baseURL = ""
  axios({
    method: "post",
    url: "",
    data: JSON.stringify(newCategory),
    headers: {
      "Content-Type": "application/json"
    },
  }).then(() => {

  })

}


</script>

<style scoped>

</style>