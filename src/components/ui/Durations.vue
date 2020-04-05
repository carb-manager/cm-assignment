<template>
  <div class="durations">
    <Clock class="clock-icon" v-if="isShowedIcon" />
    {{durations}}
  </div>
</template>
<script>
import Clock from "../../assets/clock.svg";

export default {
  name: "Durations",
  props: {
    minutes: {
      type: Number,
      default: 0
    },
    isShowedIcon: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Clock
  },
  computed: {
    durations() {
      let hours = Math.floor(this.minutes / 60);
      let minutes = this.minutes % 60;
      let durations = hours > 0 ? `${hours}h ` : ``;
      durations += minutes > 0 ? `${minutes}m ` : ``;
      return durations;
    }
  }
};
</script>