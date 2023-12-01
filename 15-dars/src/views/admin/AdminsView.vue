<template>
  <h1 class="text-2xl text-slate-600 text-center mb-4">Admins</h1>
  <div class="flex flex-wrap gap-8">
    <div v-for="user of users" :key="user.id">
      <div class="w-60 h-100 border-2 bg-neutral-300 flex-col p-5">
        <h4>{{ user.name }}</h4>
        <h3>{{ user.username }}</h3>
        <h3>{{ user.email }}</h3>
        <p>{{ user.address.street }}</p>
        <h3>{{ user.phone }}</h3>
        <p>{{ user.website }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const users = ref([]);

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => (users.value = json));
}
onMounted(() => {
  fetchUsers();
});
</script>

<style></style>
