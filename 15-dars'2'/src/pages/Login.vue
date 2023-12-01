<template>
  <div class="bg-green-300 text-center p-2">
    <h1 class="text-white text-2xl">Login Page</h1>
  </div>
  <div
    class="text-center mt-[150px] w-[600px] border-2 border-green-300 m-auto p-20"
  >
    <div class="mb-3">
      <input
        class="w-[90%] border-2 p-1"
        type="text"
        placeholder="Enter username"
        v-model="username"
      />
    </div>
    <div>
      <input
        class="w-[90%] border-2 p-1 mb-3"
        type="password"
        placeholder="Enter password"
        v-model="password"
      />
    </div>
    <button
      @click="onLogin"
      class="w-[100px] bg-green-300 text-white rounded-lg p-3 text-xl"
    >
      Login
    </button>
  </div>
</template>

<script setup>
import { useLogin } from "../composables/login";

const { username, password, onLogin } = useLogin();
</script>
