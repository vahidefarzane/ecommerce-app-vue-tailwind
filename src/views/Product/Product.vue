<template>
    <h1 class="text-center font-semibold text-xl	my-4">Products</h1>
    <div class="flex justify-center mb-4">
        <button class="bg-stone-400 text-white py-1 px-3 rounded-lg	">Add Product</button>
    </div>

    <div class="flex flex-wrap justify-center">
        <div v-for="product in allProducts " :key="product.id">
            <ProductBox :product-id="product.id" :product-title="product.name" :product-body="product.description"
                :product-img="product.imageURL" />
        </div>
    </div>
</template>
<script setup>
import ProductBox from "../../components/ProductBox.vue"
import { defineProps } from 'vue'

const props = defineProps({
    allProducts: String,

})

</script>

