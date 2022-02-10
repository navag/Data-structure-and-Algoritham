//   const threeSum = (nums) => {
//     const length = nums.length;
//     let [solution, left, right] = [[], 0, length-1];
//     if (length < 3) {
//       return []
//     }
//     nums.sort((a,b) => a-b);
//     for(let [index, number] of nums.entries()) {
//     if(number === nums[index-1]) continue;
//       left = index + 1;
//       let temp = 0;
//       while (left < right) {
//         temp = number + nums[left] + nums[right];
//         if (temp === 0) {
//           solution.push([number, nums[left], nums[right]]);
//           left++;
//           right--;
//           if (left < right && nums[left] === nums[left-1]) {
//             left++;
//           }
//           if (left < right && nums[right] === nums[right+1]) {
//             right--;
//           }
//         } else if(temp > 0) {
//           right--;
//         } else if(temp < 0) {
//           left++;
//         }
//       }
//     }
//     return solution;
//   }

  const threeSum2 = (nums) => {
    const length = nums.length;
    let [solution, left, right] = [[], 0, length - 1];

    if (nums.length < 3) return solution;
    nums.sort((a, b) => a - b);
    const target = 0;

    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] === nums[i - 1]) continue;
      const subTarget = target - nums[i];
      let left = i + 1;
      let right = length - 1;

      while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === subTarget) {
          solution.push([nums[i], nums[left], nums[right]]);
          if (nums[left] === nums[left + 1]) left++;
          if (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < subTarget) {
          left++;
        }
        else {
          right--;
        }
      }
    }

    return solution;
  }

  threeSum2([-1,0,1,2,-1,-4,-2,-3,3,0,4]);