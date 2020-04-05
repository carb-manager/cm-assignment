<template>
  <div class="energy-units">
    <Icon class="calories-icon" v-if="showIcon" />
    {{energyValue}} {{energyUnits}}
  </div>
</template>

<script>
import Icon from "../../assets/cals.svg";

export default {
  name: "EnergyUnits",
  components: {
    Icon
  },
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
      return this.units === "kJ" ? Math.round(4.184 * this.value) : this.value;
    },
    energyUnits() {
      return ["kj", "kilojoule", "kilojoules"].indexOf(
        this.unit.toLowerCase()
      ) > -1
        ? "kJ"
        : "Calories";
    }
  },
  methods: {}
};
</script>s