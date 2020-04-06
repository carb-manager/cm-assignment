<template>
  <div class="durations">
    <img class="icon" src="../../assets/clock.svg" v-if="isShowedIcon" />
    <span v-text="durations" class="time"></span>
  </div>
</template>

<script>
import { getDurations } from "../../utils";

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
  computed: {
    durations() {
      return getDurations(this.minutes);
    }
  }
};
</script>

<style scoped>
.durations {
  display: flex;
}

.durations .time {
  font-size: 12px;
}

.durations .icon {
  width: 18px;
  height: 18px;
  margin-top: -2px;
  margin-right: 8px;
}
</style>
