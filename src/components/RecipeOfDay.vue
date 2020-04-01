<template>
  <div class="cm-recipe-of-day">
    <div class="cm-recipe-of-day__image-wrapper">
      <div class="cm-recipe-of-day__image-wrapper__overlay"></div>
      <img src="~@/assets/recipe-of-day.jpg" class="cm-recipe-of-day__image" />
      <div class="cm-recipe-of-day__body">
        <div class="cm-recipe-of-day__body__title">Recipe of the Day</div>
        <div class="cm-recipe-of-day__body__recipe-title">
          {{ recipe.title }}
        </div>
        <div class="cm-recipe-of-day__body__rating">
          <star-rating :rating="recipe.rating" :size="10" :has-label="false" />
        </div>
        <div class="cm-recipe-of-day__body__info">
          <icon-with-label
            :label="recipeDuration"
            :data-testid="testId ? `${testId}__duration` : null"
            label-color="#fff"
          />
          <div class="dot"></div>
          <icon-with-label
            :label="recipeCals"
            class="cals"
            :data-testid="testId ? `${testId}__cals` : null"
            label-color="#fff"
          />
        </div>
        <div class="cm-recipe-of-day__body__footer">
          <recipe-nutrition
            :nutrition="recipe.nutrition"
            label-color="#fff"
            size="medium"
          />
          <button class="learn-more">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { recipeCardMixin } from '@/utils/mixins';

export default {
  name: 'RecipeOfDay',
  mixins: [recipeCardMixin]
};
</script>

<style lang="scss" scoped>
.cm-recipe-of-day {
  text-align: left;

  &__image-wrapper {
    position: relative;
    width: 343px;
    height: 218px;

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000;
      background-blend-mode: multiply;
      mix-blend-mode: normal;
      opacity: 0.45;
      border-radius: 12px;
      z-index: 8;
      top: 0;
    }
  }

  &__body {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    top: 0;
    padding: 32px 16px 16px;
    display: flex;
    flex-direction: column;

    &__title {
      color: #1bc98e;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
    }

    &__recipe-title {
      color: $white;
      font-weight: 600;
      font-size: 24px;
      line-height: 26px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      margin-top: 4px;
    }

    &__rating {
      margin-top: 4px;
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 4px;
      flex: 1;

      .dot {
        width: 3px;
        height: 3px;
        background-color: $white;
        border-radius: 100%;
        flex: 0 0 3px;
      }

      div + div {
        margin-left: 6px;
      }
    }

    &__footer {
      display: flex;
      align-items: center;

      .cm-recipe-nutrition {
        flex: 1;
      }

      .learn-more {
        width: 111px;
        height: 30px;
        background: rgba($white, 0.4);
        mix-blend-mode: normal;
        border-radius: 15px;
        border: 0;
        justify-self: flex-end;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        color: #fff;
        position: relative;
        cursor: pointer;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
}
</style>
