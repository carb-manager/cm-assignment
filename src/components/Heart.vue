<template>
  <img alt="You liked this" v-if="isHearted" src="../assets/heart_on.svg" />
  <img alt="Like this" v-else src="../assets/heart_off.svg" />
</template>

<script>
export default {
  name: "heart",
  props: {
    isHearted: Boolean
  }
};
</script>
