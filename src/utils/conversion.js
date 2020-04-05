function convertToKilojoules(calories) {
  if (!calories) {
    return 0;
  }

  return Math.round(calories * 4.184);
}

export { convertToKilojoules };
