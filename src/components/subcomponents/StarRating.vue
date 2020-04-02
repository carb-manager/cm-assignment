<template>
  <div class="star-ratings">
    <div class="stars">
      <span class="star-gold" v-for="index in Math.floor(starCount)" :key="'goldstar'+index">
        <svg width="12" height="12" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.02564 8.03684L8.13149 10L7.30728 6.3L10.0513 3.81053L6.43785 3.48947L5.02564 0L3.61344 3.48947L0 3.81053L2.744 6.3L1.91979 10L5.02564 8.03684Z" fill="#FDA01E"/>
        </svg>
      </span>
      <span class="star-half" v-if="starCount % 1 != 0">
        <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H24V24H0V0Z" fill="white"/>
          <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12 18.0737L18.18 22L16.54 14.6L22 9.62105L14.81 8.97895L12 2L9.19 8.97895L2 9.62105L7.46 14.6L5.82 22L12 18.0737Z" fill="#AAAEB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.0737V2L9.19 8.97895L2 9.62105L7.46 14.6L5.82 22L12 18.0737Z" fill="#FDA01E"/>
        </svg>
      </span>
      <span class="star-grey" v-for="index in 5-Math.round(starCount)" :key="'greystar'+index">
        <svg width="12" height="12" viewBox="0 -1 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.07694 9.64421L9.73739 12L8.76601 7.56L12 4.57263L7.74132 4.18737L6.07694 0L4.41255 4.18737L0.15387 4.57263L3.38786 7.56L2.41648 12L6.07694 9.64421Z" fill="#AAAEB3"/>
        </svg>
      </span>
    </div>
    <div v-if="showRatingsCount" class="ratings-count">{{ratingsCount}} rating<span v-if="ratingsCount != 1">s</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MacroDots",
  props: {
    rating: {
      type: Number,
      default: 0
    },
    ratingsCount: {
      type: Number,
      default: 1
    },
    showRatingsCount: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    starCount() {
      return Math.round(this.rating*2)/2;
    }
  },
};

</script>

<style scoped>
  .star-ratings {
  }

  .star-ratings > div{
    display: inline-block;
  }

  .ratings-count{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #1CA677;
  }

  .stars{
    margin-right: 10px;
  }

</style>
