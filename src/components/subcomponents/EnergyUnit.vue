<template>
  <div class="energy-unit">
    <CalsIcon/> {{energyValue}} {{unit}}
  </div>
</template>

<script>
import CalsIcon from '../../assets/cals.svg';

export default {
  name: "unit",
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
  components: {
    CalsIcon
  },
  computed: {
    energyValue() {
      return (this.unit === "kJ") ? Math.round(4.184 * this.value) : this.value;
    }
  },
};
</script>

<style scoped>
</style>
