<template>
  <img alt="You liked this" v-if="isHearted" src="../assets/heart_on.svg" class="cm-c-heart" />
  <img alt="Like this" v-else src="../assets/heart_off.svg" class="cm-c-heart" />
</template>

<script>
export default {
  name: "heart",
  props: {
    isHearted: Boolean
  }
};
</script>
