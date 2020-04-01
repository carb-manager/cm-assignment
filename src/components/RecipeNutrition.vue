<template>
  <div class="cm-recipe-nutrition">
    <div
      class="cm-recipe-nutrition__info carbs"
      :data-testid="testId ? `${testId}__carbs` : null"
    >
      <div class="dot"></div>
      <span>{{ nutrition.carbs }}g</span>
    </div>
    <div
      class="cm-recipe-nutrition__info protein"
      :data-testid="testId ? `${testId}__protein` : null"
    >
      <div class="dot"></div>
      <span>{{ nutrition.protein }}g</span>
    </div>
    <div
      class="cm-recipe-nutrition__info fats"
      :data-testid="testId ? `${testId}__fats` : null"
    >
      <div class="dot"></div>
      <span>{{ nutrition.fats }}g</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeNutrition',
  props: {
    nutrition: {
      type: Object,
      required: true
    },
    testId: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.cm-recipe-nutrition {
  display: flex;
  align-items: center;

  &__info {
    display: flex;
    align-items: center;

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      flex: 0 0 6px;
    }

    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: $gray-4;
      margin-left: 4px;
    }

    & + div {
      margin-left: 8px;
    }

    &.carbs {
      .dot {
        background-color: $red;
      }
    }

    &.protein {
      .dot {
        background-color: $blue;
      }
    }

    &.fats {
      .dot {
        background-color: $yellow;
      }
    }
  }
}
</style>
