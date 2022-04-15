const analyzeArray = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length,
    length: arr.length,
  };
};

export default analyzeArray;
