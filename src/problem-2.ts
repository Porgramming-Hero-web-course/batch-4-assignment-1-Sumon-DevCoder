// Problem 2:
const removeDuplicates = (nums: number[]): number[] => {
  const result: number[] = [...new Set(nums)];
  return result;
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
