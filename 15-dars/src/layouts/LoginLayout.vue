<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loginData = reactive({
  username: "kminchelle",
  password: "0lelplR",
});

async function sendData() {
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    localStorage.setItem("token", data.token);

    router.push({ name: "admin-main" });
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <section class="login w-full h-screen flex items-center justify-center">
    <form
      class="flex flex-col w-[600px] p-5 rounded-xl shadow-2xl"
      @submit.prevent="sendData"
    >
      <h1 class="text-center text-2xl text-blue-500 font-bold mb-4 uppercase">
        Login:
      </h1>
      <input
        type="text"
        placeholder="Username"
        required
        v-model="loginData.username"
        class="input_styles w-full mb-4"
      />
      <input
        type="password"
        placeholder="password"
        minlength="6"
        required
        v-model="loginData.password"
        class="input_styles w-full mb-4"
      />
      <button
        type="submit"
        class="w-full outline-none bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Register
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
