// Problem 1:
const sumArray = (nums: number[]): number => {
  const result: number = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return result;
};

// console.log(sumArray([1, 2, 3, 4, 5]));

// Problem 2:
const removeDuplicates = (nums: number[]): number[] => {
  const result: number[] = [...new Set(nums)];
  return result;
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Problem 3:
const countWordOccurrences = (sentence: string, word: string): number => {
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(escapedWord, "g");
  const matches = sentence.match(regex);
  return matches ? matches.length : 0;
};

// console.log(countWordOccurrences("I love typescript", "typescript"));

// Problem 4:
type TCircle = {
  shape: "circle";
  radius: number;
};

type TRectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type TShape = TCircle | TRectangle;

const calculateShapeArea = (shape: TShape) => {
  if (shape.shape === "rectangle") {
    return shape.height * shape.width;
  } else if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }
};

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(rectangleArea);

// Problem 5:
const getProperty = (obj, name) => {};

// Problem 6:
