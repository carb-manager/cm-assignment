<template>
  <div class="cm-c-star-rating">
    <div aria-hidden="true">
      <span v-for="index in Array(5).keys()" :key="index">
        <img alt="Filled star" v-if="index < stars" src="../assets/star_on.svg" />
        <img alt="Unfilled star" v-else src="../assets/star_off.svg" />
      </span>
      <span class="cm-u-visually-hidden">{{ stars }} stars</span>
    </div>
    <div class="cm-c-star-rating__ratings">{{ ratings }} ratings</div>
  </div>
</template>

<script>
export default {
  name: "star-rating",
  props: {
    stars: Number,
    ratings: Number
  }
};
</script>
