<script setup>
import { ref } from "vue";
const text = ref("Vue");

const fruits = ref(["Apple", "Pear", "Banana", "Orange"]);

function show_fruits(f) {
  console.log(f);
}
</script>

<template>
  <div>Hello {{ text }}</div>
  <div v-for="f of fruits">
    <div @click="show_fruits(f)">
      <div>{{ f }}</div>
    </div>
  </div>
  <br /><br />

  <div>
    <img src="https://picsum.photos/id/1/200/300" alt="" />
  </div>
  <button>Randomize image</button>
</template>
