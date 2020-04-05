<template>
  <div class="badge" v-if="isPremium">
    <TrophyIcon class="trophy-icon" />Premium Recipe
  </div>
</template>
<script>
import TrophyIcon from "../../assets/trophy.svg";

export default {
  name: "Badge",
  props: {
    isPremium: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TrophyIcon
  }
};
</script>
