<template>
  <label v-if="desc" class="block mb-1" :for="desc">{{ label }}</label>
  <textarea
    class="w-full"
    :id="desc"
    :value="value"
    :cols="cols"
    :rows="rows"
    :placeholder="placeholder"
    @input="$event => $emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script setup>
const props = defineProps({
  desc: {
    type: String,
    default: "",
  },
  label: String,
  placeholder: String,
  value: String,
  cols: String,
  modelValue: String,
  rows: String,
});
</script>
