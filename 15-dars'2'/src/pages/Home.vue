<template>
  <nav-bar :is-auth="isAuth" @logout="onLogout" />

  <!-- <KeepAlive> -->
  <div class=" text-slate-500 text-center text-2xl p-2 mt-1">
    <h1>All Products</h1>
  </div>
  <div class="flex flex-wrap p-10">
    <div
      class="border-2 border-slate-300"
      v-for="product of products"
      :key="product.id"
    >
      <ProductCard :product="product" />
    </div>
  </div>

  <!-- </KeepAlive> -->
</template>

<script setup>
import { useHome } from "../composables/home";
import { useLogin } from "../composables/login";

import ProductCard from "../components/ProductCard.vue";
import NavBar from "../components/Navbar.vue";

const { products, onLogout } = useHome();
const { isAuth } = useLogin();
</script>

<style>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
