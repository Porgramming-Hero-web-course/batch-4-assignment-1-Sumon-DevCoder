// Problem 3:
const countWordOccurrences = (sentence: string, word: string): number => {
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(escapedWord, "g");
  const matches = sentence.match(regex);
  return matches ? matches.length : 0;
};

// console.log(countWordOccurrences("I love typescript", "typescript"));
