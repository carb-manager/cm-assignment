<template>
  <div class="ratings">
    <div class="stars">
      <span class="star-gold" v-for="index in Math.floor(starsCount)" :key="'goldstar'+index">
        <img src="../../assets/full-filled-star.svg" />
      </span>
      <span class="star-half" v-if="starsCount % 1 != 0">
        <img src="../../assets/half-filled-star.svg" />
        <img src="../../assets/empty-star.svg" />
      </span>
      <span class="star-grey" v-for="index in 5-Math.round(starsCount)" :key="'greystar'+index">
        <img src="../../assets/empty-star.svg" />
      </span>
    </div>
    <div v-if="showedRatingsCount" class="ratings-count">
      <span class="number">{{ratingsCount}}</span>
      <span v-if="ratingsCount <= 1">rating</span>
      <span v-if="ratingsCount > 1">ratings</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ratings",
  props: {
    rating: {
      type: Number,
      default: 0
    },
    ratingsCount: {
      type: Number,
      default: 1
    },
    showedRatingsCount: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    starsCount() {
      let rating = Math.min(Math.max(parseFloat(this.rating), 0), 5);
      return Math.round(rating * 2) / 2;
    }
  }
};
</script>

<style scoped>
.ratings {
  display: flex;
  margin: 5px 0;
}

.ratings .stars {
  margin-right: 5px;
}

.ratings .stars img {
  width: 12px;
  height: 12px;
}

.ratings .ratings-count {
  color: #24a97c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
}

.ratings .star-half img:nth-child(2) {
  margin-left: -13px;
  opacity: 0.5;
}
</style>