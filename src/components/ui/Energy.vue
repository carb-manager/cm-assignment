<template>
  <div class="energy">
    <img class="icon" v-bind:src="getImgUrl('energy.svg')" v-if="isShowedIcon" />
    {{energyValue}} {{energyUnits}}
  </div>
</template>

<script>
export default {
  name: "Energy",
  props: {
    value: {
      type: Number,
      default: 0
    },
    units: {
      type: String,
      default: "Calories"
    },
    isShowedIcon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    energyValue() {
      return this.units === "kJ" ? Math.round(4.184 * this.value) : this.value;
    },
    energyUnits() {
      return ["kj", "kilojoule", "kilojoules"].indexOf(
        this.units.toLowerCase()
      ) > -1
        ? "kJ"
        : "Calories";
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
.energy {
  display: flex;
  margin-right: 90px;
  font-family: Proxima Nova;
  font-size: 12px;
}

.energy .icon {
  width: 18px;
  height: 18px;
  margin-top: -2px;
  margin-right: 8px;
}
</style>