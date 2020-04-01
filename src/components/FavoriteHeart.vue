<template>
  <div class="cm-favorite-heart">
    <heart-filled-icon
      v-if="isActive"
      :data-testid="testId ? `${testId}__heart-filled` : null"
    />
    <heart-empty-icon
      v-else
      :data-testid="testId ? `${testId}__heart-empty` : null"
    />
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
    isActive: Boolean,
    testId: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>
