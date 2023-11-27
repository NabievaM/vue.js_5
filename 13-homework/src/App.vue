<script setup>
import { onMounted, ref } from "vue";

const products = ref(null);
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  products.value = await res.json();
}
onMounted(() => {
  getProducts();
});
</script>

<template>
  <pre>{{ products }}</pre>
</template>

<style scoped></style>
