<script setup>
import { useTodo } from "./composables";
const { todos, limitSize, onLimitChange, searchTodo, searchWord } = useTodo();
</script>

<template>
  <div class="m-5">
    <select
      class="px-2 bg-blue-600 text-white rounded-lg"
      v-model="limitSize"
      @change="onLimitChange"
    >
      <option value="null" disabled>Limit</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
      <option value="60">60</option>
      <option value="70">70</option>
      <option value="80">80</option>
      <option value="90">90</option>
      <option value="100">100</option>
    </select>
  </div>

  <div class="container mx-auto mt-6 flex mb-10">
    <input
      type="text"
      class="py-2 px-4 outline-none border border-gray-500 rounded-lg w-1/2"
      placeholder="Search"
      v-model="searchWord"
      @input="searchTodo"
    />
    <button
      @click="searchTodo"
      class="bg-blue-600 text-white px-6 rounded-lg ml-5"
    >
      Search
    </button>
  </div>

  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-wrap gap-10">
      <div v-for="todo of todos" :key="todo.id">
        <div class="card">
          <h4 class="text-lg">{{ todo.title }}</h4>
          <h5 class="text-white">Completed: {{ todo.completed }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  height: 130px;
  background-color: rgb(134, 134, 231);
  padding: 10px;
  border-radius: 5px;
}
</style>
