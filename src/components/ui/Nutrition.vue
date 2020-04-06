<template>
  <div class="nutrition">
    <div class="carbs">
      <img class="dot" v-bind:src="getImgUrl('carbs-dot.svg')" />
      <span>{{carbs}}g</span>
    </div>
    <div class="protein">
      <img class="dot" v-bind:src="getImgUrl('protein-dot.svg')" />
      <span>{{protein}}g</span>
    </div>
    <div class="fats">
      <img class="dot" v-bind:src="getImgUrl('fats-dot.svg')" />
      <span>{{fats}}g</span>
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
  font-size: 12px;
}

.nutrition .carbs,
.nutrition .protein,
.nutrition .fats {
  width: 41px;
}
</style>
