<template>
  <div class="recipe-duration">
    <ClockIcon/> {{duration}}
  </div>
</template>

<script>
import ClockIcon from '../../assets/clock.svg';
import {convertMinsToHrsMins} from '../../helpers.js';

export default {
  name: "RecipeDuration",
  props: {
    minutes: {
      type: Number,
      default: 0
    }
  },
  components: {
    ClockIcon
  },
  computed: {
    duration() {
      return convertMinsToHrsMins(this.minutes);
    }
  },
};
</script>

<style scoped>
</style>
