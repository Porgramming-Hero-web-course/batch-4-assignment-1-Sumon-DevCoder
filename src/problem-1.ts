// Problem 1:
const sumArray = (nums: number[]): number => {
  const result: number = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return result;
};

// console.log(sumArray([1, 2, 3, 4, 5]));
