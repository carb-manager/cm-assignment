<template>
  <div class="recipe-card" @click="$emit('click')">
    <div class="recipe-details">
      <h3 class="recipe-title">{{ title }}</h3>
    </div>
  </div>
</template>

<script>

  export default {
    name: "PremiumRecipeCard",
    components: {
    },
    props: {
      title: {
        type: String,
        default: 'box'
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
      recipeDurationMinutes: {
        type: Number,
        default: 0
      },
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
    flex-grow: 1;
  }

  @media only screen and (max-width: 768px) {
    .recipe-card {
      max-width:100%;
      width:100%;
    }
  }
</style>
