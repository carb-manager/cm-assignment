<template>
  <div class="cm-icon-with-label">
    <component :is="svgIcon" v-if="icon" />
    <span :style="labelColorStyle">{{ label }}</span>
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
    labelColor: {
      type: String,
      default: '#393c40'
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
    },
    labelColorStyle() {
      return {
        color: this.labelColor,
        marginLeft: this.icon ? 8 : 0
      };
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
  }
}
</style>
