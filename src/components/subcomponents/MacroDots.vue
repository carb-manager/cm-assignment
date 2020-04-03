<template>
  <div class="macro-dots">
    <span class="macro-dot--carbs">●</span>{{carbs}}g
    <span class="macro-dot--protein">●</span>{{protein}}g
    <span class="macro-dot--fats">●</span>{{fats}}g
  </div>
</template>

<script>
export default {
  name: "MacroDots",
  props: {
    carbs: {
      type: Number,
      default: 0
    },
    protein: {
      type: Number,
      default: 0
    },
    fats: {
      type: Number,
      default: 0
    },
  }
};
</script>

<style scoped>
  .macro-dots {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }

  .macro-dots span[class^="macro-dot"]{
    margin-right: 5px;
    vertical-align: top;
    line-height: 12px;
  }

  .macro-dot--carbs{
    color: #F94642;
  }
  .macro-dot--protein{
    color: #3177BB;
  }
  .macro-dot--fats{
    color: #FDA120;
  }

  .macro-dots span:not(:first-child){
    margin-left: 10px;
  }

</style>
