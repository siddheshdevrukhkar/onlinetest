const twoSum = (n, t) => {
  const numMap = new Map();
  for (let i = 0; i < n.length; i++) {
    const complement = t - n[i];
    if (numMap.has(complement)) return [numMap.get(complement), i];
    numMap.set(n[i], i);
  }
  throw new Error("No solution found.");
};

const ar1 = [2, 7, 11, 15];
const target = 22;
console.log(twoSum(ar1, target));
