<template>
  <div class="macro-dots">
    <div class="carbs"></div>
    {{carbs}}g
    <div class="protein"></div>
    {{protein}}g
    <div class="fats"></div>
    {{fats}}g
  </div>
</template>

<script>
export default {
  name: "Macros",
  props: {
    carbs: {
      type: Number,
      default: 0
    },
    protein: {
      type: Number,
      default: 0
    },
    fats: {
      type: Number,
      default: 0
    }
  }
};
</script>