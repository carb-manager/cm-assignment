<template>
  <div class="energy-unit">
    <CalsIcon class="cals-icon" v-if="showIcon"/> {{energyValue}} {{formattedUnit}}
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
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    energyValue() {
      return (this.formattedUnit === "kJ") ? Math.round(4.184 * this.value) : this.value;
    },
    formattedUnit() {
      return ["kj", "kilojoule", "kilojoules"].indexOf(this.unit.toLowerCase()) > -1 ? 'kJ' : 'Calories'; 
    }
  },
  methods: {}
};
</script>

<style scoped>
.cals-icon{
  margin-right: 5px;
  vertical-align: top;
  margin-top: -2px;
}
</style>
