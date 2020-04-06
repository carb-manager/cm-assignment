<template>
  <div class="durations">
    <img class="icon" v-bind:src="getImgUrl('clock.svg')" v-if="isShowedIcon" />
    <span v-text="durations" class="time"></span>
  </div>
</template>

<script>
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
      let hours = Math.floor(this.minutes / 60);
      let minutes = this.minutes % 60;
      let durations = hours > 0 ? `${hours}h ` : ``;
      durations += minutes > 0 ? `${minutes}m ` : ``;
      return durations;
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
.durations {
  display: flex;
  margin-right: 30px;
}

.durations .time {
  font-family: Proxima Nova;
  font-size: 12px;
}

.durations .icon {
  width: 18px;
  height: 18px;
  margin-top: -2px;
  margin-right: 6px;
}
</style>
