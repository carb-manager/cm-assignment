<template>
  <div class="cm-recipe-card">
    <div class="cm-recipe-card__image-wrapper">
      <div class="favorite-heart">
        <favorite-heart :is-active="recipe.isFavorite" />
      </div>
      <div class="cm-recipe-card__image-wrapper__hover-overlay"></div>
      <div class="cm-recipe-card__image-wrapper__overlay"></div>
      <img src="~@/assets/recipe-thumbnail.jpg" class="cm-recipe-card__image" />
      <div v-if="isPremium" class="premium-badge">
        <trophy-icon />
        <span>Premium Recipe</span>
      </div>
    </div>
    <div class="cm-recipe-card__body">
      <div class="cm-recipe-card__body__title">
        {{ recipe.title }}
      </div>
      <div class="cm-recipe-card__body__rating">
        <star-rating :rating="recipe.rating" :size="12" />
      </div>
      <div class="cm-recipe-card__body__info-wrapper">
        <div class="cm-recipe-card__body__info-wrapper__info">
          <clockIcon />
          <span>{{ recipeDuration }}</span>
        </div>
        <div class="cm-recipe-card__body__info-wrapper__info cals">
          <calsIcon />
          <span>{{ recipeCals }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FavoriteHeart from './FavoriteHeart';
import StarRating from './StarRating';
import trophyIcon from '@/assets/icons/trophy.svg';
import clockIcon from '@/assets/icons/clock.svg';
import calsIcon from '@/assets/icons/cals.svg';

import { timeConvert, calorieConvert } from '@/utils';
export default {
  name: 'RecipeCard',
  components: { trophyIcon, clockIcon, calsIcon, FavoriteHeart, StarRating },
  props: {
    title: {
      type: String,
      default: ''
    },
    recipe: {
      type: Object,
      required: true
    },
    isPremium: Boolean,
    energyUnits: {
      type: String,
      required: true,
      validator: value => {
        const isValid = ['calories', 'kilojoules'].includes(value);
        if (!isValid) {
          console.error(
            `energyUnits prop must include "calories" or "kilojoules".`
          );
        }
        return isValid;
      }
    }
  },
  computed: {
    recipeDuration() {
      return timeConvert(this.recipe.duration);
    },
    recipeCals() {
      return calorieConvert(this.recipe.nutrition.calories, this.energyUnits);
    }
  }
};
</script>
<style lang="scss" scoped>
.cm-recipe-card {
  box-shadow: 0px 13px 35px rgba($shadowColor, 0.1);
  border-radius: 12px;
  width: 343px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    .cm-recipe-card__image-wrapper {
      &__hover-overlay {
        opacity: 0.2;
      }
    }
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 12px 12px 0 0;

    &__hover-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 12px 12px 0 0;
      background-color: $white;
      opacity: 0;
      transition: opacity 0.2s ease-in;
      z-index: 3;
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 12px 12px 0 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0001) 0%,
        rgba(22, 27, 35, 0.2) 70.94%,
        rgba(26, 29, 34, 0.79) 106.25%
      );
      z-index: 2;
    }

    .premium-badge {
      position: absolute;
      bottom: 8px;
      left: 8px;
      background-color: rgba($white, 0.3);
      border-radius: 10px;
      padding: 0 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 20px;
      z-index: 4;

      span {
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.2px;
        color: $white;
        margin-left: 5px;
      }
    }

    .favorite-heart {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }

  &__image {
    width: 100%;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }

  &__body {
    padding: 8px 16px 16px;

    &__title {
      color: $black;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      text-align: left;
    }

    &__rating {
      margin-top: 16px;
    }

    &__info-wrapper {
      margin-top: 8px;
      display: flex;
      align-items: center;

      &__info {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
          font-size: 12px;
          line-height: 14px;
          color: $gray-2;
        }

        &.cals {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
