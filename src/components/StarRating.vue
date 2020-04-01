<template>
  <div class="cm-star-rating">
    <v-star-rating
      :rating="rating.star"
      :increment="0.5"
      :star-size="size"
      inactive-color="#AAAEB3"
      active-color="#FDA01E"
      :show-rating="false"
    />
    <span v-if="hasLabel" :data-testid="testId ? `${testId}__count` : null"
      >{{ rating.count }} ratings</span
    >
  </div>
</template>

<script>
import VStarRating from 'vue-star-rating';

export default {
  name: 'StarRating',
  components: { VStarRating },
  props: {
    rating: {
      type: Object,
      required: true
    },
    hasLabel: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 20
    },
    testId: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.cm-star-rating {
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #1ca677;
  }
}
</style>
