const calculatePermutation = (arr) => {
  // [1,2,3]
  //[[]]
  //[[1]]
  //[[2,1],[1,2]]
  //[[3,2,1],[2,3,1],[2,1,3],[3,1,2],[1,3,2],[1,2,3]]
  let permutations = [[]];
  for (const num of arr) {
    let tempPs = []
    for (const permutation of permutations) {

      for (let i = 0; i <= permutation.length; i++) {
        const tempP = [];
        for (let j = 0; j < i; j++) {
          tempP.push(permutation[j]);
        }
        tempP.push(num);
        for (let k = i; k < permutation.length; k++) {
          tempP.push(permutation[k]);
        }
        tempPs.push(tempP);
      }
    }
    permutations = tempPs;
  }
  return permutations;
}

calculatePermutation([1,2,3]);