<template>
  <button class="btn bg-lime-400 m-5">
    <router-link to="/">Home</router-link>
  </button>
  <div class="container mx-auto">
    <div class="cursor-pointer">
      <img
        :src="singleProduct.image"
        width="500"
        height="400"
        alt=""
      />
      <h5 class="my-2 text-xl hover:text-blue-500">
        {{ singleProduct.title }}
      </h5>
      <p class="text-gray-500 ttext-end">
        {{ singleProduct.description }}
      </p>
      <div class="flex justify-between">
        <span class="font-semibold text-xl my-1">{{
          singleProduct.price
        }}</span>
      </div>
      <div class="flex items-center justify-between mb-10">
        <span class="bg-green-500 p-0.5 text-white rounded-lg shadow">{{
          singleProduct.category
        }}</span>
        <span>{{ singleProduct.rating }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useHome } from "../composables";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const { fetchSingleProduct, singleProduct } = useHome();

onMounted(() => {
  fetchSingleProduct(route?.params?.id);
});
</script>
