function findMinMax(numbers) {
    const maxValue = Math.max(...numbers);
    const minValue = Math.min(...numbers);
  
    return { maxValue, minValue };
  }
  
  const array = [3, 8, 1, 6, 12, 4];
  console.log(array);
  
  const { maxValue, minValue } = findMinMax(array);
  
  console.log("Max Value:", maxValue); // Display max value
  console.log("Min Value:", minValue); // Display min value
