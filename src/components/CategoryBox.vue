<template>
  <div class="category-box" >
    <div @click="$emit('edit-post')">
      <h2>{{ props.postTitle }}</h2>
      <h3>{{ props.postBody }}</h3><br>
      <router-link to="">
        <button>edit</button>
      </router-link>


    </div>
  </div>

</template>

<script setup>

const props = defineProps({
  postTitle: String,
  postBody: String,
})


</script>

<style scoped>
.category-box {
  width: 400px;
  height: 300px;
  border: 1px solid grey;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

</style>