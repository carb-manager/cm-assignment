<template>
  <div class="nutrition">
    <div class="carbs">
      <img class="dot" v-bind:src="getImgUrl('carbs-dot.svg')" />
      {{carbs}}g
    </div>
    <div class="protein">
      <img class="dot" v-bind:src="getImgUrl('protein-dot.svg')" />
      {{protein}}g
    </div>
    <div class="fats">
      <img class="dot" v-bind:src="getImgUrl('fats-dot.svg')" />
      {{fats}}g
    </div>
  </div>
</template>

<script>
export default {
  name: "Nutrition",
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
  },
  methods: {
    getImgUrl(fileName) {
      return require("../../assets/" + fileName);
    }
  }
};
</script>

<style scoped>
.nutrition {
  display: flex;
  font-family: Proxima Nova;
  font-size: 12px;
}

.durations .icon {
  width: 18px;
  height: 18px;
  margin-top: -2px;
}
</style>
