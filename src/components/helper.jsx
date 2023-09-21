export const getMeanAny = (arr) => {
  const sum = arr.reduce((acc, value) => acc + parseFloat(value), 0);
  const mean = sum / arr.length;
  return mean?.toFixed(3);
};

export const getMedianAny = (arr) => {
  const flavanoidValues = [...arr];
  flavanoidValues.sort((a, b) => a - b);
  const middle = Math.floor(flavanoidValues.length / 2);

  if (flavanoidValues.length % 2 === 0) {
    const median1 = flavanoidValues[middle - 1];
    const median2 = flavanoidValues[middle];
    return ((median1 + median2) / 2)?.toFixed(3);
  } else {
    return flavanoidValues[middle]?.toFixed(3);
  }
};

export const getModeAny = (arr) => {
  const flavanoidValues = [...arr];
  const counts = {};
  let maxCount = 0;
  let mode = null;

  flavanoidValues.forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
    if (counts[value] > maxCount) {
      maxCount = counts[value];
      mode = value;
    }
  });

  return mode?.toFixed(3);
};
