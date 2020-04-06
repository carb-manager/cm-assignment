<template>
  <div class="energy">
    <img class="icon" src="../../assets/energy.svg" v-if="showedIcon" />
    <span class="value">{{energyValue}}</span>
    <span class="units">{{energyUnits}}</span>
  </div>
</template>

<script>
import { caloriesToKiloJoules } from "../../utils";

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
    showedIcon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    energyValue() {
      return ["kj", "kilojoule", "kilojoules"].indexOf(
        this.units.toLowerCase()
      ) > -1
        ? caloriesToKiloJoules(this.value)
        : this.value;
    },
    energyUnits() {
      return ["kj", "kilojoule", "kilojoules"].indexOf(
        this.units.toLowerCase()
      ) > -1
        ? "kJ"
        : "Calories";
    }
  }
};
</script>

<style scoped>
.energy {
  display: flex;
  font-size: 12px;
}

.energy .icon {
  width: 18px;
  height: 18px;
  margin-top: -2px;
  margin-right: 6px;
}

.energy .value {
  margin-right: 3px;
}
</style>