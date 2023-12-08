<template>
  <nav
    class="bg-black flex text-white justify-between w-full h-[80px] px-[50px] border-b-2 border-gray-900"
  >
    <div class="pt-[20px] text-2xl text-gold">
      <p>Badiiyat</p>
    </div>

    <div class="flex gap-10 pt-[25px] ml-[400px]">
      <router-link to="/">Bosh sahifa</router-link>
      <p>Nasr</p>
      <p>Nazm</p>
      <p>Maqolalar</p>
      <p>Forum</p>
      <router-link to="/admin">Admin Panel</router-link>
    </div>
    <div class="pt-[15px]">
      <img
        class="rounded-full"
        src="../assets/images/admin-avatar.png"
        alt=""
      />
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
