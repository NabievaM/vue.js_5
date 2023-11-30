<script setup>
import SelectInput from "../../components/ui/SelectInput.vue";
const options = [1, 2, 3, 4, 5, 6];
</script>

<template>
  <main class="admin-main">
    <h1>1. Css code optimisation</h1>
    <h1>2. Adminka scroll fixed</h1>
    <h1>3. redirect route</h1>
    <h1>4. scrollBehavior (top, hash)</h1>
    <h1>5. NProgress (beforeResolve, afterEach)</h1>
    <SelectInput :options="options" />
  </main>
</template>

<style></style>
