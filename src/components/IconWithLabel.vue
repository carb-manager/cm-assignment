<template>
  <div class="cm-icon-with-label">
    <component :is="svgIcon" v-if="icon" />
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'IconWithLabel',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    svgIcon() {
      return () =>
        import(/* webpackPrefetch: true */ `@/assets/icons/${this.icon}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.cm-icon-with-label {
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    font-size: 12px;
    line-height: 14px;
    color: $gray-2;
  }
}
</style>
