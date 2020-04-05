<template>
  <div>
    <img data-testid="bullet-image" :alt="alt" :src="icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "bullet",
  props: {
    icon: String,
    alt: String,
    text: String
  }
};
</script>
