<template>
  <div class="flex flex-col justify-between w-96 h-96	border p-3 m-1">

    <div class="flex justify-center">
      <img :src="categoryImg" class="w-52	h-52" alt="">
    </div>
    <h2>{{ categoryTitle }}</h2>
    <p class="h-28">{{ categoryBody }}</p>
    <router-link to="">
      <button @click="$emit('edit-category')" class="bg-stone-400	text-white py-1 px-3 rounded-lg	">edit</button>
    </router-link>



  </div>
</template>

<script setup>

defineProps({
  categoryTitle: String,
  categoryBody: String,
  categoryImg: String,

})


</script>

