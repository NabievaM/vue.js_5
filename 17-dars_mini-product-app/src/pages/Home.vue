<template>
  <Navbar />
  <div v-for="product of products">
    {{ product.title }}
    {{ product.description }}
    {{ product.price }}
    <img
      :src="product.images[0]"
      alt=""
    />
    {{ product.category }}
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useHome } from "../composables/home";
const { products } = useHome();
</script>

<style lang="scss" scoped></style>
