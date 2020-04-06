<template>
  <div class="favorite">
    <img v-if="isFavorite" class="favorited" src="../../assets/favorite-selected.svg" />
    <img v-if="!isFavorite" class="not-favorited" src="../../assets/favorite.svg" />
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
