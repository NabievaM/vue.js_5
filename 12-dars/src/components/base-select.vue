<template>
  <select
    class="px-2"
    @input="$event => $emit('update.modelValue', $event.target.value)"
  >
    <option value="null" disabled>Limit</option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
  </select>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});
</script>
