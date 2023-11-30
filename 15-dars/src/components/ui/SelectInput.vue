<script setup>
const props = defineProps({
  options: Array,
});
</script>

<template>
  <select class="input_styles w-[300px] mt-4">
    <option
      v-for="(item, i) in props.options"
      :key="i + '-item'"
      :value="item"
      class="capitalize"
    >
      {{ item }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
