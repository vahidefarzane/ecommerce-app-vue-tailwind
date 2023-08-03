<template>
    <div class="flex flex-col justify-between w-96 h-96 border p-4 m-1">
        <div class="flex justify-center">
            <img :src="productImg" class="w-52	h-52" alt="">
        </div>
        <h2 class="my-3 font-semibold	">{{ productTitle }}</h2>
        <p class="h-28">{{ productBody.slice(0,100) }}</p>
    </div>
</template>
<script setup>

defineProps({
    productTitle: String,
    productBody: String,
    productImg: String,

})


</script>
  