<template>
  <div class="cm-favorite-heart">
    <heart-filled-icon v-if="isActive" />
    <heart-empty-icon v-else />
  </div>
</template>

<script>
import heartEmptyIcon from '@/assets/icons/heart-empty.svg';
import heartFilledIcon from '@/assets/icons/heart-filled.svg';
export default {
  name: 'FavoriteHeart',
  components: {
    heartEmptyIcon,
    heartFilledIcon
  },
  props: {
    isActive: Boolean
  }
};
</script>

<style lang="scss" scoped></style>
