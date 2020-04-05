<template>
  <div class="cm-o-bullet">
    <img
      data-testid="bullet-image"
      :alt="alt"
      :src="icon"
      :class="{ 'cm-u-mr-medium': spacing === 'medium', 'cm-u-mr-small': spacing === 'small' }"
    />
    <span class="cm-o-bullet__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "bullet",
  props: {
    icon: String,
    alt: String,
    text: String,
    spacing: String
  }
};
</script>
