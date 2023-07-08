<template>
  <div class="post-container">
    <div v-for="post in allPostsArray " :key="post.id">
      <CategoryBox :post-id="post.id" :post-title="post.title" :post-body="post.body"
                   @edit-post="editPostHandler(post.id)"/>
    </div>
  </div>


</template>

<script setup>
import {ref} from 'vue'
import axios from "axios";
import CategoryBox from "../../components/CategoryBox.vue"

const editPostHandler = (id) => {
  console.log(id)
}
const allPostsArray = ref([]);
axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  allPostsArray.value = response.data
})


</script>

<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
}

</style>