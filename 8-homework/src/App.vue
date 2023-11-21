<script setup>
import { ref } from "vue";
const productlist = ref([]);
const loading = ref(false);

async function fetchProducts() {
  loading.value = true;
  const res = await fetch("https://fakestoreapi.com/products");
  productlist.value = await res.json();
  if (!productlist.length) {
    loading.value = false;
    return;
  }
  loading.value = false;
}
</script>

<template>
  <button @click="fetchProducts">View Products</button>
  <div v-show="loading" class="loader"></div>
  <div class="container">
    <div class="content" v-for="product of productlist">
      <div class="box">
        <img :src="product.image" alt="" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <h5>{{ product.price }}$</h5>
        <button>Add Cart</button>
        <button style="background-color: blueviolet; color: white">Buy</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  gap: 20px;
}
.box h3 {
  margin-top: -15px;
  text-align: start;
  overflow: hidden;
  height: 50px;
}
.box p {
  margin-top: -15px;
  text-align: start;
  width: auto;
  height: 50px;
  overflow: hidden;
}
.box h5 {
  text-align: start;
  margin-top: -10px;
}
.content {
  width: 300px;
  height: 500px;
}
.box {
  width: auto;
  height: 400px;
  background-color: #eee;
  padding: 20px;
}
.box button {
  text-align: left;
}
.content img {
  width: 200px;
  height: 200px;
  margin: 15px;
}
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #fff #fff transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent #ff3d00 #ff3d00;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
