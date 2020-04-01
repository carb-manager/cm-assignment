export const timeConvert = num => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `${hours > 0 ? `${hours} hr ` : ''}${
    minutes > 0 ? `${minutes} min` : ''
  }`;
};

export const calorieConvert = (num, type) => {
  return type === 'kilojoules'
    ? `${(num * 4.184).toFixed(2)} kJ`
    : `${num} Calories`;
};
