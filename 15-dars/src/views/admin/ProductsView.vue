<template>
  <h1 class="text-2xl text-slate-600 text-center mb-4">Products</h1>
  <div class="flex flex-wrap gap-8">
    <div v-for="product of products" :key="product.id">
      <div class="w-60 h-100 border-2 bg-neutral-300 flex-col p-5">
        <h4>{{ product.title }}</h4>
        <h3>{{ product.description }}</h3>
        <h3>{{ product.price }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const products = ref([]);

function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(json => (products.value = json));
}
onMounted(() => {
  fetchProducts();
});
</script>

<style></style>
