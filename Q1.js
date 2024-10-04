const lisEndAtI = (arr, i, memo) => {
  if (i === 0) return 1;
  if (memo[i] !== -1) return memo[i];
  let mx = 1;
  arr
    .slice(0, i)
    .forEach(
      (val, prev) =>
        (mx = val < arr[i] ? Math.max(mx, lisEndAtI(arr, prev, memo) + 1) : mx)
    );
  return (memo[i] = mx);
};

const lis = (arr) => {
  const n = arr.length;
  const memo = Array(n).fill(-1);
  let res = 1;
  for (let i = 1; i < n; i++) res = Math.max(res, lisEndAtI(arr, i, memo));
  return res;
};

const ar1 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lis(ar1));
