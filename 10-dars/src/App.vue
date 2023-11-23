<script setup>
import { useProduct } from "./composables";
import { onMounted, ref } from "vue";

const { products, limitSize, onLimitChange, category, categorySize } =
  useProduct();

const searchWord = ref("");
const searchProduct = async () => {
  if (searchWord.value) {
    const res = await fetch(
      `http://localhost:3000/products?q=${searchWord.value}`
    );
    const data = await res.json();
    products.value = data;
  }
};

onMounted(() => {
  getAll();
});
</script>

<template>
  <!-- <section class="bg-wrapper h-screen">
    <nav class="container mx-auto flex items-center pt-5 mb-6">
      <div class="flex ms-auto justify-between">
        <a class="mr-3" href="/">Home</a>
        <a class="mr-3" href="/">Product</a>
        <a class="mr-3" href="/">Feature</a>
        <a class="mr-3" href="/">Testimonial</a>
      </div>
      <button class="btn">Get started</button>
    </nav>
    <main class="container mx-auto flex items-center">
      <div class="w-1/2">
        <span class="uppercase text-blue-700 text-sm"
          >Lorem ipsum dolor sit.</span
        >
        <h3 class="text-6xl font-bold text-mainFontColor mb-3">
          Lorem ipsum dolor sit amet.
        </h3>
        <p class="text-base text-mainFontColor mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam
          commodi ea deleniti perspiciatis aspernatur maxime. Reiciendis rem
          error, quidem illum assumenda recusandae tenetur cupiditate.
        </p>
        <div>
          <button class="btn me-5">Get started</button>
          <button
            class="btn border-2 border-blue-600 bg-transparent text-mainFontColor"
          >
            Gallery
          </button>
        </div>
      </div>
      <div>
        <img src="./assets/images/products.png" alt="" />
      </div>
    </main>
  </section> -->

  <div>
    <select v-model="limitSize" @change="onLimitChange">
      <option value="null" disabled>Limit</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>

    <select v-model="categorySize" @change="category">
      <option value="null" disabled>Category</option>
      <option value="men's clothing">Men's clothing</option>
      <option value="women's clothing">Women's clothing</option>
      <option value="jewelery">Jewelery</option>
      <option value="electronics">Electronics</option>
    </select>
    
  </div>

  <div class="container mt-6 flex">
    <input
      type="text"
      class="py-2 px-4 outline-none border border-gray-500 rounded-lg w-1/2"
      placeholder="Search"
      v-model="searchWord"
      @input="searchProduct"
    />
    <button
      @click="searchProduct"
      class="bg-blue-600 text-white px-6 rounded-lg ml-3"
    >
      Search
    </button>
  </div>

  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-wrap">
      <div
        v-for="product of products"
        :key="product.id"
        class="xs:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 p-3"
      >
        <div class="cursor-pointer hover:shadow-md p-2 transition-shadow">
          <img :src="product.image" width="300" height="350" alt="" />
          <h5 class="my-2 text-lg hover:text-blue-500">{{ product.title }}</h5>
          <p class="truncate text-gray-500 ttext-end">
            {{ product.description }}
          </p>
          <span class="font-semibold text-lg my-1">{{ product.price }}</span>
          <div class="flex items-center justify-between">
            <span class="bg-green-500 p-0.5 text-white rounded-lg shadow">{{
              product.category
            }}</span>
            <span>{{ product.rating.rate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: calc(100% / 4 - 14px);
  margin-bottom: 14px;
  margin: 7px;
}
/* .bg-wrapper {
  background-image: url('./assets/images/bg-wrap.png');
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>
