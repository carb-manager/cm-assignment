<template>
  <div class="favorite">
    <img v-if="isFavorite" class="dot" src="../../assets/favorite-selected.svg" />
    <img v-if="!isFavorite" class="dot" src="../../assets/favorite.svg" />
    <img class="icon" src="../../assets/energy.svg" v-if="isShowedIcon" />
  </div>
</template>

<script>
export default {
  name: "Favorite",
  props: {
    isFavorite: {
      type: Boolean,
      default: false
    }
  }
};
</script>
