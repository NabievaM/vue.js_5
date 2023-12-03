<template>
  <Navbar />
  <div class="flex flex-wrap justify-around gap-4 mt-[20px] h-[400px]">
    <div v-for="product of products">
      <div
        class="card"
        style="width: 18rem"
      >
        <div class="w-[200px] h-[200px] mx-auto p-1">
          <img
            :src="product.images[0]"
            class="card-img-top"
            alt="..."
          />
        </div>

        <div class="card-body">
          <h5 class="card-title text-green-500 font-bold">
            {{ product.title }}
          </h5>
          <p class="card-text">
            {{ product.description }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-bold">{{ product.price }}$</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useHome } from "../composables/home";
const { products } = useHome();
</script>

<style lang="scss" scoped></style>
