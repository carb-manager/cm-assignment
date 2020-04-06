module.exports = {
  getDurations: (cookingMinutes) => {
    if (cookingMinutes > 60) {
      const hours = Math.floor(cookingMinutes / 60);
      const minutes = cookingMinutes % 60;
      return `${hours} hr ${minutes} min`;
    } else {
      return `${cookingMinutes} min`;
    }
  },
  caloriesToKiloJoules: (calories) => {
    return (calories * 4.184).toFixed(2);
  },
};
