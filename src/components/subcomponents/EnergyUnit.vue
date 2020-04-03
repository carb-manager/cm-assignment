<template>
  <div class="energy-unit">
    <CalsIcon/> {{energyValue}} {{unit}}
  </div>
</template>

<script>
import CalsIcon from '../../assets/cals.svg';

export default {
  name: "EnergyUnit",
  components: {
    CalsIcon
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: 'Calories'
    }
  },
  computed: {
    energyValue() {
      return (this.unit === "kJ") ? Math.round(4.184 * this.value) : this.value;
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>
