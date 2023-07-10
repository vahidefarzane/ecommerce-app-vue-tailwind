<template >
  <div class="flex flex-col items-center  py-2 ">
    <div class="my-2">
      <h1 class="text-lg	font-semibold	">Add Category</h1>
    </div>
    <form @submit.prevent="addCategory" class="flex flex-col justify-center  w-2/5 m-5">
      <!-- <Input label="name" v-model="categoryName"/> -->
      <div class="flex justify-between mb-3">
        <label for="category-name">name:</label>
        <input id="category-name" type="text" v-model="categoryName" class="w-4/5  border py-1 rounded-lg" />
      </div>
      <div class="flex justify-between mb-3">
        <label for="category-desc">description:</label>
        <textarea id="category-desc" v-model="categoryDescription" class="w-4/5 border py-1 rounded-lg" />
      </div>
      <div class="flex justify-between mb-3">
        <label for="category-image">url image:</label>
        <input id="category-image" type="text" v-model="categoryUrlImage" class="w-4/5 border  py-1 rounded-lg		" />
      </div>
      <button type="submit" class="btn-header">add category</button>
    </form>
  </div>
</template>

<script setup>
import Input from "../../components/Input.vue"
import { ref } from "vue";
import axios from "axios"
import swal from 'sweetalert';


const categoryName = ref("")
const categoryDescription = ref("")
const categoryUrlImage = ref("")

const addCategory = () => {

  const newCategory = {
    categoryName: categoryName.value,
    description: categoryDescription.value,
    imageUrl: categoryUrlImage.value,
  }
  const baseURL = "https://limitless-lake-55070.herokuapp.com/"
  axios({
    method: "post",
    url: `${baseURL}/category/create`,
    data: JSON.stringify(newCategory),
    headers: {
      "Content-Type": "application/json"
    },
  }).then((res) => {
    console.log(res.config.data);
    swal({
      text: "category added successfully",
      icon: "success"
    })

  }).catch(() => {
    swal({
      text: "category didnot add",
      icon: "error"
    })
  })

}


</script>