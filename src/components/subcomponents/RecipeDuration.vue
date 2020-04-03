<template>
  <div class="recipe-duration">
    <ClockIcon class="clock-icon" v-if="showIcon"/> {{duration}}
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
    },
    showIcon: {
      type: Boolean,
      default: true
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
.clock-icon{
  margin-right: 5px;
  vertical-align: top;
  margin-top: -2px;
}
</style>
