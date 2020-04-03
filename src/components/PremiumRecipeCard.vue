<template>
  <div class="recipe-card" @click="$emit('click')">
    <div class="recipe-image" :style="recipeImageStyle">
      <MealIcon v-if="!recipeImageUrl" class="meal-icon"/>
      <div class="recipe-image-overlay"></div>
      <div class="recipe-heart"><HeartIcon v-bind:active="favorite"/></div>
      <div class="premium-badge">
        <TrophyIcon class="trophy-icon"/> Premium Recipe
      </div>
    </div>
    <div class="recipe-details">
      <h3 class="recipe-title">{{ title }}</h3>
      <div class="spacer"></div>
      <StarRating 
        class="star-rating"
        v-bind:rating="rating"
        v-bind:ratingsCount="ratingsCount"
        v-bind:showRatingsCount="true"
      />
      <div class="recipe-meta">
        <RecipeDuration 
          v-bind:minutes="recipeDurationMinutes"
        />
        <EnergyUnit 
          v-bind:value="energyValue"
          v-bind:unit="energyUnit"
        />
        <MacroDots 
          v-bind:carbs="carbs"
          v-bind:protein="protein"
          v-bind:fats="fats"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import MacroDots from "./subcomponents/MacroDots.vue";
  import StarRating from "./subcomponents/StarRating.vue";
  import EnergyUnit from "./subcomponents/EnergyUnit.vue";
  import RecipeDuration from "./subcomponents/RecipeDuration.vue";
  import HeartIcon from "./subcomponents/HeartIcon.vue";
  import TrophyIcon from '../assets/trophy.svg';
  import MealIcon from '../assets/meal.svg';

  export default {
    name: "PremiumRecipeCard",
    components: {
      MacroDots,
      StarRating,
      EnergyUnit,
      RecipeDuration,
      TrophyIcon,
      HeartIcon,
      MealIcon
    },
    props: {
      title: {
        type: String,
        default: 'This is a recipe title'
      },
      rating: Number,
      ratingsCount: Number,
      favorite: {
        type: Boolean,
        default: false
      },
      recipeImageUrl: {
        type: String,
        default: ''
      },
      carbs: Number,
      protein: Number,
      fats: Number,
      recipeDurationMinutes: Number,
      energyValue: Number,
      energyUnit: String
    },
    computed: {
      recipeImageStyle() {
        return {
          "background-image": `url(${this.recipeImageUrl})`
        };
      }
    },
    methods: {}
  };
</script>

<style scoped>
  .recipe-card {
    width:343px;
    max-width:343px;
    text-align:left;
    border-radius:12px;
    overflow:hidden;
    cursor:pointer;
    box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  }

  .recipe-image-overlay{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(22, 27, 35, 0.2) 70.94%, rgba(26, 29, 34, 0.79) 106.25%);
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:1;
  }

  .recipe-card .recipe-image-overlay:after{
    content:'';
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:1;
    transition: background 80ms linear;
    background:rgba(255,255,255,0);
  }

  .recipe-card:hover .recipe-image-overlay:after{
    background:rgba(255,255,255,0.2);
  }
  
  .recipe-image{
    height: 200px;
    position:relative;
    background-position: center center;
    background-size: cover;
  }

  .recipe-details{
    padding: 10px 16px 16px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 120px;
    box-sizing:border-box;
  }

  .recipe-heart{
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 3;
  }

  .recipe-title{
    font-size: 18px;
    line-height: 20px;
    margin-top: 0;
    padding-top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom:12px;
  }

  .spacer{
    flex-grow: 1;
  }

  .premium-badge{
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(255,255,255,0.2);
    color:white;
    padding: 5px 10px;
    border-radius: 10px;
    z-index:2;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.2px;
    color: #FFFFFF;
  }

  .trophy-icon{
    margin-right: 5px;
    vertical-align: top;
  }

  .meal-icon{
    width:80px;
    opacity:0.2;
    display: block;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }

  .recipe-meta{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 4px;
    font-size: 12px;
  }

  .recipe-meta > div:first-child{
    margin-right: 20px;
  }

  .recipe-meta > div:last-child{
    margin-left: auto;
  }

  @media only screen and (max-width: 768px) {
    .recipe-card {
      max-width:100%;
      width:100%;
    }
  }
</style>
