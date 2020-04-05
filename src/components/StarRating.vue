<template>
  <div class="cm-c-star-rating">
    <div aria-hidden="true" class="cm-c-star-rating__inner">
      <img
        v-for="index in Math.floor(stars)"
        :key="`onstar-${index}`"
        alt="Filled star"
        src="../assets/star_on.svg"
      />
      <img alt="Filled star" v-if="stars % 1 !== 0" src="../assets/star_half.svg" />
      <img
        v-for="index in 5 - Math.round(stars)"
        :key="`offstar-${index}`"
        alt="Unfilled star"
        src="../assets/star_off.svg"
      />
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
