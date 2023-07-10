<script setup>
import { defineProps } from 'vue';
defineProps({
    label: String,
    modelValue:String
})

</script>

<template>
    <div class="flex justify-between mb-3">
        <label for="category-name">{{ label }}</label>
        <input id="category-name" :v-model="modelValue" class="w-4/5  border py-1 rounded-lg" />
    </div>
</template>
